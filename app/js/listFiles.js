var fs = eRequire('fs');
var extensions = ['xlsx','xls','xlsm','xlsb','xml','csv'];
var XLSX = require('xlsx');
//var path = '/Users/joshchen1985/desktop/merging/';

// fs.readdir(path, function(err, files){	
// 	'use strict';
// 	var combinedData = [];
// 	if(err) throw err; 
// 	for(let file of files){			
// 		var fileExtension = file.split('.').pop();
// 		if(extensions.includes(fileExtension)){
// 			var workbook = XLSX.readFile(path+file);
// 			var ws = workbook.Sheets['Item Price'];
// 			var data = XLSX.utils.sheet_to_json(ws);
// 			combinedData = combinedData.concat(data);	
// 		}
// 	}	

// 	var ws = XLSX.utils.json_to_sheet(combinedData);
// 	var wb = {SheetNames: [], Sheets:{}};
// 	wb.SheetNames.push('Item Price');
// 	wb.Sheets['Item Price'] = ws;
// 	console.log("saving....");
// 	var combineFileName = path+'combined.xlsx';
// 	XLSX.writeFile(wb, combineFileName);

// });