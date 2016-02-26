define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var ListView = Backbone.View.extend({
		render: function(parameters) {
			var appDiv = document.getElementById('app');
			var users = parameters;
			var html = '<ul>';

			for (var i = 0, len = users.length; i < len; i++){
				html += '<li>' + users[i].name + '</li>';
			}
			html += '</ul>';
			appDiv.innerHTML = html;
		}
	});
	return ListView;
});