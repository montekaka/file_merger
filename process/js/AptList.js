var React = require('react');

var AptList = React.createClass({
  render: function() {
    var filename = this.props.singleItem.filename;
    var workbook = this.props.singleItem.wb;    
    var sheetNames = workbook.SheetNames;
    var numberOfsheets = sheetNames.length;
    console.log(sheetNames);
    return (
     <li className="pet-item media">
       <div className="pet-info media-body">
         <div className="pet-head">
           <span className="pet-name">{filename}</span>
         </div>
         <div className="owner-name"><span className="label-item">Number of Tabs:</span>{numberOfsheets}</div>
         <div className="apt-notes">{numberOfsheets}</div>
       </div>
     </li>  
    )
  }
});

module.exports = AptList;