Meteor.subscribe("media");


Template.media.events({
	'change .fileUploader':function(e){
		FS.Utility.eachFile(e, function (file) {
		    Media.insert(file);
	    });
	},
	'click .delete-file': function(e) {
		Media.remove(this._id);
	}
})

Template.imageList.files = function(){
	return Media.find();
}