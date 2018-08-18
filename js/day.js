// tile creation needs work
// animation when walking on diagonals needs fixing as well
var day = function() {
	//local variables
	this.x = null;
	this.y = null;

};
day.prototype =  {
	preload: function() {
		console.log('preload: day');

		game.load.image('tile', 'assets/img/tileee.png');
		game.load.image('rug', 'assets/img/rugwarped.png');
		game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');
		game.load.image('lwall', 'assets/img/wallTileLeft.png');
		game.load.image('rwall', 'assets/img/wallTileRight.png');
		game.load.image('bed', 'assets/img/bed.png');

		game.load.image('cactusboi', 'assets/img/cactusboi/cactusboi.png');
		game.load.image('lefthand', 'assets/img/cactusboi/lefthand.png');
		game.load.image('righthand', 'assets/img/cactusboi/righthand.png');
		game.load.image('jacket', 'assets/img/cactusboi/jacket.png');
		game.load.image('hat', 'assets/img/cactusboi/hat.png');
		//game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');

		game.load.image('pupperfull', 'assets/img/pupper/pupperfull.png');
		game.load.image('justdog', 'assets/img/pupper/justdog.png');
		game.load.image('bodyscarf', 'assets/img/pupper/bodyscarf.png');
		game.load.image('headscarf', 'assets/img/pupper/headscarf.png');

		game.load.image('bigvase', 'assets/img/portrait/bigvase.png');
        game.load.image('portrait', 'assets/img/portrait/portrait.png');
        game.load.image('portraitladyfull', 'assets/img/portrait/portraitladyfull.png');
   	    game.load.image('scarf', 'assets/img/portrait/scarf.png');
        game.load.image('smallvase', 'assets/img/portrait/smallvase.png');

		game.load.image('dialButB', 'assets/img/buttons/dialButB.png');
		game.load.image('dialButA', 'assets/img/buttons/dialButA.png');
		game.load.image('B_Story', 'assets/img/buttons/B_Story.png');
		game.load.image('A_Story', 'assets/img/buttons/A_Story.png');


		game.load.image('player', 'assets/img/playerC.png');

		game.load.image('dialogbox', 'assets/img/dialogbox.png');

		game.load.text('dialog', 'js/Dialog.json');
        game.load.text('dialogTwo', 'js/DialogTwo.json');

		game.load.bitmapFont('font', 'assets/img/gem.png', 'assets/img/gem.xml');

		game.load.image('dialogbox', 'assets/img/dialogbox.png');

		game.load.text('dialog', 'js/Dialog.json');

		//this.load.path = 'assets/img/';

		game.load.bitmapFont('font', 'assets/img/gem.png', 'assets/img/gem.xml');

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // Start the IsoArcade physics system.
        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.3);
        game.world.setBounds(0, 0, 1620, 1080);
	},
	create: function() {
		 // Create a group for our tiles, so we can use Group.sort
        isoGroup = game.add.group();
        leftWall = game.add.group();

        	hat              = game.add.sprite(680, 100, 'hat');
		    jacket           = game.add.sprite(160, 450, 'jacket');
		    lefthand         = game.add.sprite(1315, 550, 'lefthand');
		    righthand        = game.add.sprite(1300, 550, 'righthand');

		    justdog          = game.add.sprite(350, 550, 'justdog');
		    bodyscarf        = game.add.sprite(100, 530, 'bodyscarf');
		    headscarf        = game.add.sprite(240, 730, 'headscarf');

		   //tileee         = game.add.sprite(800, 500, 'tileee');
		    //this.spawnTiles();

		    portrait         = game.add.sprite(1200, 300, 'portrait');
		    bigvase          = game.add.sprite(1290, 530, 'bigvase');

			hat.scale.setTo(0.4);
		    //cactusnoface.scale.setTo(0.4);
		    jacket.scale.setTo(0.4);
		    lefthand.scale.setTo(0.4);
		    righthand.scale.setTo(0.4);

		    justdog.scale.setTo(0.4);
		    bodyscarf.scale.setTo(0.4);
		    headscarf.scale.setTo(0.4);

			portrait.scale.setTo(0.4);
		    bigvase.scale.setTo(0.4);

			hat.anchor.setTo(0.5);
		    //cactusnoface.anchor.setTo(0.5);
		    jacket.anchor.setTo(0.5);
		    lefthand.anchor.setTo(0.5);
		    righthand.anchor.setTo(0.5);

		    justdog.anchor.setTo(0.5);
		    bodyscarf.anchor.setTo(0.5);
		    headscarf.anchor.setTo(0.5);

			portrait.anchor.setTo(0.5);
		    bigvase.anchor.setTo(0.5);


        // Set the global gravity for IsoArcade.
        game.physics.isoArcade.gravity.setTo(0, 0, -500);

        this.spawnTiles();
        rug = game.add.isoSprite(300, 300, 0, 'rug', 0, isoGroup);
        rug.anchor.set(0.5);
        //rug.rotation = .3;

        if (daynum == 1){
        	cactusnoface = game.add.isoSprite(72, 46, 0, 'cactusnoface', 0, isoGroup);
        	cactusnoface.anchor.set(1);
        	game.physics.isoArcade.enable(cactusnoface);
        	cactusnoface.body.immovable = true;
        	cactusnoface.body.allowGravity = false;
        	cactusnoface.body.setSize(30,30,10,-30,-35,-10);
        	cactusnoface.scale.x = .4;
        	cactusnoface.scale.y = .4;
        } else {
        	cactusboi = game.add.sprite(800, 250, 'cactusboi');
        	cactusboi.anchor.setTo(0.5);
        	cactusboi.scale.setTo(0.3);
        }
        

        bed = game.add.isoSprite(692, 96, 0, 'bed', 0, isoGroup);
        bed.anchor.set(0.5);
        game.physics.isoArcade.enable(bed);
        bed.body.immovable = true;
        bed.body.allowGravity = false;
        bed.body.setSize(20000,1000,0,-80,-35,-10);
        bed.scale.x = .4;
        bed.scale.y = .4;
        bed.rotation = .3;
        // Create another cube as our 'player', and set it up just like the cubes above.
        this.player = game.add.isoSprite(700, 20, 0, 'player', 1, isoGroup);
        this.player.anchor.set(.5);

        game.physics.isoArcade.enable(this.player,Phaser.Camera.FOLLOW_LOCKON);
        this.player.body.collideWorldBounds = true;
        game.camera.scale.x = 1.5;
        game.camera.scale.y = 1.5;
        this.player.scale.x = .3;
        this.player.scale.y = .3;


        // Set up our controls.
        this.cursors = game.input.keyboard.createCursorKeys();

        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
        ]);

        // var walkUp = player.animations.add('walkUp',[36,37,38]);
        // var walkDown = player.animations.add('walkDown',[0,1,2]);
        // var walkLeft = player.animations.add('walkLeft',[12,13,14]);
        // var walkRight = player.animations.add('walkRight',[24,25,26]);


        game.camera.follow(this.player);
        //game.camera.deadzone = new Phaser.Rectangle(500, 500, 200, 300);

        this.interact = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


	},
	update: function() {
		// Move the this.player at this speed.
        this.playerMove();
        this.playerAnimate();
        this.checkPlayer();

        // Our collision and sorting code again.
        game.physics.isoArcade.collide(isoGroup);
        //game.iso.topologicalSort(isoGroup);


	},
    render: function() {/*
        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);
        game.debug.body(bed);
        game.debug.body(cactusnoface);
        game.debug.body(player); //*/

    },
	// tile creation needs work
	spawnTiles: function () {
        var tile;
        for (var xx = 72; xx < 872; xx += 36) {
            for (var yy = 36; yy < 836; yy += 36) {
            	if (xx == 72 && yy == 36){
            		tile = game.add.isoSprite(xx, yy,0, 'lwall', 0, isoGroup);
                	tile.anchor.set(1, 1);
                	tile = game.add.isoSprite(xx, yy,0, 'rwall', 0, isoGroup);
                	tile.anchor.set(1, 1);
            	}else if (xx == 72 ){
            		tile = game.add.isoSprite(xx, yy,0, 'lwall', 0, isoGroup);
                	tile.anchor.set(1, 1);
            	}else if (yy == 36) {
            		tile = game.add.isoSprite(xx, yy,0, 'rwall', 0, isoGroup);
                	tile.anchor.set(1, 1);
            	}else{
            		tile = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);
                	tile.anchor.set(1, 1);
            	}

            }
        }
    },

    checkPlayer: function(){
    	if (daynum == 1){
            if (Phaser.Rectangle.intersects(player.getBounds(),cactusnoface.getBounds()) && this.interact.justPressed()){
                console.log('cactus');
                this.cactusboi();
            }
        }
        if (daynum == 2){
            if (Phaser.Rectangle.intersects(player.getBounds(),cactusboi.getBounds()) && this.interact.justPressed()){
                console.log('cactus');
                this.cactusboi();

            }
        }
    },

    checkPlayer: function(){
    	if (daynum == 1){
    		if (Phaser.Rectangle.intersects(this.player.getBounds(),cactusnoface.getBounds()) && this.interact.justPressed()){
    			console.log('cactus');
    			this.cactusboi();
    		}
    	}
    	if (daynum == 2){
    		if (Phaser.Rectangle.intersects(this.player.getBounds(),cactusboi.getBounds()) && this.interact.justPressed()){
    			console.log('cactus');
    			this.cactusboi();
    		}
    	}
    	
    },

	playerAnimate: function(){
		if (this.cursors.up.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.player.x = -1;
            //player.play('walkUp', 30);
        }
        if (this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.player.x = 1;
            //player.play('walkDown', 30);
        }

        // if (this.cursors.left.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
        //     player.play('walkLeft', 30);
        // }
        // if (this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
        //     player.play('walkRight', 30);
        // }
        // if(this.cursors.left.isDown && this.cursors.up.isDown) {
        // 	player.play('walkLeft', 30);
        // }
        // if(this.cursors.right.isDown && this.cursors.down.isDown) {
        //     player.play('walkRight', 30);
        // }
        // if(this.cursors.right.isDown && this.cursors.up.isDown) {
        //     player.play('walkUp', 30);
        // }
        // if(this.cursors.left.isDown && this.cursors.down.isDown) {
        //     player.play('walkDown', 30);
        // }
    },

	playerMove: function(){
		var speed = 500;

        if (this.cursors.up.isDown) {
            this.player.body.velocity.x = -speed;
        }
        else if (this.cursors.down.isDown) {
            this.player.body.velocity.x = speed;
        }
        else {
            this.player.body.velocity.x = 0;
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.y = speed;
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.y = -speed;
        }
        else {
            this.player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown && this.cursors.up.isDown || this.cursors.down.isDown && this.cursors.right.isDown){
        	speed = 250;
        	if(this.cursors.left.isDown && this.cursors.up.isDown) {
        		this.player.body.velocity.x = -speed;
        		this.player.body.velocity.y = speed;
        	}else{
        		this.player.body.velocity.x = speed;
        		this.player.body.velocity.y = -speed;
        	}
        }else{
        	speed = 100;
        }
	},

	cactusboi: function(){
      console.log('cactusboi');
      //hat.sendToBack();						// move to back of display list
      game.add.tween(hat).to({ x: 800, y: 260}, 1500, Phaser.Easing.Default, true);
      game.add.tween(hat).to({angle: -360}, 1400, Phaser.Easing.Cubic.In, true);

      //cactusnoface.sendToBack();				// move to back of display list
      game.add.tween(cactusnoface).to({ x: 760, y: 340}, 1500, Phaser.Easing.Default, true);
      game.add.tween(cactusnoface).to({angle: 360}, 1400, Phaser.Easing.Cubic.In, true);

      //jacket.sendToBack();				// move to back of display list
      game.add.tween(jacket).to({ x: 825, y: 420}, 1500, Phaser.Easing.Default, true);
      game.add.tween(jacket).to({angle: -360}, 1400, Phaser.Easing.Cubic.In, true);

      game.add.tween(lefthand).to({ x: 765, y: 500}, 1500, Phaser.Easing.Bounce.out, true);
      game.add.tween(lefthand).to({angle: 360}, 1400, Phaser.Easing.Cubic.In, true);

      //righthand code made after minimal refactoring, hence difference in appearance
      game.add.tween(righthand).to({ x: 875, y: 355}, 1500, Phaser.Easing.Bounce.out, true);
      game.add.tween(righthand).to({angle: -360}, 1400, Phaser.Easing.Cubic.In, true);



      // set a kill timer for trail effect
      game.time.events.add(1500, function() {
        hat.kill(),
        cactusnoface.kill(),
        jacket.kill(),
        lefthand.kill(),
        righthand.kill(),
        //spawn actual boi
        cactusboi = game.add.sprite(825, 420, 'cactusboi');
        cactusboi.anchor.setTo(0.5);
        cactusboi.scale.setTo(0.4);
				game.add.tween(cactusboi).to({ x: -800, y: 50}, 2000, Phaser.Easing.Bounce.out, true);
				game.add.tween(cactusboi.scale).to({ x: 2, y: 2}, 2000, Phaser.Easing.Default, true);

        console.log(' end cactusboi');
      });

      game.time.events.add(2700, function() {game.state.start('dialogSystem')});

   }
}

