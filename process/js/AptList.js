var React = require('react');
var SheetList = require('./SheetList');

var AptList = React.createClass({
  render: function() {
    var filename = this.props.singleItem.filename;
    var workbook = this.props.singleItem.wb;    
    var sheetNames = workbook.SheetNames;
    var numberOfsheets = sheetNames.length;

    var sheetNamesList = sheetNames.map(function(item, index) {
      return (
        <SheetList key = {index}
          idx = {index}
          sheetName = {item}
        />
      ) //return 
    }.bind(this));

    //console.log(sheetNames);
    return (
     <li className="pet-item media">
       <div className="pet-info media-body">
         <div className="pet-head">
           <span className="pet-name">{filename}</span>
         </div>
         <div className="owner-name"><span className="label-item">Number of Tabs:</span>{numberOfsheets}</div>
         <table className="table">
          <tbody>
            <tr>{sheetNamesList}</tr>            
          </tbody>          
         </table>          
       </div>      
     </li>  
    )
  }
});

module.exports = AptList;