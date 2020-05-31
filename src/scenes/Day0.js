class Day0 extends Phaser.Scene {
    constructor() {
        super("day0");
    }

    preload() {
        // Preloading Images For Day
        this.load.image('toby', './assets/img/toby.png'); // Toby Weaver UI Screen
        this.load.image('geneva', './assets/img/geneva.png'); // Geneva Roy UI Screen
        this.load.image('UI', './assets/img/UI_frame.png'); // Blank UI Screen
        this.load.audio('sfx_select', './assets/sfx/blip_select12.wav'); // Text Chamge Sound Effect

        

    }



    create() {

        console.log("in day0");
        

        // Text Configuration For Talking 
        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            //backgroundColor: '#000000',
            color: '#000000',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500
        }
        // Text Configuration For Advancement Text
        let nextConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            //backgroundColor: '#000000',
            color: '#000000',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500
        }
        // Button Configuration
        let buttonConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            backgroundColor: '#000000',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 325
        }
        
        // Loading Needed Key Functions
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Dayfield Is The Main Background of the Scene, Usually One of the Three UI(toby, Roy, Blank)
        if(this.game.day_count == 1){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'toby').setOrigin(0, 0);
        }else{
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'geneva').setOrigin(0, 0);
        }

        // Controls Fadeout/Fadein of the Images
        this.cameras.main.once('camerafadeincomplete', function (camera) {

            //camera.fadeOut(2000);
        });
        this.cameras.main.fadeIn(2500);

        // Day 1 Intro(toby)
        this.intro1 = this.add.text(120, 260, '*BZZZ BZZZ BZZZ BZZZ* \nSomeone is calling you!', textConfig);
        // Advancement Text
        this.chatAdv = this.add.text(180, 340, 'Press -Space- to Continue!', textConfig);

        // chatText Keeps Track of Where in the Day's Dialog/Sequence you are
        var chatText;
        this.chatText = -2;
        
    }


    update() {
        
        // Restart Game(Used For Testing)
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start("menuScene"); 
        }

        // Space Advances the Dialog For Now
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            if(this.game.day_count == 1){
                
                if(this.chatText == -2){
                
                  this.chatText += 1;
                  this.sound.play('sfx_select');
                   this.intro1.setText('The caller ID reads T. WEAVER. Tobias Weaver, \nhead researcher of your department at the \nagency. Roy calls him unfocused...');
                }
                else if(this.chatText == -1){
                    
                    this.chatText += 1;
                    this.sound.play('sfx_select');
                    this.intro1.setText('Toby: Hello, Dr. Ingram! I hope you are \nwell. Hopefully you have recieved the new \ndrones that the agency has sent to assist \nyou with your research.');
                }
                else if(this.chatText == 0){
                    
                    this.chatText += 1;
                    this.sound.play('sfx_select');
                    this.intro1.setText('Toby: We have sent you 10 drones, but, \nunfortunately, sent only 5 chargers for \nthem. This means you can use 5 drones \nper day while you analyze any data past \nretrieved by the other units.');
                }

                else if(this.chatText == 1){
                    
                    this.chatText += 1;
                    this.sound.play('sfx_select');
                    this.intro1.setText('Toby: Remember to report all useful data \npertaining to your research to the agency. \nGeneva will want results fast and won\'t \nbe fond of any off  course data entries!');
                }

                else if(this.chatText == 2){
                    this.chatText += 1;
                    this.sound.play('sfx_select');
                    this.intro1.setText('Toby: But Ingram... if you do, by chance, \nfind anything unique down there, make sure \nto let me know. What Geneva Roy doesn\'t \nknow won\'t hurt her! ');
                }
                else if(this.chatText == 3){
                    this.chatText += 1;
                    this.sound.play('sfx_select');
                    this.intro1.setText('Good Luck, Doctor Ingram!');
                } 
                else if(this.chatText == 4){
                    console.log('1x'+this.game.day_count);
                    this.cameras.main.fadeOut(2000);
                    
                    console.log('2x'+this.game.day_count);
                    this.scene.start("dayScene");
                                        
                } 
            }
        }
    }
}