class Drone extends Phaser.Scene {
    constructor() {
        super("droneScene");
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image('map', 'img/map.png');
        this.load.image('drone', 'img/drone.png');
        this.load.image('marker_sprite', 'img/Marker.png');
        this.load.image('UI', 'img/UI_frame.png');

    }



    create() {
        var title_music;
        
        this.title_music = game.sound.add('sfx_title')
        this.load.audio('sfx_select', './assets/blip_select12.wav');

        // Set Keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Create counters
        var score1;
        var score2;
        var score3;
        var score4;
        var score5;
        this.score1 = 0;
        this.score2 = 0;
        this.score3 = 0;
        this.score4 = 0;
        this.score5 = 0;
        

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            //backgroundColor: '#000000',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 325
        }
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            //backgroundColor: '#000000',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth:15
        }

        let mod = 24;
        
        // Draw map background
        this.map = this.add.tileSprite(0, 0, 640, 480, 'map').setOrigin(0, 0);
        this.background = this.add.tileSprite(0, 0, 640, 480, 'UI').setOrigin(0, 0);

        // Controls Fadeout/Fadein of the Images
        this.cameras.main.once('camerafadeincomplete', function (camera) {

            //camera.fadeOut(2000);
        });
        this.cameras.main.fadeIn(2500);
        
        // Add text to screen
        this.droneTitle = this.add.text(300, 10, 'Drag Each Drone to a Location!', textConfig);
        this.droneTitle = this.add.text(300, 40, 'Press -Space- to reset Drones!', textConfig);
        this.droneTitle = this.add.text(300, 70, 'Press -X- to send the Drones!', textConfig);
        

        // Add counters
        this.counter01 = this.add.text(144, 160 + mod, ''+this.score1, scoreConfig);
        this.counter02 = this.add.text(240, 256 + mod,  ''+this.score2, scoreConfig);
        this.counter03 = this.add.text(304, 128+ mod,  ''+this.score3, scoreConfig);
        this.counter04 = this.add.text(399, 224+ mod,  ''+this.score4, scoreConfig);
        this.counter05 = this.add.text(495, 160+ mod,  ''+this.score5, scoreConfig);

        // Draw rect behind Bots
        //this.add.rectangle(140, 400, 385 , 45, 0x000000).setOrigin(0, 0);

        // Draw locational stand ins
        this.location01 = new Spot(this, 144, 160, 'marker_sprite', 0, 30).setOrigin(0.5,0.5);  // Counter 1
        this.location02 = new Spot(this, 240, 256, 'marker_sprite', 0, 30).setOrigin(0.5,0.5); // Counter 2
        this.location03 = new Spot(this, 304, 128, 'marker_sprite', 0, 30).setOrigin(0.5,0.5);  // Counter 3
        this.location04 = new Spot(this, 399, 224, 'marker_sprite', 0, 30).setOrigin(0.5,0.5); // Counter 4
        this.location05 = new Spot(this, 495, 160, 'marker_sprite', 0, 30).setOrigin(0.5,0.5); // Counter 5

        var spot_check = this.location01.x;
        spot_check = this.location02.x;
        spot_check = this.location03.x;
        spot_check = this.location04.x;
        spot_check = this.location05.x;
        

        // Add Bots 
        this.bot01 = new Bot(this, 150, 400, 'drone', 0, 30).setOrigin(0,0);
        this.bot02 = new Bot(this, 230, 400, 'drone', 0, 30).setOrigin(0,0);
        this.bot03 = new Bot(this, 310, 400, 'drone', 0, 30).setOrigin(0,0);
        this.bot04 = new Bot(this, 390, 400, 'drone', 0, 30).setOrigin(0,0);
        this.bot05 = new Bot(this, 470, 400, 'drone', 0, 30).setOrigin(0,0);
        
        
        
        // CODE FOR SENDING RANDOM INFORMATION FROM LOCATIONS
        
    }


    update() {
        this.spot_check = this.location01.x;
        this.spot_check = this.location02.x;
        this.spot_check = this.location03.x;
        this.spot_check = this.location04.x;
        this.spot_check = this.location05.x;


        // Check mouse/bot collisions
        if(game.input.mousePointer.isDown && this.checkCollision(this.bot01)){
            this.bot01.x = game.input.mousePointer.x-this.bot01.width/2;
            this.bot01.y = game.input.mousePointer.y-this.bot01.height/2;
        }
        else if(game.input.mousePointer.isDown && this.checkCollision(this.bot02)){
            this.bot02.x = game.input.mousePointer.x-this.bot02.width/2;
            this.bot02.y = game.input.mousePointer.y-this.bot02.height/2;
        }
        else if(game.input.mousePointer.isDown && this.checkCollision(this.bot03)){
            this.bot03.x = game.input.mousePointer.x-this.bot03.width/2;
            this.bot03.y = game.input.mousePointer.y-this.bot03.height/2;
        }
        else if(game.input.mousePointer.isDown && this.checkCollision(this.bot04)){
            this.bot04.x = game.input.mousePointer.x-this.bot04.width/2;
            this.bot04.y = game.input.mousePointer.y-this.bot04.height/2;
        }
        else if(game.input.mousePointer.isDown && this.checkCollision(this.bot05)){
            this.bot05.x = game.input.mousePointer.x-this.bot05.width/2;
            this.bot05.y = game.input.mousePointer.y-this.bot05.height/2;
        }

        // ------Check location/bot collisions-------

        // Location 1 Check
        if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot01, this.location01)){
            this.sound.play('sfx_select');
            this.bot01.x = 1000;
            this.score1 = this.score1 + 1;
            this.game.bot1Loc = 1;  
            this.counter01.setText(''+this.score1);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot02, this.location01)){
            this.sound.play('sfx_select');
            this.bot02.x = 1000;
            this.score1 += 1;
            this.game.bot2Loc = 1; 
            this.counter01.setText(''+this.score1);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot03, this.location01)){
            this.sound.play('sfx_select');
            this.bot03.x = 1000;
            this.score1 += 1;
            this.game.bot3Loc = 1;  
            this.counter01.setText(''+this.score1);
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot04, this.location01)){
            this.sound.play('sfx_select');
            this.bot04.x = 1000;
            this.score1 += 1; 
            this.game.bot4Loc = 1; 
            this.counter01.setText(''+this.score1);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot05, this.location01)){
            this.sound.play('sfx_select');
            this.bot05.x = 1000;
            this.score1 += 1;
            this.game.bot5Loc = 1;  
            this.counter01.setText(''+this.score1);
            
        }

        // Location 2 Check
        if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot01, this.location02)){
            this.sound.play('sfx_select');
            this.bot01.x = 1000;
            this.score2 = this.score2 + 1;
            this.game.bot1Loc = 2; 
            this.counter02.setText(''+this.score2);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot02, this.location02)){
            this.sound.play('sfx_select');
            this.bot02.x = 1000;
            this.score2 += 1; 
            this.game.bot2Loc = 2; 
            this.counter02.setText(''+this.score2);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot03, this.location02)){
            this.sound.play('sfx_select');
            this.bot03.x = 1000;
            this.score2 += 1;
            this.game.bot3Loc = 2;  
            this.counter02.setText(''+this.score2);
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot04, this.location02)){
            this.sound.play('sfx_select');
            this.bot04.x = 1000;
            this.score2 += 1; 
            this.game.bot4Loc = 2; 
            this.counter02.setText(''+this.score2);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot05, this.location02)){
            this.sound.play('sfx_select');
            this.bot05.x = 1000;
            this.score2 += 1;
            this.game.bot5Loc = 2;  
            this.counter02.setText(''+this.score2);
            
        }

        // Location 3 Check
        if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot01, this.location03)){
            this.sound.play('sfx_select');
            this.bot01.x = 1000;
            this.score3 = this.score3 + 1; 
            this.game.bot1Loc = 3; 
            this.counter03.setText(''+this.score3);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot02, this.location03)){
            this.sound.play('sfx_select');
            this.bot02.x = 1000;
            this.score3 += 1; 
            this.game.bot2Loc = 3; 
            this.counter03.setText(''+this.score3);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot03, this.location03)){
            this.sound.play('sfx_select');
            this.bot03.x = 1000;
            this.score3 += 1; 
            this.game.bot3Loc = 3; 
            this.counter03.setText(''+this.score3);
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot04, this.location03)){
            this.sound.play('sfx_select');
            this.bot04.x = 1000;
            this.score3 += 1; 
            this.game.bot4Loc = 3; 
            this.counter03.setText(''+this.score3);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot05, this.location03)){
            this.sound.play('sfx_select');
            this.bot05.x = 1000;
            this.score3 += 1;
            this.game.bot5Loc = 3;  
            this.counter03.setText(''+this.score3);
            
        }

        // Location 4 Check
        if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot01, this.location04)){
            this.sound.play('sfx_select');
            this.bot01.x = 1000;
            this.score4 = this.score4 + 1;
            this.game.bot1Loc = 4; 
            this.counter04.setText(''+this.score4);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot02, this.location04)){
            this.sound.play('sfx_select');
            this.bot02.x = 1000;
            this.score4 += 1; 
            this.game.bot2Loc = 4; 
            this.counter04.setText(''+this.score4);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot03, this.location04)){
            this.sound.play('sfx_select');
            this.bot03.x = 1000;
            this.score4 += 1; 
            this.game.bot3Loc = 4; 
            this.counter04.setText(''+this.score4);
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot04, this.location04)){
            this.sound.play('sfx_select');
            this.bot04.x = 1000;
            this.score4 += 1; 
            this.game.bot4Loc = 4; 
            this.counter04.setText(''+this.score4);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot05, this.location04)){
            this.sound.play('sfx_select');
            this.bot05.x = 1000;
            this.score4 += 1;
            this.game.bot5Loc = 4;  
            this.counter04.setText(''+this.score4);
            
        }

        // Location 5 Check
        if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot01, this.location05)){
            this.sound.play('sfx_select');
            this.bot01.x = 1000;
            this.score5 = this.score5 + 1; 
            this.game.bot1Loc = 5; 
            this.counter05.setText(''+this.score5);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot02, this.location05)){
            this.sound.play('sfx_select');
            this.bot02.x = 1000;
            this.score5 += 1; 
            this.game.bot2Loc = 5; 
            this.counter05.setText(''+this.score5);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot03, this.location05)){
            this.sound.play('sfx_select');
            this.bot03.x = 1000;
            this.score5 += 1; 
            this.game.bot3Loc = 5; 
            this.counter05.setText(''+this.score5);
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot04, this.location05)){
            this.sound.play('sfx_select');
            this.bot04.x = 1000;
            this.score5 += 1; 
            this.game.bot4Loc = 5; 
            this.counter05.setText(''+this.score5);
            
        }
        else if(!(game.input.mousePointer.isDown) && this.checkCollision2(this.bot05, this.location05)){
            this.sound.play('sfx_select');
            this.bot05.x = 1000;
            this.score5 += 1; 
            this.game.bot5Loc = 5; 
            this.counter05.setText(''+this.score5);
            
        }
        
        // Return to test room
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.test_music.stop();
            
            this.scene.start("menuScene"); 
        }

        // Send Drones
        if (Phaser.Input.Keyboard.JustDown(keyX) && (this.score1+this.score2+this.score3+this.score4+this.score5) == 5) {
        
            
            this.sound.play('sfx_select');
            this.game.loc1 = this.score1;
            this.game.loc2 = this.score2;
            this.game.loc3 = this.score3;
            this.game.loc4 = this.score4;
            this.game.loc5 = this.score5;
            this.scene.start("deductionScene"); 
            
        }

        // Reset Drones
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //this.test_music.stop();
            
            this.scene.start("droneScene");
        }

    }

    checkCollision(bot) {
        // simple AABB checking
        if (game.input.mousePointer.x < bot.x + bot.width && 
            game.input.mousePointer.x > bot.x && 
            game.input.mousePointer.y < bot.y + bot.height &&
            game.input.mousePointer.y > bot.y) {
                return true;
        } else {
            return false;
        }
    }

    checkCollision2(bot, spot) {
        // simple AABB checking
        if (bot.x < spot.x + spot.width && 
            bot.x > spot.x && 
            bot.y < spot.y + spot.height &&
            bot.y > spot.y) {
                return true;
        } else {
            return false;
        }
    }
}