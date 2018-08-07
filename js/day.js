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
		game.load.tilemap('IsometricTest', 'assets/img/IsometricTest.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/img/TestFloor.png');

		game.load.image('tile', 'assets/img/tile.png');
		game.load.spritesheet('player', 'assets/img/testguy.png',32,32);

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // Start the IsoArcade physics system.
        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.2);
	},
	create: function() {
		 // Create a group for our tiles, so we can use Group.sort
        isoGroup = game.add.group();

        // Set the global gravity for IsoArcade.
        game.physics.isoArcade.gravity.setTo(0, 0, -500);

        this.spawnTiles();

        // Let's make a load of cubes on a grid, but do it back-to-front so they get added out of order.
        // var cube;
        // for (var xx = 256; xx > 0; xx -= 80) {
        //     for (var yy = 256; yy > 0; yy -= 80) {
        //         // Create a cube using the new game.add.isoSprite factory method at the specified position.
        //         // The last parameter is the group you want to add it to (just like game.add.sprite)
        //         cube = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);
        //         cube.anchor.set(0.5);

        //         // Enable the physics body on this cube.
        //         game.physics.isoArcade.enable(cube);

        //         // Collide with the world bounds so it doesn't go falling forever or fly off the screen!
        //         cube.body.collideWorldBounds = true;

        //         // Add a full bounce on the x and y axes, and a bit on the z axis. 
        //         cube.body.bounce.set(1, 1, 0.2);

        //         // Add some X and Y drag to make cubes slow down after being pushed.
        //         cube.body.drag.set(100, 100, 0);
        //     }
        // }

        // Create another cube as our 'player', and set it up just like the cubes above.
        player = game.add.isoSprite(128, 128, 20, 'player', 1, isoGroup);
        player.tint = 0x86bfda;
        player.anchor.set(0.5);
        game.physics.isoArcade.enable(player);
        player.body.collideWorldBounds = true;

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
	// tile creation needs work
	spawnTiles: function () {
        var tile;
        for (var xx = 0; xx < 256; xx += 35) {
            for (var yy = 0; yy < 256; yy += 35) {
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
    },

	playerMove: function(){
		var speed = 100;

        if (this.cursors.up.isDown) {
            player.body.velocity.x = -speed;
            player.play('walkUp', 30);
        }
        else if (this.cursors.down.isDown) {
            player.body.velocity.x = speed;
            player.play('walkDown', 30);
        }
        else {
            player.body.velocity.x = 0;
        }

        if (this.cursors.left.isDown) {
            player.body.velocity.y = speed;
            player.play('walkLeft', 30);
        }
        else if (this.cursors.right.isDown) {
            player.body.velocity.y = -speed;
            player.play('walkRight', 30);
        }
        else {
            player.body.velocity.y = 0;
        }
        if (this.cursors.left.isDown && this.cursors.up.isDown || this.cursors.down.isDown && this.cursors.right.isDown){
        	speed = 50;
        	if(this.cursors.left.isDown && this.cursors.up.isDown) {
        		player.body.velocity.x = -speed;
        		player.body.velocity.y = speed;
        		player.play('walkLeft', 30);
        	}else{
        		player.body.velocity.x = speed;
        		player.body.velocity.y = -speed;
        		player.play('walkRight', 30);
        	}
        }else{
        	speed = 100;
        }
	},
}