var game = new Phaser.Game();

/*
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
*/

game.state.add('Button', Button);
//game.state.add('objTweening', objTweening);
//game.state.start('objTweening');
game.state.start('Button');
