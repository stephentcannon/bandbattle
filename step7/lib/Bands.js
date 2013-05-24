Bands = new Meteor.Collection("bands");

Bands.validate = function(option){
	if(Bands.findOne({name: option.name})){
		throw 'Band name must be unique!';
	}
};

