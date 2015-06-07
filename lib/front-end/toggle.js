'use strict'

module.exports = function(selector, action, toggleClass, callback){
	$(selector).on(action, function(){
		if($(this).hasClass(toggleClass)){
			$(this).removeClass(toggleClass);
		} else {
			$(this).addClass(toggleClass);
		}

		callback(selector, action, toggleClass);
	});
}