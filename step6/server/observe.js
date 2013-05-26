//var bandsQuery = Bands.find();

// var bandsHandle = bandsQuery.observe({
//   added: function (document) {
//   	console.log('added');
//     console.log(document);
//   },
//   addedAt: function(document, atIndex, before){
//   	console.log('addedAt');
//   	console.log(document)
//   	console.log(atIndex);
//   	console.log(before);
//   },
//   changed: function (oldDoc, newDoc){
//   	console.log('change');
//     console.log(oldDoc);
//     console.log(newDoc);
//   },
//   changedAt: function(newDocument, oldDocument, atIndex){
//   	console.log('changedAt');
//   	console.log(newDocument);
//   	console.log(oldDocument);
//   	console.log(atIndex);
//   },
//   removed: function(oldDocument){
//   	console.log('removed');
//   	console.log(oldDocument);
//   },
// 	removedAt: function(oldDocument, atIndex){
// 		console.log('removedAt');
// 		console.log(oldDocument, atIndex);
// 	},
// 	movedTo: function(document, fromIndex, toIndex, before){
// 		console.log('movedTo');
// 		console.log(document);
// 		console.log(fromIndex);
// 		console.log(toIndex);
// 		console.log(before);
// 	}
// });

// var bandsHandle = bandsQuery.observeChanges({
//   added: function(id, fields){
//     console.log('added');
//     console.log(id);
//     console.log(fields);
//   },
//   addedBefore: function(id, fields, before){
//     console.log('addedBefore');
//     console.log(id);
//     console.log(fields);
//     console.log(before);
//   },
//   changed: function(id, fields){
//     console.log('changed');
//     console.log(id);
//     console.log(fields);
//   },
//   movedBefore: function(id, before){
//     console.log('movedBefore');
//     console.log(id);
//     console.log(before);
//   },
//   removed: function(id){
//     console.log('removed')
//     console.log(id);
//   }
// });