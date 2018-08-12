/*
end goal is to make a 'transform' function. - using Em's code for study... may/not use
*/
/*
-CITATION-
the following has several lines of code are based off of paddle parkour play
state from Nathan's code. tween implementation
*/

/*
-NOTES-
This needs to be REFACTORED
maybe prefab?
?HOW? call all of these tweens to load at their designated spots

ease in ease out & both exist

tweening ritation
blending possible with tweening?

animate jacket option (for example)

For em's make objects expand in scale out of thin air

*/

var Button = function() {

};

Button.prototype = {
  preload: function() {
    cactusboi = game.load.image('cactusboi', 'assets/img/cactusboi/cactusboi.png');
    game.load.image('lefthand', 'assets/img/cactusboi/lefthand.png'); // the cactus' right hand confusing I know, but I'm too lazy to change cuz it matters little
    game.load.image('righthand', 'assets/img/cactusboi/righthand.png'); //the viewer's right
    game.load.image('jacket', 'assets/img/cactusboi/jacket.png');
    game.load.image('hat', 'assets/img/cactusboi/hat.png');
    game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');

    game.load.image('pupperfull', 'assets/img/pupper/pupperfull.png');
    game.load.image('justdog', 'assets/img/pupper/justdog.png');
    game.load.image('bodyscarf', 'assets/img/pupper/bodyscarf.png');
    game.load.image('headscarf', 'assets/img/pupper/headscarf.png');

    game.load.image('button', 'assets/img/buttons/button.png');
    game.load.image('eye', 'assets/img/buttons/eye.png');
    game.load.image('transition', 'assets/img/buttons/transition.png');

    game.load.image('wall', 'assets/img/room/wall.png');
    game.load.image('rug', 'assets/img/room/rug.png');
  },

//create
  create: function(){
    //some setup stuff
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursor = game.input.keyboard.createCursorKeys();

    game.add.button(50, 50, 'button', this.cactusboi);
    game.add.button(100, 50, 'eye', this.pupper);
    game.add.button(150, 50, 'transition', this.nightButton);

    //below is the creation of used sprites

    cactusnoface = game.add.sprite(590, 500, 'cactusnoface');
    hat          = game.add.sprite(680, 100, 'hat');
    jacket       = game.add.sprite(100, 500, 'jacket');
    lefthand     = game.add.sprite(725, 50, 'lefthand');
    righthand    = game.add.sprite(700, 450, 'righthand');

    justdog      = game.add.sprite(450, 450, 'justdog');
    bodyscarf    = game.add.sprite(100, 50, 'bodyscarf');
    headscarf    = game.add.sprite(680, 130, 'headscarf');

    wall         = game.add.sprite(400, 400, 'wall');
    rug          = game.add.sprite(400, 500, 'rug');

    //scaling set below

    hat.scale.setTo(0.5);
    cactusnoface.scale.setTo(0.5);
    jacket.scale.setTo(0.5);
    lefthand.scale.setTo(0.5);
    righthand.scale.setTo(0.5);

    justdog.scale.setTo(0.5);
    bodyscarf.scale.setTo(0.5);
    headscarf.scale.setTo(0.5);

    wall.scale.setTo(1.25);
    rug.scale.setTo(0);

    //anchors set below

    hat.anchor.setTo(0.5);
    cactusnoface.anchor.setTo(0.5);
    jacket.anchor.setTo(0.5);
    lefthand.anchor.setTo(0.5);
    righthand.anchor.setTo(0.5);

    justdog.anchor.setTo(0.5);
    bodyscarf.anchor.setTo(0.5);
    headscarf.anchor.setTo(0.5);

    wall.anchor.setTo(0.5);
    rug.anchor.setTo(0.5);

    rug.sendToBack();
    wall.sendToBack();

  },

//update
  update: function(){


      console.log("update function");

  },

  //cactusboi called by button - 'button'
  cactusboi: function(){
      console.log('cactusboi');
      //hat.sendToBack();						// move to back of display list
      game.add.tween(hat).to({ x: 250, y: 70}, 900, Phaser.Easing.Default, true);
      game.add.tween(hat).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

      //cactusnoface.sendToBack();				// move to back of display list
      game.add.tween(cactusnoface).to({ x: 260, y: 140}, 900, Phaser.Easing.Default, true);
      game.add.tween(cactusnoface).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

      //jacket.sendToBack();				// move to back of display list
      game.add.tween(jacket).to({ x: 280, y: 260}, 900, Phaser.Easing.Default, true);
      game.add.tween(jacket).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

      game.add.tween(lefthand).to({ x: 200, y: 365}, 900, Phaser.Easing.Bounce.out, true);
      game.add.tween(lefthand).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

      //righthand code made after minimal refactoring, hence difference in appearance
      game.add.tween(righthand).to({ x: 345, y: 160}, 900, Phaser.Easing.Bounce.out, true);
      game.add.tween(righthand).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);


      game.add.tween(rug.scale).to({ x: 0.6, y: 0.6}, 900, Phaser.Easing.Default, true);

      // set a kill timer for trail effect
      game.time.events.add(930, function() {
        hat.kill(),
        cactusnoface.kill(),
        jacket.kill(),
        lefthand.kill(),
        righthand.kill();
        //spawn actual boi
        cactusboi = game.add.sprite(280, 225, 'cactusboi');
        cactusboi.anchor.setTo(0.5);
        cactusboi.scale.setTo(0.5);
        console.log(' end cactusboi');
      });


  },

  //pupper called by button - 'eye'
  pupper: function(){
    console.log('pupper');

    //justdog.sendToBack();
    game.add.tween(justdog).to({ x: 550, y: 270}, 900, Phaser.Easing.Default, true);
    //game.add.tween(justdog).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

    game.add.tween(bodyscarf).to({ x: 550, y: 270}, 900, Phaser.Easing.Default, true);
    game.add.tween(bodyscarf).to({angle: 360}, 900, Phaser.Easing.Cubic.In, true);

    game.add.tween(headscarf).to({ x: 560, y: 180}, 900, Phaser.Easing.Default, true);
    game.add.tween(headscarf).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);

    game.time.events.add(930, function() {
      justdog.kill(),
      bodyscarf.kill(),
      headscarf.kill(),

      //spawn actual pupper
      pupperfull = game.add.sprite(550, 270, 'pupperfull');
      //adding physics to this for transition

      pupperfull.anchor.setTo(0.5);
      pupperfull.scale.setTo(0.5);
      console.log(' end pupper');
    });


  },

  //nightbutton called by button - 'transition'

  // -=-=-= /* N. O. T. E */ =-=-=- //

    /*  the goal with the function 'nightButton' is to
        create a transitioning effect on everything in the screen
        lots can be done here... can really play up a dream sequence
        accepting ideas, but I have some good ones
    */
  nightButton: function(){
    console.log('nightButton');
  }



}
