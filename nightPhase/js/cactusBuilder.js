// function cactusBuilder(this, spriteName, frame, xPos, yPos) {

//     Phaser.Button.call(this, spriteName, frame, xPos, yPos);
//     //setup
//     this.anchor.set(0.5);
//     this.scale.x = scale;
//     this.scale.y = scale;

//     //physics + speed
//     game.physics.enable(this);
//     this.body.velocity.x = speed;

// }

// //setup prototype
// cactusBuilder.prototype = Object.create(Phaser.Sprite.prototype);
// cactusBuilder.prototype.constructor = cactusBuilder;

// //details of setup
// cactusBuilder.prototype.update = function() {

//     if(game.input.keyboard.justPressed(Phaser.Keyboard.R)) {

//         game.add.tween(spriteName).to({ x: xPos, y: yPos}, this.frame, Phaser.Easing.Default, true);

//     }

// }
