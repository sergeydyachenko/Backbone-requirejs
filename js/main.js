require.config({
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}

});
define(['backbone', 'Models/User', 'routers/Router'], function(Backbone, User, Router){

	var users = [new User({name:'Barney'}),
		new User({name:'Cartman'}),
		new User({name:'Sheldon'})];

	localStorage.users = JSON.stringify(users);

	var router = new Router();
	Backbone.history.start();
});