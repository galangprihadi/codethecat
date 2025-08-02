document.addEventListener('DOMContentLoaded', () => {
    const btnSound = new Audio("sounds/tap.mp3");
    const btnPlay = new Audio("sounds/button.mp3");

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    let genderType = "";
    let gameType = "";

    const radioGender = document.querySelectorAll('.radio-gender .radio-box input[type="radio"]');
    const radioGenderBox = document.querySelectorAll('.radio-gender .radio-box');

    const radioGame = document.querySelectorAll('.radio-game .radio-box input[type="radio"]');
    const radioGameBox = document.querySelectorAll('.radio-game .radio-box');

    const startButton = document.getElementById("startButton");


    radioGender.forEach(input => {
        input.checked = false;

        input.addEventListener('change', () => {
            btnSound.currentTime = 0;
            btnSound.play();

            radioGenderBox.forEach(box => {
                box.classList.remove("selected");
            });

            if (input.checked) {
                input.parentElement.classList.add('selected');
                genderType = input.value;
            }
        });
    });

    radioGame.forEach(input => {
        input.checked = false;

        input.addEventListener('change', () => {
            btnSound.currentTime = 0;
            btnSound.play();
            
            radioGameBox.forEach(box => {
                box.classList.remove('selected');
            });

            if (input.checked) {
                input.parentElement.classList.add('selected');
                gameType = input.value;
            }
        });
    });

    startButton.addEventListener("click", () => {
        // if (name.value && age.value && genderType != "" && gameType != "") {

        //     const playerData = `${name.value}|${age.value}|${genderType}|${gameType}`;
        //     localStorage.setItem("playerData", playerData);

        //     btnPlay.currentTime = 0;
        //     btnPlay.play();
            
        //     if (gameType === "groupA") {
        //         setTimeout(()=>{
        //             window.location.href = "groupA.html";
        //         }, 1000);
        //     }
        //     else if (gameType === "groupB") {
        //         setTimeout(()=>{
        //             window.location.href = "groupB.html";
        //         }, 1000);
        //     }
        //     else if (gameType === "free") {
        //         setTimeout(()=>{
        //             window.location.href = "game.html";
        //         }, 1000);
        //     }
        // }

        window.location.href = "game.html";
    });
});