// cactusBoi screen state

// Create game wrapper object
cactusBoi = function(game){};
cactusBoi.prototype = {
	preload: function() {

    game.load.image('cactusboi', 'assets/img/cactusboi/cactusboi.png');
		game.load.image('lefthand', 'assets/img/cactusboi/lefthand.png');
		game.load.image('righthand', 'assets/img/cactusboi/righthand.png');
		game.load.image('jacket', 'assets/img/cactusboi/jacket.png');
		game.load.image('hat', 'assets/img/cactusboi/hat.png');
		game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');

		// load JSON
		//this.load.text('dialog', 'js/Dialog.json');

		// set assets path
		//this.load.path = 'img/';

		// load images

	//	game.load.image('dialogbox', 'assets/img/dialogbox.png');
		//this.load.image('homer', 'homer.png');
		//this.load.image('minerva', 'minerva.png');
		//this.load.image('jove', 'jove.png');
		//this.load.image('neptune', 'neptune.png');

		// load font
		//this.load.bitmapFont('font', 'gem.png', 'gem.xml');



	},
	create: function() {

    console.log('cactusboi');
    //hat.sendToBack();						// move to back of display list
    game.add.tween(hat).to({ x: 800, y: 260}, 900, Phaser.Easing.Default, true);
    game.add.tween(hat).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

    //cactusnoface.sendToBack();				// move to back of display list
    game.add.tween(cactusnoface).to({ x: 760, y: 340}, 900, Phaser.Easing.Default, true);
    game.add.tween(cactusnoface).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

    //jacket.sendToBack();				// move to back of display list
    game.add.tween(jacket).to({ x: 825, y: 420}, 900, Phaser.Easing.Default, true);
    game.add.tween(jacket).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

    game.add.tween(lefthand).to({ x: 765, y: 500}, 900, Phaser.Easing.Bounce.out, true);
    game.add.tween(lefthand).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

    //righthand code made after minimal refactoring, hence difference in appearance
    game.add.tween(righthand).to({ x: 875, y: 355}, 900, Phaser.Easing.Bounce.out, true);
    game.add.tween(righthand).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

    // set a kill timer for trail effect
    game.time.events.add(910, function() {
      hat.kill(),
      cactusnoface.kill(),
      jacket.kill(),
      lefthand.kill(),
      righthand.kill(),
      //spawn actual boi
      cactusboi = game.add.sprite(825, 420, 'cactusboi');
      cactusboi.anchor.setTo(0.5);
      cactusboi.scale.setTo(0.4);
      game.add.tween(cactusboi).to({ x: 800, y: 250}, 900, Phaser.Easing.Bounce.out, true);
      game.add.tween(cactusboi.scale).to({ x: 0.3, y: 0.3}, 900, Phaser.Easing.Default, true);


      				/*-=-= Implementation of Dialog systemmmmmmmmmm =-=-*/
              console.log(' end cactusboi');
            });

	},
	update: function() {
		// wait for spacebar
		if(this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			this.state.start('dialog');
		}
	}
};
