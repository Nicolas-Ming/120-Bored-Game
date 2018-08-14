var game = new Phaser.Game(1080,720);


//global variables
console.log('preload: main')

//state management
game.state.add('boot',boot);
game.state.add('mainMenu',mainMenu);
game.state.add('day',day);
game.state.add('dialogSystem', dialogSystem);
game.state.add('boot',boot);
//game.state.add('night',night);
//game.state.add('talking',talking);
//game.state.add('settings',settings);
game.state.start('boot');
