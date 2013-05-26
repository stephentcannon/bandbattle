Bands = new Meteor.Collection("bands");

Bands.validate = function(options){
	if(options.name){
		if(Bands.findOne({name: options.name})){
			throw 'Band name must be unique!';
		}
	}
};

