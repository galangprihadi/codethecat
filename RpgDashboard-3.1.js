//########################################################################
//  RpgDashboard (Gals Studio)
//
//  Version : 3.0
//  Update  : June 20, 2025
//  Info    : RPG Dashboard for Tile Based Programming
//########################################################################


class RpgDashboard {
    constructor(commandPanel = false) {
        // SVG converter : https://yoksel.github.io/url-encoder/
        this.arrowImages =[
            `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3C!-- Creator: CorelDRAW 2018 (64-Bit) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='200px' height='200px' version='1.1' style='shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd'%0AviewBox='0 0 6.84 6.84' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C!%5BCDATA%5B .fil0 %7Bfill:none%7D .fil1 %7Bfill:%23333333;fill-rule:nonzero%7D %5D%5D%3E%3C/style%3E%3C/defs%3E%3Cg id='Layer_x0020_1'%3E%3Cmetadata id='CorelCorpID_0Corel-Layer'/%3E%3Cg id='_1664750490736'%3E%3Cpath class='fil0' d='M3.42 0c-1.89,0 -3.42,1.53 -3.42,3.42 0,1.89 1.53,3.42 3.42,3.42 1.89,0 3.42,-1.53 3.42,-3.42 0,-1.89 -1.53,-3.42 -3.42,-3.42z'/%3E%3Cpath class='fil1' d='M3.59 1.89c-0.1,-0.09 -0.25,-0.09 -0.34,0l-0.99 0.99c-0.22,0.22 0.11,0.56 0.33,0.34l0.59 -0.59 0 2.15c0,0.31 0.48,0.31 0.48,0l0 -2.15 0.58 0.59c0.22,0.22 0.56,-0.12 0.34,-0.34l-0.99 -0.99z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
            `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3C!-- Creator: CorelDRAW 2018 (64-Bit) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='200px' height='200px' version='1.1' style='shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd'%0AviewBox='0 0 7.5 7.5' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C!%5BCDATA%5B .fil0 %7Bfill:none%7D .fil1 %7Bfill:%23333333;fill-rule:nonzero%7D %5D%5D%3E%3C/style%3E%3C/defs%3E%3Cg id='Layer_x0020_1'%3E%3Cmetadata id='CorelCorpID_0Corel-Layer'/%3E%3Cg id='_1664824569168'%3E%3Cpath class='fil0' d='M7.5 3.75c0,-2.07 -1.68,-3.75 -3.75,-3.75 -2.07,0 -3.75,1.68 -3.75,3.75 0,2.07 1.68,3.75 3.75,3.75 2.07,0 3.75,-1.68 3.75,-3.75z'/%3E%3Cpath class='fil1' d='M5.42 3.94c0.1,-0.11 0.1,-0.28 0,-0.38l-1.09 -1.09c-0.24,-0.24 -0.61,0.13 -0.36,0.37l0.64 0.65 -2.36 0c-0.34,0 -0.34,0.52 0,0.52l2.36 0 -0.64 0.64c-0.25,0.24 0.12,0.61 0.36,0.37l1.09 -1.08z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
            `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3C!-- Creator: CorelDRAW 2018 (64-Bit) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='200px' height='200px' version='1.1' style='shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd'%0AviewBox='0 0 8.29 8.29' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C!%5BCDATA%5B .fil0 %7Bfill:none%7D .fil1 %7Bfill:%23333333;fill-rule:nonzero%7D %5D%5D%3E%3C/style%3E%3C/defs%3E%3Cg id='Layer_x0020_1'%3E%3Cmetadata id='CorelCorpID_0Corel-Layer'/%3E%3Cg id='_1664757908192'%3E%3Cpath class='fil0' d='M4.15 8.29c-2.29,0 -4.15,-1.85 -4.15,-4.14 0,-2.29 1.86,-4.15 4.15,-4.15 2.29,0 4.14,1.86 4.14,4.15 0,2.29 -1.85,4.14 -4.14,4.14z'/%3E%3Cpath class='fil1' d='M4.36 6c-0.12,0.11 -0.31,0.11 -0.42,0l-1.2 -1.2c-0.27,-0.27 0.14,-0.68 0.41,-0.41l0.71 0.71 0 -2.61c0,-0.38 0.58,-0.38 0.58,0l0 2.61 0.71 -0.71c0.27,-0.27 0.67,0.14 0.41,0.41l-1.2 1.2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
            `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3C!-- Creator: CorelDRAW 2018 (64-Bit) --%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='200px' height='200px' version='1.1' style='shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd'%0AviewBox='0 0 9.28 9.28' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C!%5BCDATA%5B .fil0 %7Bfill:none%7D .fil1 %7Bfill:%23333333;fill-rule:nonzero%7D %5D%5D%3E%3C/style%3E%3C/defs%3E%3Cg id='Layer_x0020_1'%3E%3Cmetadata id='CorelCorpID_0Corel-Layer'/%3E%3Cg id='_1664757890304'%3E%3Cpath class='fil0' d='M0 4.64c0,2.57 2.08,4.64 4.64,4.64 2.57,0 4.64,-2.07 4.64,-4.64 0,-2.56 -2.07,-4.64 -4.64,-4.64 -2.56,0 -4.64,2.08 -4.64,4.64z'/%3E%3Cpath class='fil1' d='M2.57 4.41c-0.13,0.13 -0.13,0.34 0,0.47l1.35 1.34c0.3,0.3 0.75,-0.16 0.45,-0.46l-0.8 -0.8 2.92 0c0.43,0 0.43,-0.64 0,-0.64l-2.92 0 0.8 -0.8c0.3,-0.3 -0.15,-0.75 -0.45,-0.45l-1.35 1.34z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
        ];

        this.navigation = document.querySelector(".navigation-container");
        this.dashboard = document.querySelector(".dashboard-container");
        
        this.infoContainer = document.createElement("div");
        this.infoContainer.classList.add("info-container");
        this.dashboard.append(this.infoContainer);
        
        this.levelText = document.createElement("div");
        this.levelText.classList.add("info");
        this.infoContainer.append(this.levelText);

        this.missText = document.createElement("div");
        this.missText.classList.add("info");
        this.infoContainer.append(this.missText);

        this.timeText = document.createElement("div");
        this.timeText.classList.add("info");
        this.infoContainer.append(this.timeText);

        if (commandPanel) {
            this.commandContainer = document.createElement("div");
            this.commandContainer.classList.add("command-container");
            this.dashboard.append(this.commandContainer);
        }

        this.reload();
    }

    reload() {
        this.loadDisplay();
        this.updateCommand();
        this.buttonPlay();
    }

    loadDisplay() {
        this.levelText.textContent = "Level " + rpg.curLevel;
        this.missText.textContent = "Run: " + rpg.attempt;
    }

    loadTimer() {
        this.timeText.textContent = `${rpg.min}:${rpg.sec}`;
    }

    buttonPlay() {
        this.navigation.innerHTML = "";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        btn.addEventListener("click", () => {
            if (rpg.runLevel() == true) {
                this.navigation.innerHTML = "";
            }
        });

        this.navigation.append(btn);
    }

    buttonReset() {
        this.navigation.innerHTML = "";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>';
        //btn.style.backgroundColor = "var(--color-orange)";
        //btn.style.outline = "5px solid var(--color-orange)";
        
        btn.addEventListener("click", () => {
            rpg.resetLevel();
        });

        this.navigation.append(btn);
    }

    buttonNext() {
        this.navigation.innerHTML = "";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-forward"></i>';
        
        btn.addEventListener("click", () => {
            rpg.nextLevel();
        });

        this.navigation.append(btn);
    }

    buttonHome() {
        this.navigation.innerHTML = "";

        const btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-house"></i>';
        
        btn.addEventListener("click", () => {
            rpg.backToHome();
        });

        this.navigation.append(btn);
    }

    updateCommand() {
        const commandCircles = document.querySelectorAll(".circle");

        if (this.commandContainer) {
            this.commandContainer.innerHTML = "";
        }

        for (let i=0; i < rpg.commandLength; i++) {
            const command = document.createElement("div");
            command.classList.add("command");

            switch (rpg.inputCommand[i]) {
                case "up"    : command.innerHTML = '<i class="fa-solid fa-arrow-up"></i>'; break;
                case "right" : command.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'; break;
                case "down"  : command.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'; break;
                case "left"  : command.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'; break;
                default      : command.innerHTML = "";
            }
            
            if (this.commandContainer) {
                this.commandContainer.append(command);
            }

            if (commandCircles[i]) {
                switch (rpg.inputCommand[i]) {
                    case "up"    : commandCircles[i].style.backgroundImage = this.arrowImages[0]; break;
                    case "right" : commandCircles[i].style.backgroundImage = this.arrowImages[1]; break;
                    case "down"  : commandCircles[i].style.backgroundImage = this.arrowImages[2]; break;
                    case "left"  : commandCircles[i].style.backgroundImage = this.arrowImages[3]; break;
                    default      : commandCircles[i].style.backgroundImage = "none";
                }
            }
        }
            
    }

    runCommand() {
        if (rpg.inputCommand[rpg.commandItr]) {
            const commandCircles = document.querySelectorAll(".circle");
            commandCircles[rpg.commandItr].style.backgroundColor = "var(--color-orange)";

            if (this.commandContainer) {
                const commands = document.querySelectorAll(".command");
                commands[rpg.commandItr].style.backgroundColor = "var(--color-red)";
            }            
        }
        
        rpg.commandItr += 1;
    }
}
