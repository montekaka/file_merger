var React = require('react');

var Toolbar = React.createClass({
  toggleAbout: function() {
    this.props.handleAbout();
  },
  directoryChanged: function(event){
    var file = document.getElementById('folderName').files[0];
    this.props.handleDirectoryChanged(file);
  },
  render: function() {
    return(
      <div className="toolbar">
        <div className="toolbar-item">
          <input type="file" name="folderName" id="folderName" className="inputfile" onChange={event => this.directoryChanged(event)  } />
        </div>        
        <div className="toolbar-item" onClick={this.toggleAbout}>
          <span className="toolbar-item-button glyphicon glyphicon-question-sign"></span>
          <span className="toolbar-item-text">About this app</span>
        </div>       
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = Toolbar;