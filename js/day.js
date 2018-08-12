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
		game.load.image('wall', 'assets/img/wall.png');

		game.load.spritesheet('player', 'assets/img/testguy.png',32,32);

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // Start the IsoArcade physics system.
        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.4);
        game.world.setBounds(0, 0, 1620, 1080);
	},
	create: function() {
		 // Create a group for our tiles, so we can use Group.sort
        isoGroup = game.add.group();

        // Set the global gravity for IsoArcade.
        game.physics.isoArcade.gravity.setTo(0, 0, -500);

        this.spawnTiles();

        wall = game.add.isoSprite(114, 200, 0, 'wall', 0, isoGroup);
        wall.anchor.set(.5);
        wall.rotation = -.12;
        // Create another cube as our 'player', and set it up just like the cubes above.
        player = game.add.isoSprite(128, 128, 20, 'player', 1, isoGroup);
        player.tint = 0x86bfda;
        player.anchor.set(0.5);
        game.physics.isoArcade.enable(player,Phaser.Camera.FOLLOW_LOCKON);
        player.body.collideWorldBounds = true;
        game.camera.scale.x = 2;
        game.camera.scale.y = 2;
        player.scale.x = 2;
        player.scale.y = 2;

        // Set up our controls.
        this.cursors = game.input.keyboard.createCursorKeys();

        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
        ]);

        var walkUp = player.animations.add('walkUp',[36,37,38]);
        var walkDown = player.animations.add('walkDown',[0,1,2]);
        var walkLeft = player.animations.add('walkLeft',[12,13,14]);
        var walkRight = player.animations.add('walkRight',[24,25,26]);

        game.camera.follow(player);
        //game.camera.deadzone = new Phaser.Rectangle(500, 500, 200, 300);

        //this.playerAnimate();

		// this.map = game.add.tilemap('IsometricTest');
		// this.map.addTilesetImage('tt' , 'tiles',32,32);

		// this.map.setCollisionByExclusion([]);

		// this.mapLayer   = this.map.createLayer('Tile Layer 1');

	},
	update: function() {
		// Move the player at this speed.
        this.playerMove();
        this.playerAnimate();

        // Our collision and sorting code again.
        game.physics.isoArcade.collide(isoGroup);
        game.iso.topologicalSort(isoGroup);

	},
    render: function() {
        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);
    },
	// tile creation needs work
	spawnTiles: function () {
        var tile;
        for (var xx = 0; xx < 800; xx += 36) {
            for (var yy = 0; yy < 800; yy += 36) {
                // Create a tile using the new game.add.isoSprite factory method at the specified position.
                // The last parameter is the group you want to add it to (just like game.add.sprite)
                tile = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);
                tile.anchor.set(0.5, 0);
            }
        }
    },

	playerAnimate: function(){
		if (this.cursors.up.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
            player.play('walkUp', 30);
        }
        if (this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
            player.play('walkDown', 30);
        }

        if (this.cursors.left.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
            player.play('walkLeft', 30);
        }
        if (this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
            player.play('walkRight', 30);
        }
        if(this.cursors.left.isDown && this.cursors.up.isDown) {
        	player.play('walkLeft', 30);	
        }
        if(this.cursors.right.isDown && this.cursors.down.isDown) {
            player.play('walkRight', 30);    
        }
        if(this.cursors.right.isDown && this.cursors.up.isDown) {
            player.play('walkUp', 30);    
        }
        if(this.cursors.left.isDown && this.cursors.down.isDown) {
            player.play('walkDown', 30);    
        }
    },

	playerMove: function(){
		var speed = 500;

        if (this.cursors.up.isDown) {
            player.body.velocity.x = -speed;
        }
        else if (this.cursors.down.isDown) {
            player.body.velocity.x = speed;
        }
        else {
            player.body.velocity.x = 0;
        }

        if (this.cursors.left.isDown) {
            player.body.velocity.y = speed;
        }
        else if (this.cursors.right.isDown) {
            player.body.velocity.y = -speed;
        }
        else {
            player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown && this.cursors.up.isDown || this.cursors.down.isDown && this.cursors.right.isDown){
        	speed = 250;
        	if(this.cursors.left.isDown && this.cursors.up.isDown) {
        		player.body.velocity.x = -speed;
        		player.body.velocity.y = speed;
        	}else{
        		player.body.velocity.x = speed;
        		player.body.velocity.y = -speed;
        	}
        }else{
        	speed = 100;
        }
	},
}