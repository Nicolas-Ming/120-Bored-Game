//"use strict";

var game = new Phaser.Game(1080, 720, Phaser.AUTO);

var counter = 0;
var cactusEndX = 260;
var cactusEndY = 140;
var startCactusNoFaceX = 860;
var startCactusNoFaceY = 475;
//game.state.add('Dialogue', Dialogue);
game.state.add('Button', Button);
//game.state.add('cactusBuilder', cactusBuilder);
//game.state.add('objTweening', objTweening);
//game.state.start('objTweening');
game.state.start('Button');
