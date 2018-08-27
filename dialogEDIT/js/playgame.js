// editted dialog system by nathan
var currentDBOX = 'dialogboxCB';	//for later use in switching the dialogbox
var currentJSON = 'dialog1';
//var currentSpeaker;	//don't actually need because the parser will decide for u, just need a decider for which JSON to play and which DBOX to use

MyGame.PlayGame = function(game){
	// dialog constants
	this.DBOX_X = 0;			// dialog box x-position
	this.DBOX_Y = 350;			// dialog box y-position
	this.DBOX_FONT = 'font';	// dialog box font key

	this.TEXT_X = 50;			// text w/in dialog box x-position
	this.TEXT_Y = 420;			// text w/in dialog box y-position
	this.TEXT_SIZE = 24;		// text font size (in pixels)
	this.TEXT_MAX_WIDTH = 715;	// max width of text within box

	this.NEXT_TEXT = '[CLICK]';	// text to display for next prompt
	this.NEXT_X = 750;			// next text prompt x-position
	this.NEXT_Y = 550;			// next text prompt y-position

	this.LETTER_TIMER = 10;		// # ms each letter takes to "type" onscreen

	// dialog variables
	this.dialogConvo = 0;			// current "conversation"
	this.dialogLine = 0;			// current line of conversation
	this.dialogSpeaker = null;		// current speaker
	this.dialogLastSpeaker = null;	// last speaker
	this.dialogTyping = false;		// flag to lock player input while text is "typing"
	this.dialogText = null;			// the actual dialog text
	this.nextText = null;			// player prompt text to continue typing

	// character variables
	this.cactusboi = null;
	this.portraitlady = null;
	this.dog = null;

	this.OFFSCREEN_X = -500;	// x,y values to place characters offscreen
	this.OFFSCREEN_Y = 1000;	//
};

MyGame.PlayGame.prototype = {
	create: function() {
		//background intialization
		this.physics.startSystem(Phaser.Physics.ARCADE);
        this.bgroundtiles = this.add.group();
        this.bground();

		// parse dialog from JSON file
		this.dialog = JSON.parse(this.game.cache.getText(currentJSON));
		
		// add dialog box sprite
		//**************currently playing with this to have different boxes and animations**************//
		this.dialogbox = this.add.sprite(this.DBOX_X, this.DBOX_Y, currentDBOX);
		this.dialogbox.animations.add('wiggly', [0, 1], 10, true);	//puts the wiggle in the dbox
		this.dialogbox.animations.play('wiggly');
		//this.dialogbox.visible = false;

		// init dialog text
		this.dialogText = this.add.bitmapText(this.TEXT_X, this.TEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);
		this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);

		// add character dialog images
		this.cactusboi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'cactusboi');
		this.cactusboi.anchor.setTo(0, 1);
		this.portraitlady = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'portraitlady');
		this.portraitlady.anchor.setTo(0, 1);
		this.dog = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'dog');
		this.dog.anchor.setTo(0, 1);

		//group for layer control
		this.layers = this.add.group();
		this.layers.add(this.cactusboi);
		this.layers.add(this.portraitlady);
		this.layers.add(this.dog);
		this.layers.add(this.dialogbox);
		this.layers.add(this.dialogText);

		// debug
		console.log(this.dialog);

		// start dialog
		this.TypeText();
	},
	update: function() {
		//background img
		this.bgroundtiles.forEach(this.wrapSprite, this, true);

/******** CHANGE THIS TO A MOUSE CLICK ********/
		// check for spacebar press
		if(this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && !this.dialogTyping) {
			// trigger dialog
			this.TypeText();
		}
/**********************************************/

	},
	TypeText: function() {
		// lock input while typing
		this.dialogTyping = true;

		// clear text
		this.dialogText.text = '';
		this.nextText.text = '';

		// make sure there are lines left to read in this convo, otherwise jump to next convo
		if(this.dialogLine > this.dialog[this.dialogConvo].length-1) {
			this.dialogLine = 0;
			this.dialogConvo++;
		}

		// make sure we're not out of conversations
		if(this.dialogConvo >= this.dialog.length) {
			console.log('End of Conversations');
		} else {
			// set current speaker
			this.dialogSpeaker = this.dialog[this.dialogConvo][this.dialogLine]['speaker'];

			if(this.dialog[this.dialogConvo][this.dialogLine]['newSpeaker']) {
				if(this.dialogLastSpeaker) {
					this.add.tween(this[this.dialogLastSpeaker]).to({x: this.OFFSCREEN_X}, 500, Phaser.Easing.Linear.None, true);
				}
				this.add.tween(this[this.dialogSpeaker]).to({x: this.DBOX_X+250, y: this.DBOX_Y+230}, 500, Phaser.Easing.Linear.None, true);

			}

			// build dialog (concatenate speaker + line of text)
			this.dialogLines = this.dialog[this.dialogConvo][this.dialogLine]['speaker'].toUpperCase() + ': ' + this.dialog[this.dialogConvo][this.dialogLine]['dialog'];

			// setup timer to iterate through each letter in dialog
			let currentChar = 0;
			this.textTimer = this.time.events.repeat(this.LETTER_TIMER, this.dialogLines.length, function(){
				this.dialogText.text += this.dialogLines[currentChar];
				currentChar++;
			}, this);
			// callback function fires once timer is finished
			this.textTimer.timer.onComplete.addOnce(function(){
				// show prompt for more text
				this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, this.NEXT_TEXT, this.TEXT_SIZE);
				this.nextText.anchor.setTo(1, 1);
				// un-lock input
				this.dialogTyping = false;
			}, this);
			
			// set bounds on dialog
			this.dialogText.maxWidth = this.TEXT_MAX_WIDTH;

			// increment dialog line
			this.dialogLine++;

			// set past speaker
			this.dialogLastSpeaker = this.dialogSpeaker;
		}
	},
	//BACKGROUND STUFF
	bground: function(){
        for(let j = 0; j < 3; j++){
            for(let i = 0; i < 4; i++){
                this.tile = this.add.sprite(0 + 511*i*.708,0 + 511*j*.708, 'bground');
                this.physics.enable(this.tile,Phaser.Physics.ARCADE);
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
            sprite.x = 1080 + sprite.width/2;
        } else if(sprite.x - sprite.width/2 > 1080) {
            sprite.x = 0 - sprite.width/2;
        }
        if(sprite.y + sprite.height/2 < 0) {
            sprite.y = 720 + sprite.height/2;
        } else if(sprite.y - sprite.height/2 > 720) {
            sprite.y = 0 - sprite.height/2;
        }
    },//END BACKGROUND STUFF
};