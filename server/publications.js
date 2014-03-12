Meteor.publish('media', function() {
	return Media.find();
});