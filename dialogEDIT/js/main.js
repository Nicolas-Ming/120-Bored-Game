// Let's get the ball rolling

window.onload = function() {
	// Create Phaser game instance
	var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'gameWindow');

	// Add states
	game.state.add('Title', MyGame.Title);
	game.state.add('PlayGame', MyGame.PlayGame);

	// Start Title state
	game.state.start('Title');
};