/*
Warner Scheibe
CMPM120
17 July 2018

Armada.js
*/

//Armada function
function objTweening(game, key, frame, scale, startX, startY, endX, endY, totalFrame) {

	//Phaser.Sprite.call(this, game, key, startX, startY, frame);
	//setup
	this.anchor.set(0.5);
	this.scale.x = scale;
	this.scale.y = scale;

	game.add.tween(game.add.image(startX, startY, 'key')).to({endX, endY}), frame, Phaser.Easing.Default, true);

	//mouse = game.input.mouse.capture = true;

}


//setup prototype
objTweening.prototype = Object.create(Phaser.Sprite.prototype);
objTweening.prototype.constructor = objTweening;



//end
