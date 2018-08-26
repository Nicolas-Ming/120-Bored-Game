var mainMenu = function() {
	//local variables
};
mainMenu.prototype =  {
	preload: function() {
		console.log('preload: MM');
		//game.state.start('day');
	},
	create: function() {
		title = game.add.sprite(600, 135, 'title');
		title.anchor.setTo            (0.5);
		title.scale.setTo       (0.2);

		this.dialButA = this.add.button(600, 350, 'dialButA', this.A_Dialog);
		this.dialButA.anchor.setTo            (0.5);
      	this.dialButA.scale.setTo       (0.6);
		// this.dialButB = this.add.button(500, 500, 'dialButB', this.B_Dialog);

	},
	update: function() {

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
