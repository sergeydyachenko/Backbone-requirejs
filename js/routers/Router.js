define(['jquery', 'underscore', 'backbone', 'Controllers/AddController', 'Controllers/ListController'], function($, _, Backbone, AddController, ListController){
	var Router = Backbone.Router.extend({
		routes: {
			'' : 'index',
			'add': 'add',
			'list': 'list'
		},
		index : function() {
			console.log("hi! i'm router");
		},
		add: function() {
			var addController = new AddController();
		},
		list: function() {
			var listController = new ListController();
		}
	});

	return Router;
});