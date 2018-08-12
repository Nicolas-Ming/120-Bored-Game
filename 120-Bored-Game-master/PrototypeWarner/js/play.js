/*
end goal is to make a 'transform' function. - using Em's code for study... may/not use
*/

var Play = function() {

};

Play.prototype = {
  preload: function() {
    game.load.image('eye', 'assets/img/eye.png');
    game.load.image('button', 'assets/img/button.png');
  },

//create
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    let g = game.add.graphics();

    //dude = this.createDudeObject(game.world.centerX + 200, game.world.centerY, 3, 0x990909);
    //eye = this.createDudeEye(game.world.centerX - 200, game.world.centerY, 3, 0xADCFBF);
  //  mouth = this.createDudeMouth(game.world.centerX, game.world.centerY, 90, 0xADCFBF);

    game.physics.enable([dude/*, eye, mouth*/], Phaser.Physics.ARCADE);

    mouse = game.input.mouse.capture = true;
    cursor = game.input.keyboard.createCursorKeys();
  },

//update
  update: function(){

    if(game.input.activePointer.leftButton.isDown){
      /*
      console.log("Hello");
      dude.body.velocity.x = -150;
      eye.body.velocity.x = 100;
      mouth.body.velocity.x = -50;


      below add a if statement
      ?HOW? PASS IN SPRITE INTO FUNCTION ?HOW?
      */
      eye = game.add.sprite('eye');
      eye.enableBody = true;
      game.physics.enable([eye], Phaser.Physics.ARDADE);
      //createDudeObject(game.world.centerX + 200, game.world.centerY, eye );
    }//else if(cursor.right.isDown){
      //dude.body.velocity.x = 150;
    //  eye.body.velocity.x = -100;
    //  mouth.body.velocity.x = 50;
    //}
    else{
    //  dude.body.velocity.x = 0;
    //  eye.body.velocity.x = 0;
      //eye.body.velocity.x = 0;

    }
  },

//main body object
  createDudeObject: function(x, y, mans){
    mans.body.velocity.x = 150;


  //  game.add.sprite(x, y, null, 'eye');
    //let pongObj = null;
    //vreate primitive
    //let g = game.add.graphics();
    //g.beginFill(color);
    //g.drawCircle(x, y, 90, h);
    //g.endFill();
    //transform primitive into sprite
    //pongObj = game.add.sprite(x, y, g.generateTexture());
    //pongObj.anchor.set(0.5,0.5);
    //g.destroy();

    //return pongObj;
  },
/*
//eye Object
  createDudeEye: function(x, y, h, color){
    let pongObj = null;
    //vreate primitive
    let g = game.add.graphics();
    g.beginFill(color);
    g.drawCircle(x, y, 40, h);
    g.endFill();
    //transform primitive into sprite
    pongObj = game.add.sprite(x, y, g.generateTexture());
    pongObj.anchor.set(0.5,0.5);
    g.destroy();

    return pongObj;
  },

//mouth Object
  createDudeMouth: function(x, y, h, color){
    let pongObj = null;
    //vreate primitive
    let g = game.add.graphics();
    g.beginFill(color);
    g.drawCircle(x, y, 29, h+90);
    g.endFill();
    //transform primitive into sprite
    pongObj = game.add.sprite(x, y, g.generateTexture());
    pongObj.anchor.set(0.5,0.5);
    g.destroy();

    return pongObj;
  },
  */
}
