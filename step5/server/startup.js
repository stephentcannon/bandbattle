Meteor.startup(function () {
	// Blocking insert
	// var id = Bands.insert({name: 'Back Flag', votes: 999999});
	// Non blocking insert
	// Bands.insert({name: 'Back Flag', votes: 999999}, function(error, result){
	// 	console.log(error);
	// 	console.log(result);
	// });
	// Blocking update
	// Bands.update({name: 'Back Flag'}, {$set:{name:'Black Flag'}});
	// Non blocking update
	// Bands.update({name: 'Back Flag'}, {$set:{name:'Black Flag'}}, function(error){
	// 	console.log(error);
	// });
	// Blocking remove
	// Bands.remove({votes: {$lte: 0}}, {multi:true})
	// Non blocking remove
	// Bands.remove({votes: {$lte: 0}}, {multi: true}, function(error){
	// 	console.log(error);
	// })
})