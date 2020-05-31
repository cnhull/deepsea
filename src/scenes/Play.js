class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('testfield', './assets/img/testing.png');
        
        

       
        
        
    }

    create() {
        // Place test room background
        this.testfield = this.add.tileSprite(0, 0, 640, 480, 'testfield').setOrigin(0, 0);
        
        
        // Test room music
        var test_music;
        this.test_music = this.sound.add('sfx_test');

        // Define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
     
        // Test room title config
        let testConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#ffffff',
            color: '#240278',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 340
        }

        // Test room button config
        let buttonTestConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#000000',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 200
        }
        
        // Display test room messages
        this.testTitle = this.add.text(180, 10, 'Welcome to Project: Deep Seas', testConfig);
        //this.testGreeting = this.add.text(180, 60, '', testConfig);
        testConfig.fixedWidth = 420;
        testConfig.fontSize = '24px';
        this.testAsk = this.add.text(140, 110, 'What would you like to test?', testConfig);
        
        // Display test options
        testConfig.fixedWidth = 200;
        this.goDrone = new TextButton(this, centerX, centerY - mod, 'Drone Simulation',  game.buttonConfig, () => this.startDrone()).setOrigin(0.5);//.setStyle(menuConfig);
        //this.goDrone.alpha = 0;
        this.add.existing(this.goDrone);

        this.goLoop = new TextButton(this, centerX, centerY + mod, 'Test loop',  game.buttonConfig, () => this.startLoop()).setOrigin(0.5);//.setStyle(menuConfig);
        //this.goLoop.alpha = 0;
        this.add.existing(this.goLoop);

        //this.testDrone = this.add.text(90, 240, 'Test: Drone Drag', buttonTestConfig);
        //this.testDays = this.add.text(340, 240, 'Test: Game Loop', buttonTestConfig);

        // Display restart prompt
        buttonTestConfig.fixedWidth = 220;
        this.testDays = this.add.text(220, 400, 'Press F to Restart', buttonTestConfig);
        
        
        // Play Groovy test room track
        this.test_music.play();
        

        
    }

    startDrone(){
        this.test_music.stop();
        this.scene.start("droneScene")
    }

    startLoop(){
        console.log("inside of startloop function");
            this.test_music.stop();
            this.scene.start("day0")

        
    }

    update() {
        // Drone test check
        if (game.input.mousePointer.isDown 
            && game.input.mousePointer.x < 290
            && game.input.mousePointer.x > 90
            && game.input.mousePointer.y > 205
            && game.input.mousePointer.y < 260
            ) {
                this.test_music.stop();
                this.scene.start("droneScene")
            }
        
        // Day Loop test check
        else if (game.input.mousePointer.isDown 
                && game.input.mousePointer.x < 540
                && game.input.mousePointer.x > 340
                && game.input.mousePointer.y > 205
                && game.input.mousePointer.y < 260
                ) {
                    this.test_music.stop();
                    this.scene.start("day0")
                }
        
        
        // check key input for restart / menu
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.test_music.stop();
            
            this.scene.start("menuScene"); 
        }
    }
        
}