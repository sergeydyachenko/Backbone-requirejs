define(['jquery', 'underscore', 'backbone', 'Views/AddView', 'Models/User'], function($, _, Backbone, AddView, User){

	var AddController = Backbone.View.extend({
		initialize: function() {
			var addView = new AddView();
			var users = new User();
			addView.render(users);
			this.render();
		},
		render: function() {
			document.getElementById('add').addEventListener('click', function(){
				var users = JSON.parse(localStorage.users);

				var userName = document.getElementById('user-name').value;
				users.push(new User({name:userName}));

				localStorage.users = JSON.stringify(users);
				require(['Controllers/ListController'], function(ListController){
					var listController = new ListController();
				});
			}, false);
		}
	});

	return AddController;
});