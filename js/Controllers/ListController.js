define(['jquery', 'underscore', 'backbone', 'Views/ListView'], function($, _, Backbone, ListView){

	var ListController = Backbone.Model.extend({
		initialize: function() {
			var users = JSON.parse(localStorage.users);
			var listView = new ListView();
			listView.render(users);
		}
	});

	return ListController;
});