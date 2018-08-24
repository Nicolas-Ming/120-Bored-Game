/*
120 boisssss
Warner Scheibe
Summer of '18
night phase???

-=- CITATION -=-
the following has several lines of code that are based off of paddle parkour 'play'
state from Nathan's code. Specifically the tween implementation.

*/

var Button = function() {

};

Button.prototype = {

  preload: function() {

      game.load.image('cactusboi',      'assets/img/cactusboi/cactusboi.png');
      game.load.image('lefthand',       'assets/img/cactusboi/lefthand.png'); // the cactus' right hand confusing I know, but I'm too lazy to change cuz it matters little
      game.load.image('righthand',      'assets/img/cactusboi/righthand.png'); //the viewer's right
      game.load.image('jacket',         'assets/img/cactusboi/jacket.png');
      game.load.image('hat',            'assets/img/cactusboi/hat.png');
      game.load.image('cactusnoface',   'assets/img/cactusboi/cactusnoface.png');

      game.load.image('button',     'assets/img/buttons/button.png');
      game.load.image('eye',        'assets/img/buttons/eye.png');
      game.load.image('transition', 'assets/img/buttons/transition.png');
      game.load.image('pB',         'assets/img/buttons/pB.png');

      game.load.image('dialButA', 'assets/img/buttons/dialButA.png');
      game.load.image('A_Story',  'assets/img/buttons/A_Story.png');

      game.load.image('wallL',      'assets/img/room/wall.png');
      game.load.image('wallR',      'assets/img/room/wall.png');
      game.load.image('ourWindow',  'assets/img/room/window.png');
      game.load.image('rug',        'assets/img/room/rugwarped.png');
      game.load.image('desk',       'assets/img/room/newdesk.png');
      game.load.image('coathanger', 'assets/img/room/coathanger.png');
      game.load.image('cabinet',    'assets/img/room/cabinet.png');
      game.load.image('plant',      'assets/img/room/plant.png');
      game.load.image('bed',        'assets/img/room/bed.png');

      game.load.image('pupperfull',   'assets/img/pupper/pupperfull.png');
  		game.load.image('justdog',      'assets/img/pupper/justdog.png');
  		game.load.image('bodyscarf',    'assets/img/pupper/bodyscarf.png');
  		game.load.image('headscarf',    'assets/img/pupper/headscarf.png');

  		game.load.image('bigvase',          'assets/img/portrait/bigvase.png');
      game.load.image('portrait',         'assets/img/portrait/portrait.png');
      game.load.image('portraitladyfull', 'assets/img/portrait/portraitladyfull.png');
     	game.load.image('scarf',            'assets/img/portrait/scarf.png');
    	game.load.image('smallvase',        'assets/img/portrait/smallvase.png');

  },//end function

//create
  create: function(){
      cursor = this.input.keyboard.createCursorKeys();

//room assets
      wallL       = game.add.sprite(game.world.centerX - 250, 230, 'wallL');
      wallR       = game.add.sprite(game.world.centerX + 250, 230, 'wallR');
      ourWindow   = game.add.sprite(game.world.centerX - 160, 160, 'ourWindow');
      rug         = game.add.sprite(game.world.centerX , 500, 'rug');
      desk        = game.add.sprite(380, 630, 'desk');
      coathanger  = game.add.sprite(125, 380, 'coathanger');
      cabinet     = game.add.sprite(650, 300, 'cabinet');
      bed         = game.add.sprite(880, 530, 'bed');
      plant       = game.add.sprite(480, 270, 'plant');


//the boiiiiiiiiiiiiiiiiiiiiiiiii  //frm, sX, sY, eX, eY
      righthand = game.add.button(660, 220, this.transform('righthand',   1500,660,220,315,210, 1));
      this.transform('cactusnoface',1500,600,150,240,150, 2);
      this.transform('hat',         1500,120,220,228,90, 3);
      this.transform('jacket',      1500,120,300,250,260, 4);
      this.transform('lefthand',    1500,660,220,200,345, 5);

//puuuper

      pupperfull  = game.add.sprite(300, 340, 'pupperfull');

//portrait lady

      portrait    = game.add.sprite(820, 135, 'portrait');
      smallvase   = game.add.sprite(695, 205, 'smallvase');
      bigVase     = game.add.sprite(800, 360, 'bigvase');


      righthand.anchor.setTo(0.5);
      righthand.scale.setTo(0.5);

      //                   scale, anchor


      ourWindow.anchor.setTo      (0.5);
      ourWindow.scale.setTo (0.6);
      rug.anchor.setTo            (0.5);
      rug.scale.setTo       (0.55);
      desk.anchor.setTo           (0.5);
      desk.scale.setTo      (0.4);
      coathanger.scale.setTo(0.5);
      coathanger.anchor.setTo     (0.5);
      cabinet.anchor.setTo        (0.5);
      cabinet.scale.setTo   (0.5);
      plant.anchor.setTo(0.5);
      plant.scale.setTo(-0.2, 0.2);
      wallL.anchor.setTo          (0.5);
      wallL.scale.setTo     (0.4, 0.4);
      wallL.sendToBack();
      wallR.anchor.setTo          (0.5);
      wallR.scale.setTo     (-0.4, 0.4);
      wallR.sendToBack();
      bed.anchor.setTo            (0.5);
      bed.scale.setTo       (-0.4, 0.4);

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


      let butt = game.add.button(sX, sY, spriteName, function (){
             butt.kill();
             butt = game.add.sprite(sX, sY, spriteName);
             butt.anchor.setTo(0.5);
             butt.scale.setTo(0.4);
             game.add.tween(butt).to({angle: 360},fps, Phaser.Easing.Cubic.In, true);
             game.time.events.add   (2530, function(){
                butt.kill();
                butt = game.add.sprite(eX, eY, spriteName);
                butt.anchor.setTo(0.5);
                butt.scale.setTo(0.4);
              });

       game.time.events.add(1850, function() {
             game.add.tween(butt).to({ x: eX, y: eY},2000, Phaser.Easing.Elastic.Out, true);
             counter = 0;
             //game.time.events.add(850, function() {butt.kill()});
        });

        ender++;
        console.log('ender ' + ender);
        //spawn actual boi-o
        if(ender == 5){
          game.add.tween(pupperfull).to({ x: game.world.centerX, y: game.world.centerY},fps, Phaser.Easing.Default, true);


            game.time.events.add(2900, function(){
               butt.kill(),
               //righthand.kill();   //will not woooorrrrrkkkkkk arrrghhhhhhhhhhhhh
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
