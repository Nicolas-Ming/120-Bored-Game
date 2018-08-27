/*
120 boisssss
Warner Scheibe
Summer of '18
night phase???
-=- CITATION -=-
the following has several lines of code that are based off of paddle parkour 'play'
state from Nathan's code. Specifically the tween implementation.
*/

var night = function() {
};

night.prototype = {

  preload: function() {

  },//end function

//create
  create: function(){
      cursor = this.input.keyboard.createCursorKeys();




//room assets


	    room       = game.add.sprite(520,350, 'room');
      desk        = game.add.sprite(380, 630, 'desk');
      coathanger  = game.add.sprite(125, 380, 'coathanger');
      cabinet     = game.add.sprite(650, 300, 'cabinet');
      bed         = game.add.sprite(880, 530, 'bed');
      plant       = game.add.sprite(480, 270, 'plant');


//the boiiiiiiiiiiiiiiiiiiiiiiiii  //frm, sX, sY, eX, eY

      righthand = game.add.sprite(660, 220,'righthand');
      cactusnoface = game.add.sprite(615,170,'cactusnoface');
      hat = game.add.sprite(120,220,'hat');
      jacket = game.add.sprite(140, 300, 'jacket');
      lefthand = game.add.sprite(660, 220, 'lefthand');

//puuuper

      justdog  = game.add.sprite(300, 340, 'justdog');

//portrait lady

      portrait    = game.add.button(820, 135, this.transform('portrait' , 1500, 820, 135, 600, 400));
      smallvase   = game.add.button(695, 205, this.transform('smallvase', 1500, 695, 205, 625, 550));
      bigVase     = game.add.button(800, 360, this.transform('bigvase'  , 1500, 800, 360, 575, 500));
      scarf       = game.add.button(125, 500, this.transform('scarf'    , 1500, 125, 500, 575, 480));


      righthand.anchor.setTo(0.5);
      righthand.scale.setTo (0.5);

      //                   scale, anchor

      desk.anchor.setTo           (0.5);
      desk.scale.setTo            (0.4);
      coathanger.scale.setTo      (0.5);
      coathanger.anchor.setTo     (0.5);
      cabinet.anchor.setTo        (0.5);
      cabinet.scale.setTo         (0.5);
      plant.anchor.setTo          (0.5);
      plant.scale.setTo           (-0.2, 0.2);

      bed.anchor.setTo            (0.5);
      bed.scale.setTo        (0.4, 0.4);
      room.anchor.setTo            (0.5);
      room.scale.setTo             (0.58);
      bed.angle           = (15);

      righthand.anchor.setTo(0.5);
      righthand.scale.setTo(0.5);
      cactusnoface.anchor.setTo(0.5);
      cactusnoface.scale.setTo(0.4);
      hat.anchor.setTo(0.5);
      hat.scale.setTo(0.5);
      jacket.anchor.setTo(0.5);
      jacket.scale.setTo(0.5);
      lefthand.anchor.setTo(0.5);
      lefthand.scale.setTo(0.5);

      justdog.anchor.setTo(0.5);
      justdog.scale.setTo (0.4);


      portrait.anchor.setTo(0.5);
      portrait.scale.setTo(0.5);
      smallvase.anchor.setTo(0.5);
      smallvase.scale.setTo(0.5);
      bigVase.anchor.setTo(0.5);
      bigVase.scale.setTo(0.5);

  },//end create

//update
  	update: function(){

  	},//end update

	// sX,sY is start of the X,Y and eX, eY is the end

  	transform: function(spriteName,fps,sX,sY,eX,eY){

    // right now the way they are being made is that they are all becoming just butt for right now
    // if you want me to give them more agency i can do that later i think, hopefully.
    dSprites  = game.add.group();

    	let butt = game.add.button(sX, sY, spriteName, function (){
        	butt.kill();
            let spriteTween = game.add.sprite(sX, sY, spriteName);
            spriteTween.anchor.setTo(0.5);
            spriteTween.scale.setTo(0.4);

           	game.add.tween(spriteTween).to({angle: 360},fps, Phaser.Easing.Cubic.In, true);


             game.add.tween(spriteTween).to({angle: 360},fps, Phaser.Easing.Cubic.In, true);

             game.time.events.add   (2530, function(){

                spriteTween.kill();
                dyingSprite = game.add.sprite(eX, eY, spriteName);
                dSprites.add(dyingSprite);
                dyingSprite.anchor.setTo(0.5);
                dyingSprite.scale.setTo(0.4);
              });


       	game.time.events.add(1550, function() {
             game.add.tween(spriteTween).to({ x: eX, y: eY},800, Phaser.Easing.Elastic.Out, true);

        });

        ender++;
        console.log('ender ' + ender);

        //spawn actual lady
        if(ender == 1){
          console.log('ender' + ender);
          //game.add.tween(justdog).to({ x: game.world.centerX, y: game.world.centerY},fps, Phaser.Easing.Default, true);
        }else if(ender == 4){

            game.time.events.add(2000, function(){
            	dSprites.pendingDestroy = true;
               	portraitladyfull = game.add.sprite(600, 400, 'portraitladyfull');
               	portraitladyfull.anchor.setTo(0.5);
               	portraitladyfull.scale.setTo(0.6);


           });
        }//end if

      });//end let

        butt.scale.setTo(0.4);
        butt.anchor.setTo(0.4);


  	},//end transform function

}//end button prototype
