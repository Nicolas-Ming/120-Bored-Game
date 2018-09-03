var game = new Phaser.Game(1080,720);



//global variables
var ender = 0;
var counter = 0;
var numDay = 0;
var currentDBOX = 'dialogboxPL';	//for later use in switching the dialogbox
var currentJSON = 'dialogPL';
var cactusEndX = 260;
var cactusEndY = 140;
var startCactusNoFaceX = 860;
var startCactusNoFaceY = 475;
var endCactusNoFaceX = 500;
var endCactusNoFaceY = 500;
var emitter;

//state management
game.state.add('boot',boot);
game.state.add('mainMenu',mainMenu);
game.state.add('day',day);
game.state.add('dialogSystem', dialogSystem);
game.state.add('night',night);
game.state.add('night2',night2);
game.state.add('night3',night3);
game.state.start('boot');