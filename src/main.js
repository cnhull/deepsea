/* Deepsea
// John D. Duncan
// CMPM 120
*/ 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    day_count : 1,
   
    scene: [ Menu, Play, Drone, Days, Analysis, Talking, Day0]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {

}

const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
const mod = 32;

let cursors = null;

 game.buttonConfig = {
    fontFamily: 'Courier',
    fontSize: '24px',
    strokeThickness: 1,
    //backgroundColor: '#F3B141',
    color: '#FFFFFF',
    //align: 'right',
    fixedWidth: 0
}

let fun = function(){
    console.log("hewwooo?? misteww obama???");
}

game.dec = new Set();


// reserve keyboard vars
let keyF, keyX, keyLEFT, keyRIGHT, keyDOWN, keyUP, keySPACE;

