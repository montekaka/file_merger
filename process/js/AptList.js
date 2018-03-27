var React = require('react');
var SheetList = require('./SheetList');
var SheetDetail = require('./SheetDetail');

var AptList = React.createClass({
  render: function() {
    var filename = this.props.singleItem.filename;
    var workbook = this.props.singleItem.wb;
    var worksheets = workbook.Sheets;  
    var ws = [];  
    var sheetNames = workbook.SheetNames;
    var numberOfsheets = sheetNames.length;
    
    for(var i = 0; i < sheetNames.length; i++){
      var sheetName = sheetNames[i];
      var worksheet = worksheets[sheetName];
      worksheet = XLSX.utils.sheet_to_json(worksheet)
      ws.push(worksheet.length);
    }

    var sheetDetailList = ws.map(function(item, index) {
      return (
        <SheetDetail key = {index}
          idx = {index}
          sheetRecords = {item}
        />
      ) //return
    }.bind(this));

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
          <thead>            
            <tr>
              <th>#</th>
              {sheetNamesList}
            </tr>            
          </thead>        
          <tbody>
            <tr>
              <td>Number of records</td>
              {sheetDetailList}
            </tr>
          </tbody>
         </table>          
       </div>      
     </li>  
    )
  }
});

module.exports = AptList;