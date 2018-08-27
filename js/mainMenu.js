var mainMenu = function() {
	//local variables
};
mainMenu.prototype =  {
	preload: function() {
		console.log('preload: MM');
		//game.state.start('day');
	},
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.bgroundtiles = this.game.add.group();

		this.bground();
		title = game.add.sprite(600, 135, 'title');
		title.anchor.setTo                   (0.5);
		title.scale.setTo                    (0.2);

		this.dialButA = this.add.button(600, 350, 'dialButA', this.A_Dialog);
		this.dialButA.anchor.setTo            (0.5);
      	this.dialButA.scale.setTo       (0.6);
		// this.dialButB = this.add.button(500, 500, 'dialButB', this.B_Dialog);

		this.dialButA = this.add.button(600, 350, 'dialButA', this.A_Dialog);
		this.dialButA.anchor.setTo            (0.5);
      	this.dialButA.scale.setTo       (0.6);
		// this.dialButB = this.add.button(500, 500, 'dialButB', this.B_Dialog);

	},
	update: function() {
		this.bgroundtiles.forEach(this.wrapSprite, this, true);
	},
	bground: function(){
  		for(let j = 0; j < 3; j++){
			for(let i = 0; i < 4; i++){
				this.tile = game.add.sprite(0 + 511*i*.708,0 + 511*j*.708, 'bground');
				this.game.physics.enable(this.tile,Phaser.Physics.ARCADE);
				this.tile.anchor.set(0.5,0.5);
				this.tile.scale.set(.708);
				this.tile.body.velocity.x = -50;
				this.tile.body.velocity.y = -50;
				this.bgroundtiles.add(this.tile);
			}
		}
  	},
  	wrapSprite: function(sprite) {
		// if sprite passes screen edge, wrap to opposite side
		if(sprite.x + sprite.width/2 < 0) {
			sprite.x = game.width + sprite.width/2;
		} else if(sprite.x - sprite.width/2 > game.width) {
			sprite.x = 0 - sprite.width/2;
		}
		if(sprite.y + sprite.height/2 < 0) {
			sprite.y = game.height + sprite.height/2;
		} else if(sprite.y - sprite.height/2 > game.height) {
			sprite.y = 0 - sprite.height/2;
		}
	},
	A_Dialog: function(){
		console.log('STARTGAME');
		//dialButB.kill();
		game.state.start('day');

	},
	// B_Dialog: function(){
	// 	console.log('QUIT');
	// 	//this.dialButA.kill();
	// 	game.state.start('');

	// }
}
