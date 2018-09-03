// tile creation needs work
// animation when walking on diagonals needs fixing as well

//not sure if it can work without these here LOL
var choiceA;
var choiceB;
var choiceC;
var BG = 'bground';

var day = function() {
    //local variables
    this.x = null;
    this.y = null;
    this.counter = 0;

};
day.prototype =  {
    preload: function() {
        counter = 0;
    },
    create: function() {
        /*//QUICKER TESTING BUTTONS!!!!!!!
        devButt = game.add.button(0, 0, 'fieri',
            function(){
                numDay++
                game.state.start('day');
            }, this);
        devButt.anchor.setTo(0,0);
        devReset = game.add.button(0, 720, 'fieri',
            function(){
                //numDay++
                game.state.start('day');
            }, this);
        devReset.anchor.setTo(0,1);
        //END OF QUICKER TEST BUTTONS!!!*/


        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bgroundtiles = this.game.add.group();
        this.bground();

        game.input.mouse.capture = true;

        //instantiate sprite(s)
            phone              = game.add.sprite(540, 1080, 'phone');

        //typingtyping
            dotdotdot          = game.add.button(760, 1080, 'dotdotdot',
                function(){
                    this.options();
                }, this);   
            dotdotdot.animations.add('typing', [0, 1, 2, 3, 4,], 7, true); 
            
        //the textapp-button!
            textapp            = game.add.button(540-75, 290-130, 'textapp', 
            // textapp            = game.add.button(540, 1080, 'textapp', 
                function(){
                    //this.options();
                    textapp.kill();
                    phoneZoom = game.add.tween(phone.scale).to({x: 10, y: 10}, 900, Phaser.Easing.Default, true);
                    phoneZoom.onComplete.add(function(){phone.kill();}, this);

                    //tweens named b/c might use for future animation 'onComplete'
                    if(numDay == 0){//day 1
                        ft1 = game.add.tween(friendBoxA1).to({ x: 55, y: 70-quickAdjust}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextA1).to({ x: 100, y: 85-quickAdjust}, 900, Phaser.Easing.Default, true);
                    }else if(numDay == 1){//day 2
                        game.add.tween(friendBoxB1).to({ x: 55, y: 200}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextB1).to({ x: 100, y: 220}, 900, Phaser.Easing.Default, true);
                    }else if(numDay == 2){//day 3
                        game.add.tween(friendBoxC1).to({ x: 55, y: 280}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextC1).to({ x: 100, y: 300}, 900, Phaser.Easing.Default, true);
                    }else if(numDay == 3){//day 4
                        game.add.tween(friendBoxD1).to({ x: 55, y: 180}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextD1).to({ x: 100, y: 210}, 900, Phaser.Easing.Default, true);
                    }
                    // BG = 'textBG';
                    // this.bground();
                }, this, 3, 3, 1, 0);
            textapp.animations.add('oneNotif', [3, 4], .002, false);
            textapp.alpha = 0;

            
        //friend: texts and text boxes for them fresh TEXTS
            var quickAdjust = 50;   //helpful at the start lol, but now is just a silly bit of thing
            var friendBoxes = game.add.group();



            //day 1 texts//
            friendtextA1 = game.add.bitmapText(100, 1080, 'fontW', 'Hey, do you have a second? I wanted to talk \nto you about something, if that\'s alright', 24);
                friendBoxA1 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        ft2 = game.add.tween(friendBoxA2).to({ x: 55, y: 162-25-quickAdjust}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextA2).to({ x: 100, y: 162-5-quickAdjust}, 900, Phaser.Easing.Default, true);
                    }, this);
                friendBoxA1.scale.setTo(2, 0.6);
            friendtextA2 = game.add.bitmapText(100, 1080, 'fontW', 'Remember earlier today when we were all \ntogether? And you brought up (former friend)?\nI really didn\'t appreciate you talking about \nthem. We really don\'t have to bring up the \ntoxic things I regret doing, especially \nbecause I think I\'ve grown a lot since then.', 24);
                friendBoxA2 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        ft3 = game.add.tween(friendBoxA3).to({ x: 45, y: 329-30-quickAdjust}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextA3).to({ x: 100, y: 351-25-quickAdjust}, 900, Phaser.Easing.Default, true);
                    }, this);
                friendBoxA2.scale.setTo(2, 1.3);
            friendtextA3 = game.add.bitmapText(100, 1080, 'fontW', 'Honestly, I thought we both have, so it\'s \nshitty that you brought that up in front of \nother people. I get that sometimes we talk \nabout them when it\'s the two of us, but \nonly because we\'re cool like that, ya know?', 24);
                friendBoxA3 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        ft4 = game.add.tween(friendBoxA4).to({ x: 45, y: 480-25-quickAdjust}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextA4).to({ x: 100, y: 500-27-quickAdjust}, 900, Phaser.Easing.Default, true);
                    }, this);
                friendBoxA3.scale.setTo(2, 1.2);
            friendtextA4 = game.add.bitmapText(100, 1080, 'fontW', 'Listen, I don\'t need you to respond to this \nright now. Since it\'s you, take your time \nbut I don\'t want to drop this.', 24);
                friendBoxA4 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        game.add.tween(dotdotdot).to({ x: 760, y: 480}, 900, Phaser.Easing.Default, true);
                        dotdotdot.animations.play('typing');
                    }, this);
                friendBoxA4.scale.setTo(2, 0.7);

            //day 2 texts//
            friendtextB1 = game.add.bitmapText(100, 1080, 'fontW', 'Hey, I know I just texted you yesterday. \nAnd I\'m not pressuring you to text me back \nyet, really! The gang and I were thinking \nabout you. Just wanted to tell you that you\'re \non our minds.', 24);
                friendBoxB1 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        game.add.tween(dotdotdot).to({ x: 760, y: 480}, 900, Phaser.Easing.Default, true);
                        dotdotdot.animations.play('typing');
                    }, this);
                friendBoxB1.scale.setTo(2.1, 1.1);

            //day 3 texts//
            friendtextC1 = game.add.bitmapText(100, 1080, 'fontW', 'Hey, just checkin in on ya. Hope you\'re doing okay!', 24);
                friendBoxC1 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        game.add.tween(dotdotdot).to({ x: 760, y: 430}, 900, Phaser.Easing.Default, true);
                        dotdotdot.animations.play('typing');
                    }, this);
                friendBoxC1.scale.setTo(2.3, 0.5);

            //day 4 texts//
            friendtextD1 = game.add.bitmapText(100, 1080, 'fontW', 'Hey hey. I understand that I said you can \ntake as long as you want, and it\'s still \ntotally fine that you haven\'t answered me \nyet. I\'m just worried about you since I \nhaven\'t heard from you in a minute.', 24);
                friendBoxD1 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        game.add.tween(friendBoxD2).to({ x: 55+15, y: 377-20}, 900, Phaser.Easing.Default, true);
                        game.add.tween(friendtextD2).to({ x: 100, y: 387-20}, 900, Phaser.Easing.Default, true);
                    }, this);
                friendBoxD1.scale.setTo(2, 1.2);
            friendtextD2 = game.add.bitmapText(100, 1080, 'fontW', 'Are you okay?', 24);
                friendBoxD2 = game.add.button(100, 1080, 'friendBox',
                    function(){
                        game.add.tween(dotdotdot).to({ x: 760, y: 430}, 900, Phaser.Easing.Default, true);
                        dotdotdot.animations.play('typing');
                    }, this);
                friendBoxD2.scale.setTo(0.7, 0.3);

            //activate animations!
            friendBoxes.add(friendBoxA1);
            friendBoxes.add(friendBoxA2);
            friendBoxes.add(friendBoxA3);
            friendBoxes.add(friendBoxA4);
            friendBoxes.add(friendBoxB1);
            friendBoxes.add(friendBoxC1);
            friendBoxes.add(friendBoxD1);
            friendBoxes.add(friendBoxD2);

            friendBoxes.callAll('animations.add', 'animations', 'wiggle', [0, 1], 10, true);
            friendBoxes.callAll('play', null, 'wiggle');


        //CHOICE: buttons
        //for some reason, if the callBack function isn't made inside the button, the button will be instantiated in the game already 'pressed', startung the function without user interaction!
        //thus the sections of code with buttons look like this, lol
            choiceA            = game.add.button(540, 1080, 'choiceBox', 
                function(){
                    if(numDay == 0){ 
                        game.add.tween(uTextA1).to({ x: 440, y: 530}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxA1).to({x: 1045, y: 485}, 900, Phaser.Easing.Default, true);
                        choiceA1text.kill();
                        choiceA2text.kill();
                    }else if(numDay == 1){
                        game.add.tween(uTextB1).to({ x: 440, y: 400}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxB1).to({x: 1045, y: 355}, 900, Phaser.Easing.Default, true);
                        choiceB1text.kill();
                        choiceB2text.kill();
                    }else if(numDay == 2){
                        game.add.tween(uTextC1).to({ x: 440, y: 370}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxC1).to({x: 1045, y: 335}, 900, Phaser.Easing.Default, true);
                        choiceC1text.kill();
                        choiceC2text.kill();
                        choiceC3text.kill();
                    }else if(numDay == 3){
                        game.add.tween(uTextD1).to({ x: 480, y: 410}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxD1).to({x: 1045, y: 375}, 900, Phaser.Easing.Default, true);
                        choiceD1text.kill();
                        choiceD2text.kill();
                        choiceD3text.kill();
                    }
                    iconPL.kill();
                    iconCT.kill();
                    iconDG.kill();
                    dotdotdot.kill();
                    choiceA.kill();
                    choiceB.kill();
                    choiceC.kill();
                }, this, 0, 0, 1, 0);

            choiceB            = game.add.button(540, 1080, 'choiceBox', 
                function(){
                    if(numDay == 0){
                        game.add.tween(uTextA2).to({ x: 600+150-10, y: 530}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxA2).to({x: 1025, y: 485}, 900, Phaser.Easing.Default, true);
                        choiceA1text.kill();
                        choiceA2text.kill();
                    }else if(numDay == 1){
                        game.add.tween(uTextB2).to({ x: 600+30+30, y: 400}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxB2).to({x: 1025, y: 355}, 900, Phaser.Easing.Default, true);
                        choiceB1text.kill();
                        choiceB2text.kill();
                    }else if(numDay == 2){
                        game.add.tween(uTextC2).to({ x: 500, y: 380+10}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxC2).to({x: 1045, y: 355}, 900, Phaser.Easing.Default, true);
                        choiceC1text.kill();
                        choiceC2text.kill();
                        choiceC3text.kill();
                    }else if(numDay == 3){
                        game.add.tween(uTextD2).to({ x: 480, y: 410}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxD2).to({x: 1045, y: 375}, 900, Phaser.Easing.Default, true);
                        choiceD1text.kill();
                        choiceD2text.kill();
                        choiceD3text.kill();
                    }
                    iconPL.kill();
                    iconCT.kill();
                    iconDG.kill();
                    dotdotdot.kill();
                    choiceA.kill();
                    choiceB.kill();
                    choiceC.kill();
                }, this, 0, 0, 1, 0);

            choiceC            = game.add.button(540, 1080, 'choiceBox', 
                function(){
                    if(numDay == 0){
                        //howdy
                    }else if(numDay == 1){
                        //hi how r u
                    }else if(numDay == 2){
                        game.add.tween(uTextC3).to({ x: 640, y: 390}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxC3).to({x: 920+50+10, y: 355}, 900, Phaser.Easing.Default, true);
                        choiceC1text.kill();
                        choiceC2text.kill();
                        choiceC3text.kill();
                    }else if(numDay == 3){
                        game.add.tween(uTextD3).to({ x: 420, y: 410}, 900, Phaser.Easing.Default, true);
                        game.add.tween(uBoxD3).to({x: 1045, y: 375}, 900, Phaser.Easing.Default, true);
                        choiceD1text.kill();
                        choiceD2text.kill();
                        choiceD3text.kill();
                    }
                    iconPL.kill();
                    iconCT.kill();
                    iconDG.kill();
                    dotdotdot.kill();
                    choiceA.kill();
                    choiceB.kill();
                    choiceC.kill();
                }, this, 0, 0, 1, 0);


        //CHOICE: text&textboxes
        //the names may not align to the buttons! poor forethought on my (marlo is me) part ((((FIXED kinda))))
            var uBoxes = game.add.group();
            iconPL = game.add.sprite(540, 1080, 'portraitIcon');
            iconPL.anchor.setTo(0.5);
            iconCT = game.add.sprite(540, 1080, 'cactusIcon');
            iconCT.anchor.setTo(0.5);
            iconDG = game.add.sprite(540, 1080, 'dogIcon');
            iconDG.anchor.setTo(0.5);
            

            //day 1 choices!
            choiceA1text = game.add.bitmapText(540, 1080, 'font', 'answer now', 32);
            choiceA1text.anchor.setTo(0.5);
            choiceA2text = game.add.bitmapText(540, 1080, 'font', 'take some time', 32);
            choiceA2text.anchor.setTo(0.5);
            
            uBoxA1 = game.add.button(1025, 1080, 'uBox', 
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxA1.scale.setTo(2.1, 1.4);
                    uBoxA1.anchor.setTo(1, 0);
            uTextA1 = game.add.bitmapText(440, 1080, 'font', 'Hey i thought about it & honestly ur holding me \nback homie, ily but fk u. Ur whole lifestyle is \nwack. Ur foot-stance: wack. The way u can\'t \nhandle the past: wack. But me? I\'m tight af. \nPeace! Smell ya l8r, fool!!', 24);
                

            uBoxA2 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('night');
                    }, this);
                    uBoxA2.scale.setTo(1.2, 0.8);
                    uBoxA2.anchor.setTo(1, 0);   //might be useful to move player chatbocks anchors to (1,0) to be alligned to the right!
            uTextA2 = game.add.bitmapText(440, 1080, 'font', 'I need some time', 24);
                


            //day 2 choices!
            choiceB1text = game.add.bitmapText(540, 1080, 'font', 'answer now', 32);
            choiceB1text.anchor.setTo(0.5);
            choiceB2text = game.add.bitmapText(540, 1080, 'font', 'take more time', 32);
            choiceB2text.anchor.setTo(0.5);
            
            uBoxB1 = game.add.button(1025, 1080, 'uBox',
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxB1.scale.setTo(2.15, 1.4);
                    uBoxB1.anchor.setTo(1, 0);
            uTextB1 = game.add.bitmapText(440, 1080, 'font', 'Hey that\'s nice to hear. But regarding \nwhat happened, I don\'t believe that it\'s \nthat big of a deal. I\'m not going to apologize \nfor bringing up something that you did before. \nIt happened so deal with it.', 24);
                
            
            uBoxB2 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('night2');
                    }, this);
                    uBoxB2.scale.setTo(1.4, 0.8);
                    uBoxB2.anchor.setTo(1, 0);
            uTextB2 = game.add.bitmapText(440, 1080, 'font', 'I\'ll need some more time', 24);
                


            //day 3 choices!
            choiceC1text = game.add.bitmapText(540, 1080, 'font', '(smart picture)', 32);
            choiceC1text.anchor.setTo(0.5);
            choiceC2text = game.add.bitmapText(540, 1080, 'font', '(prickly guy)', 32);
            choiceC2text.anchor.setTo(0.5);
            choiceC3text = game.add.bitmapText(540, 1080, 'font', 'even more time', 32);
            choiceC3text.anchor.setTo(0.5);
            
            uBoxC1 = game.add.button(1025, 1080, 'uBox',
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxC1.scale.setTo(2.1, 1);
                    uBoxC1.anchor.setTo(1,0);
            uTextC1 = game.add.bitmapText(440, 1080, 'font', 'I\'m doing fine, but after thinking over what \nyou said the other day I think you are \njust overreacting and you need to get over it.', 24);
                

            uBoxC2 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxC2.scale.setTo(2.1, 1.1);
                    uBoxC2.anchor.setTo(1, 0);
            uTextC2 = game.add.bitmapText(440, 1080, 'font', 'I took some time to think and I just \nwanted to say sorry if what I said was \nhurtful. I just want us to move on from \nthis and go back to normal.', 24);
                
            
            uBoxC3 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('night3');
                    }, this);
                    uBoxC3.scale.setTo(1.2, 0.7);
                    uBoxC3.anchor.setTo(1, 0);
            uTextC3 = game.add.bitmapText(920, 1080, 'font', 'I\'m taking even more time!', 24);


            //day 4 choices!
            choiceD1text = game.add.bitmapText(540, 1080, 'font', '(smart picture)', 32);
            choiceD1text.anchor.setTo(0.5);
            choiceD2text = game.add.bitmapText(540, 1080, 'font', '(prickly guy)', 32);
            choiceD2text.anchor.setTo(0.5);
            choiceD3text = game.add.bitmapText(540, 1080, 'font', '(dog)', 32);
            choiceD3text.anchor.setTo(0.5);

            uBoxD1 = game.add.button(1025, 1080, 'uBox',
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxD1.scale.setTo(2.0, 1.5);
                    uBoxD1.anchor.setTo(1, 0);
            uTextD1 = game.add.bitmapText(440, 1080, 'font', 'I\'m okay. And about the other day, I think \nthat honestly ur holding me back homie, ily \nbut fk u. Ur whole lifestyle is wack. Ur \nfoot-stance: wack. The way u can\'t handle \nthe past: wack. But me? I\'m sick af. Peace! \nCya l8r, nerd! I\'m OUT!', 24);                


            uBoxD2 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxD2.scale.setTo(2, 1.1);
                    uBoxD2.anchor.setTo(1, 0);
            uTextD2 = game.add.bitmapText(440, 1080, 'font', 'Hi. Yes, I\'m okay. Obviously, there was \nsome miscommunication. I didn\'t intend to \nhurt your feelings. Let\'s just forget about \nwhat happened.', 24);
                

            uBoxD3 = game.add.button(920, 1080, 'uBox', 
                    function(){
                        game.state.start('mainMenu');
                    }, this);
                    uBoxD3.scale.setTo(2.2, 1.8);
                    uBoxD3.anchor.setTo(1, 0);
            uTextD3 = game.add.bitmapText(440, 1080, 'font', 'Hello hello. I\'m okay, just needed some time \nto think about how to respond to you. I\'m \nreally sorry for bringing (former friend) up. \nI didn\'t really think about how that could have \naffected you, and I understand how that was \nhurtful on my part. I should have been more \nmindful about what I said especially in front \nof others. ily let\'s hang!', 24);


            uBoxes.add(uBoxA1);
            uBoxes.add(uBoxA2);
            uBoxes.add(uBoxB1);
            uBoxes.add(uBoxB2);
            uBoxes.add(uBoxC1);
            uBoxes.add(uBoxC2);
            uBoxes.add(uBoxC3);
            uBoxes.add(uBoxD1);
            uBoxes.add(uBoxD2);
            uBoxes.add(uBoxD3);
            uBoxes.callAll('animations.add', 'animations', 'wiggle', [0, 1], 10, true);
            uBoxes.callAll('play', null, 'wiggle');

        //scales&anchors
            phone.scale.setTo(1);
            dotdotdot.scale.setTo(2);

            phone.anchor.setTo(0.5);
            choiceC.anchor.setTo(0.5);
        //calling functions for the scene
            this.phonemove();


    },
    update: function() {
        this.bgroundtiles.forEach(this.wrapSprite, this, true);
        if(counter == 1){
            game.add.tween(dotdotdot).to({ x: 560, y: 250}, 500, Phaser.Easing.Default, true);
            dotdotdot.animations.play('typing');
        }
        if(counter == 2){
            dotdotdot.kill();
        }
    },
    bground: function(){
        for(let j = 0; j < 3; j++){
            for(let i = 0; i < 4; i++){
                this.tile = game.add.sprite(0 + 511*i*.708,0 + 511*j*.708, BG);
                this.game.physics.enable(this.tile,Phaser.Physics.ARCADE);
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
            sprite.x = game.width + sprite.width/2;
        } else if(sprite.x - sprite.width/2 > game.width) {
            sprite.x = 0 - sprite.width/2;
        }
        if(sprite.y + sprite.height/2 < 0) {
            sprite.y = game.height + sprite.height/2;
        } else if(sprite.y - sprite.height/2 > game.height) {
            sprite.y = 0 - sprite.height/2;
        }
    },
    phonemove: function(){
        game.add.tween(phone).to({ x: 540, y: 290}, 900, Phaser.Easing.Default, true);
        game.add.tween(phone).to({angle: -360}, 900, Phaser.Easing.Cubic.In, true);
        // game.add.tween(message1).to({ x: 520, y: 190}, 900, Phaser.Easing.Default, true);
        texty = game.add.tween(textapp).to({x: 540-75, y: 290-130}, 900, Phaser.Easing.Default, true);
        //game.add.tween(textapp).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true);
        texty.onComplete.add(function(){textapp.alpha = 1; textapp.animations.play('oneNotif');}, this);
        // textapp.animations.play('oneNotif');
    },
    options: function(){
        if(numDay >= 2){
            game.add.tween(choiceA).to({ x: 140, y: 500}, 900, Phaser.Easing.Default, true);
            game.add.tween(choiceB).to({ x: 544, y: 500}, 900, Phaser.Easing.Default, true);
            game.add.tween(choiceC).to({ x: 540, y: 647}, 900, Phaser.Easing.Default, true);
            if(numDay == 2){
                game.add.tween(iconPL).to({ x: 338, y: 545}, 900, Phaser.Easing.Default, true);
                game.add.tween(iconCT).to({ x: 742, y: 545}, 900, Phaser.Easing.Default, true);
                game.add.tween(choiceC3text).to({ x: 540, y: 647}, 900, Phaser.Easing.Default, true);
            }else if(numDay == 3){
                game.add.tween(iconPL).to({ x: 338, y: 545}, 900, Phaser.Easing.Default, true);
                game.add.tween(iconCT).to({ x: 742, y: 545}, 900, Phaser.Easing.Default, true);
                game.add.tween(iconDG).to({ x: 540, y: 647}, 900, Phaser.Easing.Default, true);
            }
        }else{
            //text box
            game.add.tween(choiceA).to({ x: 144, y: 530}, 900, Phaser.Easing.Default, true);
            game.add.tween(choiceB).to({ x: 540, y: 530}, 900, Phaser.Easing.Default, true);
            //text
            if(numDay == 0){
                game.add.tween(choiceA1text).to({ x: 338, y: 575}, 900, Phaser.Easing.Default, true);
                game.add.tween(choiceA2text).to({ x: 742, y: 575}, 900, Phaser.Easing.Default, true);
            }else if(numDay == 1){
                game.add.tween(iconPL).to({ x: 338, y: 575}, 900, Phaser.Easing.Default, true);
                game.add.tween(choiceB2text).to({ x: 742, y: 575}, 900, Phaser.Easing.Default, true);
            }


        }
    }
}