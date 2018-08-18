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

animate jacket option (for example)
*/

var counter = 0;
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

    game.load.image('button', 'assets/img/buttons/button.png');
    game.load.image('eye', 'assets/img/buttons/eye.png');
    game.load.image('transition', 'assets/img/buttons/transition.png');
    game.load.image('pB', 'assets/img/buttons/pB.png');

    game.load.image('dialButA', 'assets/img/buttons/dialButA.png');
    game.load.image('A_Story', 'assets/img/buttons/A_Story.png');


  },//end function

//create
  create: function(){
    //cursor = game.input.keyboard.createCursorKeys();

    cursor = this.input.keyboard.createCursorKeys();

    game.add.button(100, 50, 'eye', this.pupper);
    game.add.button(150, 50, 'transition', this.nightButton);
    game.add.button(50, 100, 'pB', this.portrait);

    cactusnoface     = game.add.button(startCactusNoFaceX, startCactusNoFaceY, 'cactusnoface', this.cactusnoface);
    hat              = game.add.sprite(680, 100, 'hat');
    jacket           = game.add.sprite(300, 300, 'jacket');
    lefthand         = game.add.button(725, 50, 'lefthand', this.LHandButton);
    righthand        = game.add.sprite(700, 450, 'righthand');

    dialButA         = game.add.sprite(-1000, 200, 'dialButA');

    hat.scale.setTo(0.5);
    cactusnoface.scale.setTo(0.5);
    jacket.scale.setTo(0.5);
    lefthand.scale.setTo(0.5);
    righthand.scale.setTo(0.5);

    dialButA.scale.setTo(0.3);

    hat.anchor.setTo(0.5);
    cactusnoface.anchor.setTo(0.5);
    jacket.anchor.setTo(0.5);
    lefthand.anchor.setTo(0.5);
    righthand.anchor.setTo(0.5);

    //-=-=-=-

    game.physics.enable(hat);
    hat.body.bounce.setTo(0.4, 0.4);
    hat.body.drag.setTo(705);
    game.input.onDown.add(this.clicker, this);


  },

//update
  update: function(){


  },

    cactusnoface: function(){

      game.add.tween(cactusnoface).to({ x: cactusEndX - 10, y: cactusEndY - 50}, 1500, Phaser.Easing.Default, true);
      game.add.tween(cactusnoface).to({angle: 360}, 1400, Phaser.Easing.Cubic.In, true);

      //click = new cactusBuilder(game, 'cactusnoface', 1500, endCactusNoFaceX, endCactusNoFaceY);
      //game.add.existing(cactusBuilder);
      /*cactusBuilder: function(spriteName){

      //need to make a prefab for each cactus buttons to be passed into
      game.add.tween(spriteName).to({ x: spriteNameEndX, y: spriteNameEndY}, spriteNameFrame, Phaser.Easing.Default, true);
      game.add.tween(spriteNameDialog).to({ x: spriteNameDialogX, y: spriteNameDialogY}, spriteNameFrame, Phaser.Easing.Default, true);
      */

    },//end function

    clicker: function(){

      xvector = (game.input.mousePointer.x - hat.x) * 2;
      yvector = (game.input.mousePointer.y - hat.y) * 2;

      hat.body.velocity.setTo(xvector, yvector);

    },//end function
    LHandButton: function(){
      counter++;
      if(counter == 1){
        game.add.tween(lefthand).to({angle: 360}, 400, Phaser.Easing.Cubic.In, true);
        counter++;
        //tweenHand();
      }
      else if(counter == 2){
    //  this.dummy();
    tweenHand();
      }
    },//end function
    dummy: function() {
      console.log('dummy');
    }
}//end button prototype

function tweenHand() {
  console.log('hand');
  game.add.tween(lefthand).to({ x: cactusEndX + 50, y: cactusEndY - 50}, 1500, Phaser.Easing.Default, true);
}
