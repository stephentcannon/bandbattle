Meteor.publish("allbands", function(options) {

});


// Bands.allow({
//   insert: function (userId, doc){
//   	//return false;
//   	return true;
//   },
//   update: function(userId, doc, fieldNames, modifier){
//   	return false;
//   },
//   remove: function(userId, doc){
//   	return false;
//   },
//   fetch: ['name', 'votes']
// });

// Bands.deny({
//   insert: function () {
//   	return true; 
//   },
//   remove: function () {return true; },
//   update: function() {return true; },
//   fetch: []
// });