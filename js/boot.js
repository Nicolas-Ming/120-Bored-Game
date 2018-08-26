var boot = function() {
	//local variables
};
boot.prototype =  {
	preload: function() {
		game.load.image('cactusboi',      'assets/img/cactusboi/cactusboi.png');
      	game.load.image('lefthand',       'assets/img/cactusboi/lefthand.png'); // the cactus' right hand confusing I know, but I'm too lazy to change cuz it matters little
      	game.load.image('righthand',      'assets/img/cactusboi/righthand.png'); //the viewer's right
      	game.load.image('jacket',         'assets/img/cactusboi/jacket.png');
      	game.load.image('hat',            'assets/img/cactusboi/hat.png');
      	game.load.image('cactusnoface',   'assets/img/cactusboi/cactusnoface.png');

      	game.load.image('title',     'assets/img/mainmenu/titleone.png');

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
      	game.load.image('floor',      'assets/img/room/floor.png');
      	game.load.image('room',       'assets/img/room/wholeassroom.png')

      	game.load.image('pupperfull',   'assets/img/pupper/pupperfull.png');
  		game.load.image('justdog',      'assets/img/pupper/justdog.png');
  		game.load.image('bodyscarf',    'assets/img/pupper/bodyscarf.png');
  		game.load.image('headscarf',    'assets/img/pupper/headscarf.png');

  		game.load.image('bigvase',          'assets/img/portrait/bigvase.png');
      	game.load.image('portrait',         'assets/img/portrait/portrait.png');
      	game.load.image('portraitladyfull', 'assets/img/portrait/portraitladyfull.png');
     	game.load.image('scarf',            'assets/img/portrait/scarf.png');
    	game.load.image('smallvase',        'assets/img/portrait/smallvase.png');

    	game.load.image('tile', 'assets/img/tileee.png');
		game.load.image('rug', 'assets/img/rugwarped.png');
		game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');
		game.load.image('lwall', 'assets/img/wallTileLeft.png');
		game.load.image('rwall', 'assets/img/wallTileRight.png');
		game.load.image('bed', 'assets/img/bed.png');

		game.load.image('cactusboi', 'assets/img/cactusboi/cactusboi.png');
		game.load.image('lefthand', 'assets/img/cactusboi/lefthand.png');
		game.load.image('righthand', 'assets/img/cactusboi/righthand.png');
		game.load.image('jacket', 'assets/img/cactusboi/jacket.png');
		game.load.image('hat', 'assets/img/cactusboi/hat.png');
		//game.load.image('cactusnoface', 'assets/img/cactusboi/cactusnoface.png');

		game.load.image('pupperfull', 'assets/img/pupper/pupperfull.png');
		game.load.image('justdog', 'assets/img/pupper/justdog.png');
		game.load.image('bodyscarf', 'assets/img/pupper/bodyscarf.png');
		game.load.image('headscarf', 'assets/img/pupper/headscarf.png');

		game.load.image('bigvase', 'assets/img/portrait/bigvase.png');
        game.load.image('portrait', 'assets/img/portrait/portrait.png');
        game.load.image('portraitladyfull', 'assets/img/portrait/portraitladyfull.png');
   	    game.load.image('scarf', 'assets/img/portrait/scarf.png');
        game.load.image('smallvase', 'assets/img/portrait/smallvase.png');

		game.load.image('dialButB', 'assets/img/buttons/dialButB.png');
		game.load.image('dialButA', 'assets/img/buttons/dialButA.png');
		game.load.image('B_Story', 'assets/img/buttons/B_Story.png');
		game.load.image('A_Story', 'assets/img/buttons/A_Story.png');


		game.load.image('player', 'assets/img/playerC.png');

		game.load.image('dialogbox', 'assets/img/dialogbox.png');

		game.load.text('dialog', 'js/Dialog.json');
        game.load.text('dialogTwo', 'js/DialogTwo.json');

		game.load.bitmapFont('font', 'assets/img/gem.png', 'assets/img/gem.xml');

		game.load.image('dialogbox', 'assets/img/dialogbox.png');

		game.load.text('dialog', 'js/Dialog.json');

		//this.load.path = 'assets/img/';

		game.load.bitmapFont('font', 'assets/img/gem.png', 'assets/img/gem.xml');

		console.log('preload: boot');
		
	},
	create: function() {
		game.state.start('mainMenu');
	},
	update: function() {

	},
}
