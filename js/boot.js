var boot = function() {
	//local variables
};
boot.prototype =  {
	preload: function() {
		game.load.audio('songloop','assets/audio/frootloops.mp3');

		game.load.image('cactusboi',         'assets/img/cactusboi/cactusboi.png');
    game.load.image('lefthand',          'assets/img/cactusboi/lefthand.png'); // the cactus' right hand confusing I know, but I'm too lazy to change cuz it matters little
    game.load.image('righthand',         'assets/img/cactusboi/righthand.png'); //the viewer's right
    game.load.image('jacket',            'assets/img/cactusboi/jacket.png');
    game.load.image('hat',               'assets/img/cactusboi/hat.png');
    game.load.image('cactusnoface',      'assets/img/cactusboi/cactusnoface.png');
    game.load.spritesheet('dialogboxCB', 'assets/img/cactusboi/dialogboxCB.png', 800, 250, 2);

    game.load.image('title',             'assets/img/mainmenu/titletwo.png');
    game.load.spritesheet('startButton', 'assets/img/mainmenu/startButton.png',300,104,3)

    game.load.image('desk',              'assets/img/room/newdesk.png');
    game.load.image('coathanger',        'assets/img/room/coathanger.png');
    game.load.image('cabinet',           'assets/img/room/cabinet.png');
    game.load.image('plant',             'assets/img/room/plant.png');
    game.load.image('bed',               'assets/img/room/bed.png');
    game.load.image('room',              'assets/img/room/wholeassroom-so.png');
    game.load.image('bground',           'assets/img/room/tilebackground.png');

    game.load.image('dog',               'assets/img/pupper/pupperfull.png');
  	game.load.image('justdog',           'assets/img/pupper/justdog.png');
  	game.load.image('bodyscarf',         'assets/img/pupper/bodyscarf.png');
  	game.load.image('headscarf',         'assets/img/pupper/headscarf.png');
		game.load.spritesheet('dialogboxDG', 'assets/img/pupper/dialogboxDG.png', 800, 250, 2);

  	game.load.image('bigvase',           'assets/img/portrait/bigvase.png');
    game.load.image('portrait',          'assets/img/portrait/portrait.png');
    game.load.image('portraitlady',      'assets/img/portrait/portraitladyfull.png');
    game.load.image('scarf',             'assets/img/portrait/scarf.png');
    game.load.image('smallvase',         'assets/img/portrait/smallvase.png');
    game.load.spritesheet('dialogboxPL', 'assets/img/portrait/dialogboxPL.png', 800, 250, 2);

		game.load.image('dialogbox',         'assets/img/dialogue/dialogbox.png');

		game.load.text('dialogPL',           'js/DialogPL.json');
		game.load.text('dialogCB',           'js/DialogCB.json');
		game.load.text('dialogDG',           'js/DialogDG.json');

		game.load.bitmapFont('font',         'assets/img/dialogue/gem.png', 'assets/img/dialogue/gem.xml');
    game.load.bitmapFont('fontW',        'assets/img/dialogue/gemW.png', 'assets/img/dialogue/gem.xml');
    game.load.image('phone',             'assets/img/dialogue/phone.png');
    game.load.spritesheet('dotdotdot',   'assets/img/dialogue/dotdotdot.png', 82, 22, 5);
    game.load.spritesheet('choiceBox',   'assets/img/dialogue/emptyanswerbox.png', 396, 94, 2);
    game.load.spritesheet('textapp',     'assets/img/dialogue/textapp.png', 45, 48, 4)
    game.load.spritesheet('friendBox',   'assets/img/dialogue/bluetext.png', 300, 150, 2);
    game.load.spritesheet('uBox',        'assets/img/dialogue/whitetext.png', 300, 150, 2);
    game.load.image('textBG',            'assets/img/dialogue/textbackground.png');

    game.load.image('portraitIcon',      'assets/img/dialogue/portraiticon.png');
    game.load.image('cactusIcon',        'assets/img/dialogue/cactusicon.png');
    game.load.image('dogIcon',           'assets/img/dialogue/dogicon.png');
    game.load.image('fieri',             'assets/img/dialogue/fieriapp.png');
		
		
	},
	create: function() {
		music = game.add.audio('songloop',2,true);
		music.play();
		game.state.start('mainMenu');
	},
	update: function() {

	},
}
