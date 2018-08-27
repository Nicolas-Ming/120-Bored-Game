// tile creation needs work
// animation when walking on diagonals needs fixing as well
var day = function() {
	//local variables
	this.x = null;
	this.y = null;
    this.counter = 0;

};
day.prototype =  {
    preload: function() {
        console.log('preload: day');
        //assets
        game.load.image('phone', 'assets/img/phone.png');
        game.load.image('message1', 'assets/img/message1.png');
        game.load.image('message2', 'assets/img/message2.png');
        //game.load.image('phoneFar', 'assets/img/phoneFar.png');
        game.load.spritesheet('dotdotdot', 'assets/img/dotdotdot.png', 82, 22, 5)


        //game.world.setBounds(0, 0, 1620, 1080);
    },
    create: function() {

        game.input.mouse.capture = true;

        //instantiate sprites
            phone              = game.add.sprite(540, 1080, 'phone');
            message1           = game.add.sprite(540, 1080, 'message1');
            message2           = game.add.sprite(540, 1080, 'message2');
            dotdotdot          = game.add.sprite(540, 1080, 'dotdotdot');
            //phoneFar           = game.add.sprite(350, 550, 'phoneFar');

            //sprite scaling
            phone.scale.setTo(1);
            message1.scale.setTo(1);
            message2.scale.setTo(1);
            dotdotdot.scale.setTo(1);

            //anchor points
            phone.anchor.setTo(0.5);
            message1.anchor.setTo(0.5);
            message2.anchor.setTo(0.5);
            dotdotdot.anchor.setTo(0.5);


        //phone.body.immovable = true;
        //phone.body.allowGravity = false;


        // Set up our controls.

        dotdotdot.animations.add('typing',[0, 1, 2, 3, 4,], 10, true);



        //game.camera.deadzone = new Phaser.Rectangle(500, 500, 200, 300);

        //this.interact = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.phonemove();

    },
    update: function() {
        if(game.input.activePointer.leftButton.isDown){
            console.log('Click');
            counter += 1;
            console.log(counter);
        }

        if(counter == 1){
            game.add.tween(dotdotdot).to({ x: 560, y: 250}, 500, Phaser.Easing.Default, true);
            dotdotdot.animations.play('typing');
        }

        if(counter == 2){
            dotdotdot.kill();
            game.add.tween(message2).to({ x: 550, y: 276}, 100, Phaser.Easing.Default, true);
        }
        if(counter == 3){

            game.state.start('night');

        }



    },
    render: function() {
        //game.debug.cameraInfo(game.camera, 32, 32);
        //game.debug.spriteCoords(player, 32, 500);
        //game.debug.body(bed);
       // game.debug.body(phone);
       // game.debug.body(player);

    },
    phonemove: function(){
        console.log('starting phone animations');
        game.add.tween(phone).to({ x: 540, y: 300}, 900, Phaser.Easing.Default, true);
        game.add.tween(phone).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);
        game.add.tween(message1).to({ x: 520, y: 200}, 900, Phaser.Easing.Default, true);


    }
}
