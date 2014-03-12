Media = new FS.Collection("media", {
  stores: [new FS.Store.FileSystem("images")]
});

Media.allow({
	insert: isAdmin,
	update: isAdmin,
	remove: isAdmin,
	download: isAdmin
})