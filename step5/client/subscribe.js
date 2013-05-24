Deps.autorun(function() {
	Meteor.subscribe('allbands', {votes:Session.get('votes')});
});
