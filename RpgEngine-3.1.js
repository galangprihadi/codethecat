//########################################################################
//  RpgEngine (Gals Studio)
//
//  Version : 3.1
//  Update  : June 25, 2025
//
//  HTML setting :
    /*
    <!-- GAME PANEL -->
    <div class="game-container"><canvas class="game-canvas"></canvas></div>

    <!-- CONTROL PANEL -->
    <div class="control-wrap"></div>

    <!-- DASHBOARD PANEL -->
    <div class="dashboard-container"></div>

    <!-- NAVIGATION PANEL -->
    <div class="navigation-container"></div>

    <script src="RpgEngine-2.0.js"></script>
    <script src="RpgInput-2.0.js"></script>
    <script src="RpgDashboard-2.0.js"></script>
    <script src="GameSetting.js"></script>
    */
//########################################################################


// ================================================================================= rpg (Main Data)

const rpg = {
    // Classes
    gameEngine : undefined,
    gameCanvas : undefined,
    gameCtx : undefined,
    gameWorld : undefined,
    gameInput : undefined,
    gameDashboard : undefined,

    // Sounds
    btnSound : new Audio("sounds/button.mp3"),
    tapSound : new Audio("sounds/tap.mp3"),
    goalSound : new Audio("sounds/correct.mp3"),
    successSound : new Audio("sounds/win.mp3"),
    failedSound : new Audio("sounds/wrong.mp3"),

    // Game Attributes
    tileSize : 0,
    tileWidth : 0,
    tileHeight : 0,
    moveDelay : 0,
    curLevel : undefined,

    // Level Attributes
    player: undefined,
    goals: {},
    obstacles: {},
    isWalking : false,
    commandLength: undefined,
    goalTarget: 0,
    attempt: 0,
    inputCommand: [],
    commandItr: 0,

    // Timer
    startTime: Date.now(),
    min: 0,
    sec: 0,
    timerInterval: undefined,

    //Functions
    toUnit (n) {
        return n * this.tileSize;
    },

    getGameSet (level) {
        if (level) {
            return gameSet[`level${level}`];
        }
        else {
            return gameSet[`level${this.curLevel}`];
        }
    },

    runLevel () {
        if (this.inputCommand.filter(Boolean).length) {
            this.btnSound.currentTime = 0;
            this.btnSound.play();

            this.attempt += 1;
            this.isWalking = true;
            this.gameDashboard.loadDisplay();

            return true;
        }
        else {
            return false;
        }
    },

    resetLevel () {
        this.btnSound.currentTime = 0;
        this.btnSound.play();

        this.gameWorld.reload(this.getGameSet());
        this.gameInput.reload();
        this.gameDashboard.reload();
    },

    nextLevel () {
        this.btnSound.currentTime = 0;
        this.btnSound.play();

        this.curLevel += 1;

        if (this.getGameSet()) {
            this.attempt = 0;
            this.gameWorld.reload(this.getGameSet());
            this.gameInput.reload();
            this.gameDashboard.reload();
            this.startTime = Date.now();
            this.timerInterval = setInterval(() => this.timerCount(), 100);
        }
        else {
            this.curLevel -= 1;
        }
    },

    timerCount() {
        const currentTime = Date.now() - this.startTime;
        this.min = Math.floor((currentTime / (1000 * 60)) % 60);
        this.sec = Math.floor((currentTime / 1000) % 60);

        this.min = String(this.min).padStart(2, '0');
        this.sec = String(this.sec).padStart(2, '0');

        this.gameDashboard.loadTimer();
    },

    fullScreen() {
        this.btnSound.currentTime = 0;
        this.btnSound.play();

        const targetElement = document.documentElement;

        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            if (targetElement.requestFullscreen) {  //Standard
                targetElement.requestFullscreen();
            } else if (targetElement.webkitRequestFullscreen) { // Safari
                targetElement.webkitRequestFullscreen();
            } else if (targetElement.mozRequestFullScreen) { // Firefox
                targetElement.mozRequestFullScreen();
            } else if (targetElement.msRequestFullscreen) { // IE/Edge
                targetElement.msRequestFullscreen();
            }

            document.body.style.marginTop = "50px";
            document.querySelector(".game-container").style.top = "50px";
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

            document.body.style.marginTop = "20px";
            document.querySelector(".game-container").style.top = "20px";
        }
    },

    backToHome() {
        this.btnSound.currentTime = 0;
        this.btnSound.play();

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
};


// ================================================================================= RpgEngine Class (Main Class)

class RpgEngine {
    constructor () {
        rpg.gameEngine = document.querySelector(".game-container");
        rpg.gameCanvas = rpg.gameEngine.querySelector(".game-canvas");
        rpg.gameCtx = rpg.gameCanvas?.getContext("2d");

        rpg.tileSize = gameSet.tileSize || 32;
        rpg.tileWidth = gameSet.tileWidth || 5;
        rpg.tileHeight = gameSet.tileHeight || 5;
        rpg.moveDelay = gameSet.moveDelay || 10;

        rpg.gameEngine.style.width = (rpg.tileWidth + 1) * rpg.tileSize + "px";
        rpg.gameEngine.style.height = (rpg.tileHeight + 1) * rpg.tileSize + "px";
        rpg.gameCanvas.width = (rpg.tileWidth + 1) * rpg.tileSize;
        rpg.gameCanvas.height = (rpg.tileHeight + 1) * rpg.tileSize;

        rpg.curLevel = 1;
        
        rpg.gameWorld = new GameWorld(rpg.getGameSet());

        rpg.timerInterval = setInterval(() => rpg.timerCount(), 100);

        this.GameLoop();

        //console.log(localStorage.getItem("playerData"));
    }

    GameLoop () {
        const step = () => {
            rpg.gameWorld.drawGameWorld();

            requestAnimationFrame(()=>{
                step();
            });
        }

        step();
    }
}


// ================================================================================= GameWorld Class

class GameWorld {
    constructor (gwData) {
        this.mapImage = new Image();
        this.reload(gwData);
    }

    reload(gwData) {
        this.mapImage.src = gwData.mapImage;
        
        rpg.player = new Player(gwData.player);
        
        rpg.goals = {};
        Object.entries(gwData.goals).forEach(([key, value]) => {
            rpg.goals[key] = new GameObject(value);
        });

        rpg.obstacles = {};
        Object.entries(gwData.obstacles).forEach(([key, value]) => {
            rpg.obstacles[key] = new GameObject(value);
        });

        rpg.isWalking = false;
        rpg.commandLength = gwData.commandLength;
        rpg.goalTarget = Object.keys(gwData.goals).length;
        rpg.inputCommand = [];
        rpg.commandItr = 0;
    }

    drawGameWorld () {
        rpg.gameCtx.clearRect(0, 0, rpg.gameCanvas.width, rpg.gameCanvas.height);

        // Draw Map
        rpg.gameCtx.drawImage(this.mapImage, 0, 0);

        // Draw Goals
        Object.entries(rpg.goals).forEach(([key, value]) => {
            value.sprite.draw();
            
            // Game Over Check
            if (rpg.player.x == value.x && rpg.player.y == value.y) {
                rpg.goalSound.play();
                
                rpg.goalTarget -= 1;
                delete rpg.goals[key];

                if (rpg.goalTarget == 0) {
                    rpg.isWalking = false;
                    clearInterval(rpg.timerInterval);
                }
            }
        });

        // Draw Obstacles
        Object.entries(rpg.obstacles).forEach(([key, value]) => {
            value.sprite.draw();
        });

        // Draw Player
        rpg.player.update();
    }
    
}


// ================================================================================= Player Class

class Player {
    constructor (pData) {
        this.x = rpg.toUnit(pData.x) || rpg.toUnit(1);
        this.y = rpg.toUnit(pData.y) || rpg.toUnit(1);
        this.direction = pData.direction || "down";

        this.movingProgress = 0;
        this.movingDelay = 0;

        this.sprite = new Sprite({
            gameObject: this,
            image: pData.image || "/images/sprites/cat.png",
            aniCycle: 2
        });

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1]
        }
    }

    update () {
        if (rpg.isWalking && rpg.commandItr < rpg.commandLength) {
            if (this.movingDelay == 0) {
                if (rpg.inputCommand[rpg.commandItr]) {
                    this.movingProgress = rpg.tileSize;
                    this.movingDelay = rpg.moveDelay;
                }
                else {
                    this.movingProgress = 0;
                    this.movingDelay = rpg.moveDelay;
                }

                this.direction = rpg.inputCommand[rpg.commandItr];
                rpg.gameDashboard.runCommand();
            }
        }
        else if (this.movingDelay == 1) {
            this.direction = "down";

            if (rpg.goalTarget == 0) {
                rpg.successSound.play();

                if (rpg.getGameSet(rpg.curLevel + 1)) {
                    rpg.gameDashboard.buttonNext();
                }
                else {
                    rpg.gameDashboard.buttonHome();
                }
                
            }
            else {
                rpg.failedSound.play();
                rpg.gameDashboard.buttonReset();
            }
        }

        // Update Position
        if (this.movingProgress > 0) {
            if (!this.isBlocked(this.direction) && this.direction != null) {
                const [property, change] = this.directionUpdate[this.direction];
                this[property] += change;
            }
            
            this.movingProgress -= 1;
        }
        else if (this.movingDelay > 0) {
            this.movingDelay -= 1;
        }

        // Update Sprite
        if (this.direction != null) {
            if (this.movingProgress == 0) {
                this.sprite.setAnimation("idle-" + this.direction);
            }
            else {
                this.sprite.setAnimation("walk-" + this.direction);
            }
        }

        this.sprite.draw();
        
    }

    isBlocked (direction) {
        let nextX = this.x;
        let nextY = this.y;
        let checkValue = false;

        switch (direction) {
            case "up"   : nextY -= rpg.tileSize; break;
            case "down" : nextY += rpg.tileSize; break;
            case "left" : nextX -= rpg.tileSize; break;
            case "right": nextX += rpg.tileSize; break;
        }

        // Wall Check
        if (nextX <= 0 || nextX >= (rpg.tileWidth + 1) * rpg.tileSize) {
            checkValue = true;
        }
        else if (nextY <= 0 || nextY >= (rpg.tileHeight + 1) * rpg.tileSize) {
            checkValue = true;
        }

        // Obstacles Check
        Object.values(rpg.obstacles).forEach(value => {
            if (value.x == nextX && value.y == nextY) {
                checkValue = true;
            }
        });

        return checkValue;
    }
}


// ================================================================================= GameObject Class (for goals or obstacles)

class GameObject {
    constructor (goData) {
        this.x = rpg.toUnit(goData.x) || toUnit(1);
        this.y = rpg.toUnit(goData.y) || toUnit(1);

        this.sprite = new Sprite({
            gameObject: this,
            image: goData.image || "/images/sprites/fish1.png",
            aniCycle: 8
        });
    }
}


// ================================================================================= Sprite Class (Draw Handling)

class Sprite {
    constructor (sData) {
        this.image = new Image();
        this.image.src = sData.image;
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.animations = {
            "idle-down" : [ [0,0] ],
            "idle-right": [ [0,1] ],
            "idle-up"   : [ [0,2] ],
            "idle-left" : [ [0,3] ],
            "walk-down" : [ [1,0], [2,0], [3,0], [4,0], [5,0] ],    // keyFrame: "idle-down"  |  frame: [1,0], [2,0], [3,0], [0,0]
            "walk-right": [ [1,1], [2,1], [3,1], [4,1], [5,1] ],
            "walk-up"   : [ [1,2], [2,2], [3,2], [4,2], [5,2] ],
            "walk-left" : [ [1,3], [2,3], [3,3], [4,3], [5,3] ],
        };

        this.curAni = "walk-down";
        this.curFrame = 0;
        this.aniCycle = sData.aniCycle || 8;
        this.aniProgress = this.aniCycle;
        this.gameObject = sData.gameObject;
    }

    setAnimation (keyFrame) {
        if (this.curAni !== keyFrame) {
            this.curAni = keyFrame;
            this.curFrame = 0;
            this.aniProgress = this.aniCycle;
        }
    }

    getFrame () {
        return this.animations[this.curAni][this.curFrame];
    }

    draw () {
        const x = this.gameObject.x - rpg.tileSize/2;
        const y = this.gameObject.y - rpg.tileSize/2;
        const [frameX, frameY] = this.getFrame();

        this.isLoaded && rpg.gameCtx.drawImage(
            this.image,
            frameX * rpg.tileSize, frameY * rpg.tileSize,
            rpg.tileSize, rpg.tileSize,
            x, y,
            rpg.tileSize, rpg.tileSize
        );

        if (this.aniProgress > 0) {
            this.aniProgress -= 1;
        }
        else {
            this.aniProgress = this.aniCycle;
            this.curFrame += 1;

            if (this.getFrame() === undefined) {
                this.curFrame = 0;
            }
        }
    }
}
