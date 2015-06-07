'use strict'

var Pikaday = require('pikaday'),
	handlebars = require('handlebars'),
	toggler = require('./toggle');

//var pickadate = require('pickadate');

exports.addQuestion = function(){
	var $answer = $("#newAnswers");

	// functions
	var onload = function(){
			//var endTime = new Pikaday({ field: $('#endTime')[0] });
			//$("#endTime").pickadate();]

			// $('#datetimeselector').datetimepicker({
			// 	language: 'en',
			// 	pick12HourFormat: true
			// });
			$("#addAnswer").on('click', function(){
				addAnswerHandler();
			});

			$("#removeAnswer").on('click', function(){
				subtractAnswerHandler();
			});
			toggler('.category', 'click', 'category-selected', stringifyCategories);
		},
		addAnswerHandler = function(){
			var answerTemplate = handlebars.compile($('#answerTemplate').html());
			$answer.append(answerTemplate());
		},
		subtractAnswerHandler = function(){
			if($answer.children().length > 1){
				$answer.children("input:last").remove();
			}
		},
		stringifyCategories = function(selector, action, toggleClass){
			var output = "";
			$("." + toggleClass).each(function(){
				output = output + "," + $(this).attr("category-id");
			});
			$("#inputCategories").val(output);
		};


	onload();
}