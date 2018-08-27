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
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bgroundtiles = this.game.add.group();
        this.bground();

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
        this.bgroundtiles.forEach(this.wrapSprite, this, true);
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
    phonemove: function(){
        console.log('starting phone animations');
        game.add.tween(phone).to({ x: 540, y: 300}, 900, Phaser.Easing.Default, true);
        game.add.tween(phone).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);
        game.add.tween(message1).to({ x: 520, y: 200}, 900, Phaser.Easing.Default, true);
        
    }
}

