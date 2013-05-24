Meteor.startup(function () {
	Session.setDefault('votes', 10);

	// INSERT
	// try{
	// 	var id = Bands.insert({name: 'Motorhead', votes: 99999});
	//   console.log(id);
	// }catch(error){
	// 	console.log(error);
	// }
	// OR CALLBACK STYLE
	Bands.insert({name: 'Back Flag', votes: 2000}, function(error, _id){
		if(error){
			console.log(error);
		} else {
			console.log(_id);
		}
	});
	// findOne
	// var Motorhead = Bands.findOne({name: 'Motorhead'});
  // Bands.update({_id: Motorhead._id}, votes: 4)
  // This shit will break!
  // Bands.update({name: 'Back Flag'}, {$set:{name:'Black Flag'}}, function(error){
  // 	console.log(error);
  // })
  // Bands.remove({_id: Motorhead._id})
  // This shit will break!
  // Bands.remove({name: 'Back Flag'}, function(error){
  // 	console.log(error);
  // })
	// STEP 3
	// Bands.insert({name: '13th Floor Elevators', votes: 98989}, function(error, result){
	// 	if(error){
	// 		console.log('WTF! '  + error);
	// 	} else {
	// 		console.log('Hell yeah that shit worked! ' + result);
	// 	}
	// });
});