'use strict'

var Pikaday = require('pikaday');
//var pickadate = require('pickadate');

exports.addQuestion = function(){
	var onload = function(){
		console.log('woot');
		var endTime = new Pikaday({ field: $('#endTime')[0] });
		//$("#endTime").pickadate();
	};


	onload();
}