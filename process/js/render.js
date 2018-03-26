var $ = jQuery = require('jquery');
var _ = require('lodash');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');
var loadApts = JSON.parse(fs.readFileSync(dataLocation));

var electron = eRequire('electron');
var path = require("path");

var ipc = electron.ipcRenderer;

var React = require('react');
var ReactDOM = require('react-dom');
var AptList = require('./AptList');
var Toolbar = require('./Toolbar');
var BrowseFile = require('./BrowseFile');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      directory: 'Welcome',
      workbooks: [],
      myAppointments: loadApts
    }//return
  }, //getInitialState

  componentDidUpdate: function() {
    fs.writeFile(dataLocation, JSON.stringify(this.state.myAppointments), 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });//writeFile
  }, //componentDidUpdate

  showAbout:function() {
    ipc.sendSync('openInfoWindow');
  },

  getListOfFiles: function(directory){
    // custom value 
    var wbs = [];
    var wthis = this;
    fs.readdir(directory, function(err, files){
      'use strict';
      if (err) throw  err;
      for (let file of files) {
        var fileExtension = file.split('.').pop();
        if( extensions.includes(fileExtension) ) {
          var workbook = {"filename": file, "wb": XLSX.readFile(directory+file)};
          wbs.push(workbook);
        }
      }

      wthis.setState({
        workbooks: wbs
      });
    })
  },

  updateSelectedDirectory: function(file){
    if(file) {
      var filepath = file.path;
      var filename = file.name;
      var directory = filepath.slice(0, filepath.length - filename.length);
      this.getListOfFiles(directory);
      //console.log(directory);
      this.setState({
        directory: directory
      });
    }
  },

  render: function() {
    var myAppointments = this.state.myAppointments;
    var directory = this.state.directory;
    var wbs = this.state.workbooks;

    wbs = wbs.map(function(item, index) {
      return (
        <AptList key = {index}
          singleItem = {item}
          whichItem = {item}
        />
      ) //return 
    }.bind(this));

    return(
      <div className="application">
        <div className="interface">
          <Toolbar
            // handleDirDialog = {this.openDirDialog}
            handleAbout = {this.showAbout}   
            handleDirectoryChanged = {this.updateSelectedDirectory}      
          />
          <div className="container">
           <div className="row">
             <div className="appointments col-sm-12">
               <h2 className="appointments-headline">{directory}</h2>
                <BrowseFile 
                  handleDirectoryChanged = {this.updateSelectedDirectory}
                />               
               <ul className="item-list media-list">{wbs}</ul>
             </div>{/* col-sm-12 */}
           </div>{/* row */}
          </div>{/* container */}
        </div>{/* interface */}
      </div>
    );
  } //render
});//MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); //render