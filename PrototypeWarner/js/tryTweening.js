/*
Warner Scheibe
CMPM120
17 July 2018
Prefab Armada
main.js
*/

//globals
var game;
var myFace;

//
	//window.onload = function() {

		game = new Phaser.Game(900, 600, Phaser.AUTO);
		game.state.add('Load', Load);
		game.state.add('Play', Play);
		//move to load state
		game.state.start('Load');

	}

	//var Load = function(game) { };

	//Load.prototype = {
//preload
		preload: function() {

			console.log('Load: preload');
			game.load.image ('eye','assets/img/eye.png');

		},

//create
		create: function() {
			console.log('Load: create');
			game.state.start('Play');
		}
	};

	var Play = function(game) { };

//Play.prototype = {
//preload
		preload: function() {

			console.log('Play: preload');

		},
//create
		create: function() {

			console.log('Play: create');

			//create ships on loop
			for(var i = 0; i < 50; i++) {

				//this
				myFace = new prehabRehab(game, 'eye', 60/* i don't know why this works but it does*/, (Math.random() * 2) + .5, game.rnd.integerInRange(50, 200));
				game.add.existing(myFace);
			}
		},
	};
	//end
