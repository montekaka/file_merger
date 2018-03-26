var React = require('react');

var SheetList = React.createClass({
  render: function() {
    var sheetName = this.props.sheetName;
    var idx = this.props.idx;
    //console.log(sheetNames);
    return (      
      <td key={idx}>{sheetName}</td>
    );
  }
});

module.exports = SheetList;