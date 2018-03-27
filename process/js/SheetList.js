var React = require('react');

var SheetList = React.createClass({
  render: function() {
    var sheetName = this.props.sheetName;
    var idx = this.props.idx;
    //console.log(sheetNames);
    return (      
      <th key={idx}>{sheetName}</th>
    );
  }
});

module.exports = SheetList;