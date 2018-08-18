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

*/

var Button = function() {

};

Button.prototype = {
  preload: function() {
    cactusboi = game.load.image('cactusboi', 'assets/img/cactusboi/cactusboi.png');
    game.load.image('lefthand', 'assets/img/cactusboi/lefthand.png');
    game.load.image('righthand', 'assets/img/cactusboi/righthand.png');
    game.load.image('jacket', 'assets/img/cactusboi/jacket.png');
    game.load.image('hat', 'assets/img/cactusboi/hat.png');
    game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');

    game.load.image('pupperfull', 'assets/img/pupper/pupperfull.png');
    game.load.image('justdog', 'assets/img/pupper/justdog.png');
    game.load.image('bodyscarf', 'assets/img/pupper/bodyscarf.png');
    game.load.image('headscarf', 'assets/img/pupper/headscarf.png');

    game.load.image('button', 'assets/img/buttons/button.png');
    game.load.image('eye', 'assets/img/buttons/eye.png');
  },

//create
  create: function(){
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    //let g = game.add.graphics();

    //mouse = game.input.mouse.capture = true;
    cursor = game.input.keyboard.createCursorKeys();

    game.add.button(50, 50, 'button', this.cactusboi);
    game.add.button(150, 50, 'eye', this.pupper);

    cactusnoface = game.add.image(590, 500, 'cactusnoface');
    hat          = game.add.image(680, 100, 'hat');
    jacket       = game.add.image(100, 500, 'jacket');
    lefthand     = game.add.image(725, 50, 'lefthand');
    righthand    = game.add.image(700, 50, 'righthand');

    justdog      = game.add.image(450, 450, 'justdog');
    bodyscarf    = game.add.image(100, 50, 'bodyscarf');
    headscarf    = game.add.image(680, 130, 'headscarf');



    hat.scale.setTo(0.5);
    cactusnoface.scale.setTo(0.5);
    jacket.scale.setTo(0.5);
    lefthand.scale.setTo(0.5);
    righthand.scale.setTo(0.5);

    //pupperfull.scale.setTo(0.5);
    justdog.scale.setTo(0.5);
    bodyscarf.scale.setTo(0.5);
    headscarf.scale.setTo(0.5);



    hat.anchor.setTo(0.5);
    cactusnoface.anchor.setTo(0.5);
    jacket.anchor.setTo(0.5);
    lefthand.anchor.setTo(0.5);
    righthand.anchor.setTo(0.5);

  //  pupperfull.anchor.setTo(0.5);
    justdog.anchor.setTo(0.5);
    bodyscarf.anchor.setTo(0.5);
    headscarf.anchor.setTo(0.5);

    //cactusboi.anchor.setTo(0.5);
    //cactusboi.scale.setTo(0.5);
    //game.input.onDown(this.transform, this);



  },

//update
  update: function(){


      console.log("update function");

  },
  cactusboi: function(){
      console.log('cactusboi');
      hat.sendToBack();						// move to back of display list
      game.add.tween(hat).to({ x: 250, y: 70}, 900, Phaser.Easing.Default, true);

      cactusnoface.sendToBack();				// move to back of display list
      game.add.tween(cactusnoface).to({ x: 260, y: 140}, 900, Phaser.Easing.Default, true);

      jacket.sendToBack();				// move to back of display list
      game.add.tween(jacket).to({ x: 280, y: 260}, 900, Phaser.Easing.Default, true);

      game.add.tween(lefthand).to({ x: 200, y: 375}, 900, Phaser.Easing.Default, true);
      //righthand code made after minimal refactoring, hence difference in appearance
      righthand.sendToBack();
      game.add.tween(righthand).to({ x: 345, y: 160}, 900, Phaser.Easing.Default, true);
      // set a kill timer for trail effect
      game.time.events.add(1000, function() {
        //hat.kill(),
        cactusnoface.kill(),
        jacket.kill(),
        lefthand.kill(),
        righthand.kill();
        //spawn actual boi
        cactusboi = game.add.image(280, 225, 'cactusboi');
        cactusboi.anchor.setTo(0.5);
        cactusboi.scale.setTo(0.5);
        console.log(' end cactusboi');
      });


  },

  pupper: function(){
    console.log('pupper');

    justdog.sendToBack();
    game.add.tween(justdog).to({ x: 550, y: 270}, 900, Phaser.Easing.Default, true);
    game.add.tween(bodyscarf).to({ x: 550, y: 270}, 900, Phaser.Easing.Default, true);
    game.add.tween(headscarf).to({ x: 560, y: 180}, 900, Phaser.Easing.Default, true);

    game.time.events.add(1000, function() {
      justdog.kill(),
      bodyscarf.kill(),
      headscarf.kill(),

      //spawn actual pupper
      pupperfull = game.add.image(550, 270, 'pupperfull');
      pupperfull.anchor.setTo(0.5);
      pupperfull.scale.setTo(0.5);
      console.log(' end pupper');
    });


  }



}
