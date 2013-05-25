Template.bands.getBands = function(){
	return Bands.find({},{sort: {votes: -1}});
};

Template.bands.myBand = function(){
  console.log(this);
  if(Meteor.user()){
    if(this.userId == Meteor.user()._id){
      return true;
    }
  }
};

Template.bands.events({
  'click #btnAdd': function(event, template){
    event.preventDefault();
    // event.stopPropagation();
    // console.log(template.find('#band').value );
    Bands.insert({
      name: template.find('#band').value
    });
  },
  'click #btnShow': function(event, template){
    event.preventDefault();
    // event.stopPropagation();
    // console.log(template.find('#votes').value );
    Session.set('votes', template.find('#votes').value);
  },
  'click .btnUp': function(event, template) {
    event.preventDefault();
    // event.stopPropagation();
    console.log(this);
    Bands.update({_id: this._id}, {$inc: {votes: 1}}, function(error){
      if(error){
        console.log(error);
      }
    });
  },
  'click .btnDown': function(event, template) {
    event.preventDefault();
    // event.stopPropagation();
    console.log(this);
    Bands.update({_id: this._id}, {$inc: {votes: -1}}, function(error){
      if(error){
        console.log(error);
      }
    });
  },
  'click .btnTrash': function(event, template) {
    event.preventDefault();
    // event.stopPropagation();
    console.log(this);
    Bands.remove({_id: this._id}, function(error){
      if(error){
        console.log(error);
      }
    });
  },
});