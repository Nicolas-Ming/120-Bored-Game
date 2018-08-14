// dialogSystem state

dialogSystem = function(game){
	// dialog constants


	this.DBOX_X = 0;			// dialog box x-position
	this.DBOX_Y = 280;			// dialog box y-position
	this.DBOX_FONT = 'font';	// dialog box font key

	this.TEXT_X = 25;			// text w/in dialog box x-position
	this.TEXT_Y = 330;			// text w/in dialog box y-position
	this.TEXT_SIZE = 20;		// text font size (in pixels)
	this.TEXT_MAX_WIDTH = 315;	// max width of text within box

	this.NEXT_TEXT = '[SPACE]';	// text to display for next prompt
	this.NEXT_X = 775;			// next text prompt x-position
	this.NEXT_Y = 574;			// next text prompt y-position

	this.LETTER_TIMER = 15;		// # ms each letter takes to "type" onscreen

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


	this.OFFSCREEN_X = -500;	// x,y values to place characters offscreen
	this.OFFSCREEN_Y = 1000;	//
};

dialogSystem.prototype = {
	create: function() {
		this.stage.backgroundColor = 0xf6997a;
		this.dialButA = this.add.button(-1000, 200, 'dialButA', this.A_Dialog);
		this.dialButB = this.add.button(-1000, 200, 'dialButB', this.B_Dialog);
		// parse dialog from JSON file
		this.dialog = JSON.parse(this.game.cache.getText('dialog'));

		// add dialog box sprite
		this.dialogbox = this.add.sprite(this.DBOX_X, this.DBOX_Y, 'dialogbox');
		//this.dialogbox.visible = false;

		// init dialog text
		this.dialogText = this.add.bitmapText(this.TEXT_X, this.TEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);
		this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);

		// add character dialog images
		this.cactusboi = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'cactusboi');
		this.cactusboi.anchor.setTo(0, 1);
    this.cactusboi.sendToBack();

		// debug
		console.log(this.dialog);

		// start dialog
		this.TypeText();
	},
	update: function() {
		// check for spacebar press
		if(this.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && !this.dialogTyping) {
			// trigger dialog
			this.TypeText();
		}
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
			this.dialogbox.kill();
			this.add.tween(this.dialButA).to({ x: 100, y: 200}, 500, Phaser.Easing.Bounce.out, true);
			this.add.tween(this.dialButA.scale).to({ x: 0.5, y: 0.5}, 500, Phaser.Easing.Default, true);
			this.add.tween(this.dialButB).to({ x: 100, y: 400}, 500, Phaser.Easing.Bounce.out, true);
			this.add.tween(this.dialButB.scale).to({ x: 0.5, y: 0.5}, 500, Phaser.Easing.Default, true);

			console.log('End of Conversations');

		} else {
			// set current speaker
			this.dialogSpeaker = this.dialog[this.dialogConvo][this.dialogLine]['speaker'];

			if(this.dialog[this.dialogConvo][this.dialogLine]['newSpeaker']) {
				if(this.dialogLastSpeaker) {
          dialogLastSpeaker.sendToBack();
					this.add.tween(this[this.dialogLastSpeaker]).to({x: this.OFFSCREEN_X}, 500, Phaser.Easing.Linear.None, true);
				}
				this.add.tween(this[this.dialogSpeaker]).to({x: this.DBOX_X+50, y: this.DBOX_Y + 420}, 500, Phaser.Easing.Linear.None, true);
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
	A_Dialog: function(){
		console.log('A_Dialog');
		//dialButB.kill();
		game.state.start('night');

	},
	B_Dialog: function(){
		console.log('B_Dialog');
		//this.dialButA.kill();
		game.state.start('night');

	}
};
