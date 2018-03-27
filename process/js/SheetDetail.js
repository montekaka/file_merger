var React = require('react');

var SheetDetail = React.createClass({
  render: function() {
    var sheetRecords = this.props.sheetRecords;
    var idx = this.props.idx;
    //console.log(sheetNames);
    return (      
      <th key={idx}>{sheetRecords}</th>
    );
  }
});

module.exports = SheetDetail;