define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

	var AddView = Backbone.View.extend({
		render: function(parameters) {
			var appDiv = document.getElementById('app');
			appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
		}
	});

	return AddView;
});