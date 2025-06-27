//########################################################################
//  RpgInput (Gals Studio)
//
//  Version : 3.1
//  Update  : June 25, 2025
//  Info    : RPG input for Tile Based Programming
//            - Separated panel
//########################################################################


class RpgInput {
    constructor() {
        this.inputType = 0;

        this.wrap = document.querySelector(".control-wrap");
        this.reload();
    }

    reload() {
        rpg.inputCommand = Array(rpg.commandLength).fill(null);

        this.showInput();

        switch (this.inputType) {
            case 0: this.tapInput(); break;
            case 1: this.scrollInput(); break;
            case 2: this.flickInput(); break;
            case 3: this.tagInput(); break;
        }
    }

    showInput() {
        if (rpg.getGameSet(rpg.curLevel).inputType != undefined) {
            this.inputType = rpg.getGameSet(rpg.curLevel).inputType;

            const typeButtons = document.querySelector(".menu-container").querySelectorAll("button");

            for (let i=0; i < 4; i++) {
                if (i == this.inputType) {
                    typeButtons[i].classList.add("active");
                    typeButtons[i].style.display = "flex";
                }
                else {
                    typeButtons[i].classList.remove("active");
                    typeButtons[i].style.display = "none";
                }
            }
        }
    }

    setInput(typeNum) {
        rpg.btnSound.currentTime = 0;
        rpg.btnSound.play();

        this.inputType = typeNum;
        this.reload();

        const typeButtons = document.querySelector(".menu-container").querySelectorAll("button");

        typeButtons.forEach((element, index) => {
            if (index == typeNum) {
                element.classList.add("active");
            }
            else {
                element.classList.remove("active");
            }
        });
    }


    // ======================================================================= KEYBOARD

    keyboardInput() {
        document.addEventListener("keydown", e => {
            if (!rpg.isWalking) {
                switch (e.code) {
                    case "ArrowUp":
                        rpg.inputCommand[rpg.inputCommand.filter(Boolean).length] = "up";
                        break;
                    case "ArrowRight":
                        rpg.inputCommand[rpg.inputCommand.filter(Boolean).length] = "right";
                        break;
                    case "ArrowDown":
                        rpg.inputCommand[rpg.inputCommand.filter(Boolean).length] = "down";
                        break;
                    case "ArrowLeft":
                        rpg.inputCommand[rpg.inputCommand.filter(Boolean).length] = "left";
                        break;
                    case "Space":
                        rpg.isWalking = true;
                }

                rpg.inputCommand = rpg.inputCommand.slice(-rpg.commandLength);
                
            }
            else if (e.code === "KeyR") {
                rpg.resetLevel();
            }

            rpg.gameDashboard.updateCommand();
        });
    }


    // ======================================================================= TAG

    tagInput() {
        this.wrap.innerHTML = "";

        const panel = document.createElement("div");
        panel.classList.add("tag-container");
        this.wrap.append(panel);

        for (let i=0; i < rpg.commandLength; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            panel.append(circle);

            for (let j=0; j < 5; j++) {
                const btn = document.createElement("div");
                btn.classList.add("button");
                btn.classList.add(`btn${j}`);

                btn.addEventListener("touchstart", () => {
                //btn.addEventListener("click", () => {
                    if (!rpg.isWalking && rpg.goalTarget != 0) {
                        rpg.tapSound.currentTime = 0;
                        rpg.tapSound.play();

                        switch (j) {
                            case 0: rpg.inputCommand[i] = "up"; break;
                            case 1: rpg.inputCommand[i] = "left"; break;
                            case 2: rpg.inputCommand[i] = null; break;
                            case 3: rpg.inputCommand[i] = "right"; break;
                            case 4: rpg.inputCommand[i] = "down"; break;
                        }

                        rpg.gameDashboard.updateCommand();
                    }
                });

                circle.append(btn);
            }
        }
    }


    // ======================================================================= FLICK

    flickInput() {
        this.wrap.innerHTML = "";

        const panel = document.createElement("div");
        panel.classList.add("flick-container");
        this.wrap.append(panel);

        const circles = [];
        
        for (let i=0; i < rpg.commandLength; i++) {
            circles[i] = document.createElement("div");
            circles[i].classList.add("circle");
            panel.append(circles[i]);

            // Center Button
            const btnMain = document.createElement("div");
            btnMain.classList.add("button");

            btnMain.addEventListener("click", () => {
                if (!rpg.isWalking && rpg.goalTarget != 0) {
                    circles.forEach((element, index) => {
                        if (index == i){
                            element.classList.toggle("active");
                        }
                        else {
                            element.classList.remove("active");
                            element.querySelector(".button").innerHTML = "";
                        }
                    });

                    if (circles[i].classList.contains("active")) {
                        btnMain.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                    }
                    else {
                        rpg.tapSound.currentTime = 0;
                        rpg.tapSound.play();
                        btnMain.innerHTML = "";
                    }

                    rpg.inputCommand[i] = null;

                    rpg.gameDashboard.updateCommand();
                }
            });

            circles[i].append(btnMain);

            // Arrows Button
            for (let j=0; j < 4; j++) {
                const btn = document.createElement("div");
                btn.classList.add("button");
                btn.classList.add(`btn${j}`);

                switch (j) {
                    case 0 : btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>'; break;
                    case 1 : btn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'; break;
                    case 2 : btn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'; break;
                    case 3 : btn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'; break;
                }

                btn.addEventListener("click", () => {
                    if (!rpg.isWalking && rpg.goalTarget != 0) {
                        rpg.tapSound.currentTime = 0;
                        rpg.tapSound.play();

                        switch (j) {
                            case 0: rpg.inputCommand[i] = "up"; break;
                            case 1: rpg.inputCommand[i] = "right"; break;
                            case 2: rpg.inputCommand[i] = "down"; break;
                            case 3: rpg.inputCommand[i] = "left"; break;
                        }

                        rpg.gameDashboard.updateCommand();
                    }

                    btnMain.innerHTML = "";
                    circles[i].classList.toggle("active");
                });

                circles[i].append(btn);
            }
        }
    }


    // ======================================================================= SCROLL

    scrollInput() {
        this.wrap.innerHTML = "";

        const panel = document.createElement("div");
        panel.classList.add("scroll-container");
        this.wrap.append(panel);

        for (let i=0; i < rpg.commandLength; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            panel.append(circle);

            let arrowIndex = 0;

            function setArrow(index) {
                if (arrowIndex > 4) {
                    arrowIndex = 0;
                }
                else if (arrowIndex < 0) {
                    arrowIndex = 4;
                }

                switch (arrowIndex) {
                    case 0: rpg.inputCommand[i] = null; break;
                    case 1: rpg.inputCommand[i] = "up"; break;
                    case 2: rpg.inputCommand[i] = "right"; break;
                    case 3: rpg.inputCommand[i] = "down"; break;
                    case 4: rpg.inputCommand[i] = "left"; break;
                }

                rpg.gameDashboard.updateCommand();
            }

            // Button Up
            const btnUp = document.createElement("div");
            btnUp.classList.add("btnUp");
            btnUp.innerHTML = '<i class="fa-solid fa-caret-up"></i>';

            btnUp.addEventListener("click", () => {
                if (!rpg.isWalking && rpg.goalTarget != 0) {
                    rpg.tapSound.currentTime = 0;
                    rpg.tapSound.play();

                    arrowIndex += 1;
                    setArrow();
                }
            });

            // Button Down
            const btnDown = document.createElement("div");
            btnDown.classList.add("btnDown");
            btnDown.innerHTML = '<i class="fa-solid fa-caret-down"></i>';

            btnDown.addEventListener("click", () => {
                if (!rpg.isWalking && rpg.goalTarget != 0) {
                    rpg.tapSound.currentTime = 0;
                    rpg.tapSound.play();

                    arrowIndex -= 1;
                    setArrow();
                }
            });

            circle.append(btnUp);
            circle.append(btnDown);
        }
    }


    // ======================================================================= TAP

    tapInput() {
        this.wrap.innerHTML = "";

        const panel = document.createElement("div");
        panel.classList.add("tap-container");
        this.wrap.append(panel);

        for (let i=0; i < rpg.commandLength; i++) {
            let arrowIndex = 0;

            const circle = document.createElement("div");
            circle.classList.add("circle");

            circle.addEventListener("click", (event) => {
                if (!rpg.isWalking && rpg.goalTarget != 0) {
                    rpg.tapSound.currentTime = 0;
                    rpg.tapSound.play();
                    
                    arrowIndex += 1;

                    if (arrowIndex > 4) {
                        arrowIndex = 0;
                    }

                    switch (arrowIndex) {
                        case 0: rpg.inputCommand[i] = null; break;
                        case 1: rpg.inputCommand[i] = "up"; break;
                        case 2: rpg.inputCommand[i] = "right"; break;
                        case 3: rpg.inputCommand[i] = "down"; break;
                        case 4: rpg.inputCommand[i] = "left"; break;
                    }

                    rpg.gameDashboard.updateCommand();
                }
            });

            panel.append(circle);
        }
    }
}