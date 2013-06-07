Meteor.publish("allbands", function(options) {
  var selector = {};
  if(options.votes){
    selector.votes = {
      $gte: Number(options.votes),
    };
  }
  return Bands.find(selector);
});


Bands.allow({
  insert: function (userId, doc){
    try{
      if(!userId){
        throw 'Sorry, you gotta be logged in to add bands!';
      }
      Bands.validate(doc);
      //return false;
      doc.votes = 0;
      doc.userId = userId;
      return true;
    }catch(error){
      throw new Meteor.Error(600, 'Server error: ' + error);
    }
  },
  update: function(userId, doc, fieldNames, modifier){
  	// return false;
    if(modifier.$inc.votes){
      if(modifier.$inc.votes > 1 || modifier.$inc.votes < -1){
        return false
      } else { 
        return true;
      }
    } else {
      return false;
    }
  },
  remove: function(userId, doc){
  	//return false;
    try{
      if(Meteor.users.findOne({_id: userId}) ){
        if(Meteor.users.findOne({_id: userId}).username = 'steeve'){
          return true;
        }
      }
      if(doc.userId != userId){
        throw "WTF hoser? You can't delete bands you didn't add!";
      }
      return true;
    }catch(error){
      throw new Meteor.Error(600, 'Server error: ' + error);
    }
  },
  fetch: ['name', 'votes', 'userId']
});

// Bands.deny({
//   insert: function () {return true; },
//   remove: function () {return true; },
//   update: function() {return true; },
//   fetch: []
// });