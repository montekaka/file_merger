var React = require('react');

var SheetDetail = React.createClass({
  render: function() {
    var sheetRecords = this.props.sheetRecords;
    var idx = this.props.idx;
    var sheetName = this.props.sheetName;
    //console.log(sheetNames);
    return (      
      <th key={idx} className={sheetName}>{sheetRecords}</th>
    );
  }
});

module.exports = SheetDetail;