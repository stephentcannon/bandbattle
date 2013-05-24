Meteor.publish("allbands", function(options) {
  var selector = {};
  if(options.votes){
    selector.votes = {
      $gte: options.votes,
    };
  }
  return Bands.find(selector);
});


Bands.allow({
  insert: function (userId, doc){
    try{
      Bands.validate(doc);
      //return false;
      return true;
    }catch(error){
      throw new Meteor.Error(600, 'Server error: ' + error);
    }
  },
  update: function(userId, doc, fieldNames, modifier){
  	return false;
  },
  remove: function(userId, doc){
  	return false;
  },
  fetch: ['name', 'votes']
});

Bands.deny({
  // insert: function () {return true; },
  remove: function () {return true; },
  update: function() {return true; },
  fetch: []
});