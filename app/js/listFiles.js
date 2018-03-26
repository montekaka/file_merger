var fs = eRequire('fs');
var extensions = ['xlsx'];
var XLSX = require('xlsx');
// var remote = require('remote'); 
// const {dialog} = require('electron').remote;

//var dialog = require('electron').remote.dialog;
//var o = dialog.showOpenDialog({ properties: ['openFile'] });
var path = '/Users/joshchen1985/desktop/';
fs.readdir(path, function(err, files){
	'use strict';
  if (err) throw  err;
  //the files parameter is an array of the files and folders in the path we passed. So we loop through the array, printing each file and folder
  for (let file of files) {
  	var fileExtension = file.split('.').pop();
  	//console.log(fileExtension);
  	if( extensions.includes(fileExtension) ) {
  		var workbook = XLSX.readFile(path+file);
  		console.log(workbook)
			//console.log(file);
  	}    
  }	
});