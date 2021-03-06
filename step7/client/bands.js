Template.bands.getBands = function(){
	return Bands.find({},{sort: {votes: -1}});
};

Template.bands.myBand = function(){
  console.log(this.name);
  if(Meteor.user()){
    if(this.userId == Meteor.user()._id || Meteor.user().username == 'steeve'){
      return true;
    }
  }
};

Template.bands.events({
  'click #btnAdd': function(event, template){
    event.preventDefault();
    // event.stopPropagation();
    // console.log(template.find('#band').value );
    Bands.validate({name: template.find('#band').value});
    Bands.insert({name: template.find('#band').value}, function(error, _id){
      // if(error){
      //   console.log(error);
      // } else {
      //   console.log(_id);
      // }
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
    console.log(this.name);
    Bands.update({_id: this._id}, {$inc: {votes: 1}}, function(error){
      // if(error){
      //   console.log(error);
      // }
    });
  },
  'click .btnDown': function(event, template) {
    event.preventDefault();
    // event.stopPropagation();
    // console.log(this);
    Bands.update({_id: this._id}, {$inc: {votes: -1}}, function(error){
      // if(error){
      //   console.log(error);
      // }
    });
  },
  'click .btnTrash': function(event, template) {
    event.preventDefault();
    // event.stopPropagation();
    // console.log(this);
    Bands.remove({_id: this._id}, function(error){
      // if(error){
      //   console.log(error);
      // }
    });
  },
});