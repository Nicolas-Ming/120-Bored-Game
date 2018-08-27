// dialogue load state

// Create game wrapper object
var MyGame = {};

MyGame.Title = function(game){};
MyGame.Title.prototype = {
	preload: function() {
		// load JSON
		this.load.text('dialog1', 'js/Dialog.json');

		// set assets path
		this.load.path = 'img/';

		// load images
		this.load.spritesheet('dialogboxCB', 'dialogboxCB.png', 800, 250, 2);
		// this.load.spritesheet('dialogboxPL', 'dialogboxPL.png', 800, 250, 2);
		// this.load.spritesheet('dialogboxDG', 'dialogboxDG.png', 800, 250, 2);
		this.load.image('cactusboi', 	'cactusboiFULL.png');
		this.load.image('portraitlady', 'portraitladyFULL.png');
		this.load.image('dog', 			'dogFULL.png');
		this.load.image('bground',    	'tilebackground.png');


		// load font
		this.load.bitmapFont('font', 'gem.png', 'gem.xml');	//editted to be black text
	},
	create: function() {
		//bg color
		//MyGame.stage.backgroundColor = "#deffed";

		// add text (reset anchors so text centers properly)
		var GameTitle = this.add.bitmapText(this.game.width/2, this.game.height/2 - 32, 'font', 'dialogue!', 32);
		GameTitle.anchor.setTo(0.5, 0.5);
		var SpaceToStart = this.add.bitmapText(this.game.width/2,this.game.height/2, 'font', 'click here', 16);
		SpaceToStart.alpha = 1;
		SpaceToStart.anchor.setTo(0.5, 0.5);

	},
	update: function() {
		// wait for spacebar
		if(this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			this.state.start('PlayGame');
		}
	}
};
