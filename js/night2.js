/*
120 boisssss
Warner Scheibe
Summer of '18
night phase???
-=- CITATION -=-
the following has several lines of code that are based off of paddle parkour 'play'
state from Nathan's code. Specifically the tween implementation.
*/

var night2 = function() {
};

night2.prototype = {

  preload: function() {

  },//end function

//create
  create: function(){
      cursor = this.input.keyboard.createCursorKeys();




//room assets

	  room       = game.add.sprite(520,350, 'room');
	  room.anchor.setTo            (0.5);
      room.scale.setTo             (0.58);
      desk        = game.add.sprite(380, 630, 'desk');
      coathanger  = game.add.sprite(125, 380, 'coathanger');
      cabinet     = game.add.sprite(650, 300, 'cabinet');
      bed         = game.add.sprite(880, 530, 'bed');
      plant       = game.add.sprite(480, 270, 'plant');


//the boiiiiiiiiiiiiiiiiiiiiiiiii  //frm, sX, sY, eX, eY
      righthand = game.add.button  (660, 220,this.transform('righthand', 1500,660,220,315,210,1));
      this.transform('cactusnoface',2000,600,150,240,150, 2);
      this.transform('hat'         ,1500,120,220,228,90 , 3);
      this.transform('jacket'      ,1500,120,300,250,260, 4);
      this.transform('lefthand'    ,1500,660,220,200,345, 5);

//puuuper

      pupperfull  = game.add.sprite(300, 340, 'pupperfull');

//portrait lady

      portrait    = game.add.sprite(820, 135, 'portrait');
      smallvase   = game.add.sprite(695, 205, 'smallvase');
      bigVase     = game.add.sprite(800, 360, 'bigvase');


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
      // wallL.anchor.setTo          (0.5);
      // wallL.scale.setTo     (0.4, 0.4);
      // wallL.sendToBack();
      // wallR.anchor.setTo          (0.5);
      // wallR.scale.setTo     (-0.4, 0.4);
      // wallR.sendToBack();
      bed.anchor.setTo            (0.5);
      bed.scale.setTo        (0.4, 0.4);
      bed.angle                    = 15;



      pupperfull.anchor.setTo(0.5);
      pupperfull.scale.setTo (0.4);

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
  	transform: function(spriteName,fps,sX,sY,eX,eY, flag){
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
             game.time.events.add   (3530, function(){
                spriteTween.kill();
                dyingSprite = game.add.sprite(eX, eY, spriteName);
                dSprites.add(dyingSprite);
                dyingSprite.anchor.setTo(0.5);
                dyingSprite.scale.setTo(0.4);
              });

       	game.time.events.add(550, function() {
             game.add.tween(spriteTween).to({ x: eX, y: eY},4000, Phaser.Easing.Elastic.Out, true);
        });

        ender++;
        console.log('ender ' + ender);
        //spawn actual boi-o
        if(ender == 2){
          game.add.tween(pupperfull).to({ x: game.world.centerX, y: game.world.centerY},fps, Phaser.Easing.Default, true);
        }else if(ender == 5){

            game.time.events.add(4000, function(){
            	dSprites.pendingDestroy = true;
               	cactusboi = game.add.sprite(255, 230, 'cactusboi');
               	cactusboi.anchor.setTo(0.5);
               	cactusboi.scale.setTo(0.6);

           });
        }//end if

      });//end let

        butt.scale.setTo(0.4);
        butt.anchor.setTo(0.4);


  	},//end transform function

}//end button prototype
