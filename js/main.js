var game = new Phaser.Game(1024,1024);

//global variables


//state management
game.state.add('boot',boot);
game.state.start('boot');