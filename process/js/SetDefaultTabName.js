var $ = jQuery = require('jquery');
var React = require('react');

var SetDefaultTabName = React.createClass({
  handleSetTargetTabName: function(){
    var tabName = $('#settabname').val();
    this.props.handleSetTabName(tabName);
  },
  render: function() {
    return(
      <div className="input-group tab-name-input">
        <input type="text" className="form-control" id="settabname" placeholder="Set merge tab for..."/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSetTargetTabName}>Go!</button>
        </span>
      </div>
    ) //return
  } //render
}); //Toolbar

module.exports = SetDefaultTabName;