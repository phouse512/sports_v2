var Category = require('../category');

exports.seedCategory = function(){
	Category.find(function(err, categories){
		if(categories.length){
			console.log('Some categories already exist, not seeding');
			return;
		}

		console.log('Seeding with new categories');
		new Category({
			name: 'football',
			usageCount: 0,
		}).save();
		new Category({
			name: 'basketball',
			usageCount: 0,
		}).save();
		new Category({
			name: 'baseball',
			usageCount: 0,
		}).save();
		new Category({
			name: 'hockey',
			usageCount: 0,
		}).save();
	});
}