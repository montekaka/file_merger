var React = require('react');

var BrowseFile = React.createClass({
  directoryChanged: function(event){
    var file = document.getElementById('folderName2').files[0];
    this.props.handleDirectoryChanged(file);
  },
  render: function() {
    return(
      <div className="input-group mb-3 browse-file">
        <div className="custom-file">
          <input type="file" placeholder="directory" id="folderName2" onChange={event => this.directoryChanged(event)  } />    
        </div>
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = BrowseFile;