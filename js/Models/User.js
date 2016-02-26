define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

	var User = Backbone.Model.extend({
		defaults: {
			name: name || 'Default name'
		}
	});

	return User;
});