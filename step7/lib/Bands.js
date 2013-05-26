Bands = new Meteor.Collection("bands");

Bands.validate = function(options){
	// console.log(options);
	if(!options.name){
		throw 'Band name cannot be blank!';
	}
	if(options.name == '' || options.name == undefined){
		throw 'Band name cannot be blank!';
	}
	if(Bands.findOne({name: options.name})){
		throw 'Band name must be unique!';
	}
};

