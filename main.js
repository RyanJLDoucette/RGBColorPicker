//The following variables are references to the 6 available blocks of colors. If easy mode is slected only 3 are visible.
var p1 = document.querySelector("#color1");
var p2 = document.querySelector("#color2");
var p3 = document.querySelector("#color3");
var p4 = document.querySelector("#color4");
var p5 = document.querySelector("#color5");
var p6 = document.querySelector("#color6");
var redValue = document.querySelector("#red_value");
var greenValue = document.querySelector("#green_value");
var blueValue = document.querySelector("#blue_value");
var newGameButton = document.querySelector("#new_colors");
var easyModeButton = document.querySelector("#easy");
var hardModeButton = document.querySelector("#hard");
var labelList = [p1, p2, p3, p4, p5, p6];
var totalColors = 6;//Two game modes. Easy and hard. Easy has 3 colors, and hard has 6 colors. Hard is default, but if easy button is clicked, then the number of colors to choose from goes to 3
var gameOver = false;

var colors = getRandomColors(totalColors);//Colors contains a list of arrays of length 3. The array represent an rgb color.
var winningColor = colors[getWinningNumber(totalColors)];//winning number picks which of the 3 or 6 (depends on easy or hard) is the winning number
redValue.textContent = winningColor[0];//since winner color is an array of 3 integers. The 'r' in rgb is the first value of the array
greenValue.textContent = winningColor[1];
blueValue.textContent = winningColor[2];
setColors(colors, totalColors);//visually sets the colors


//if the game mode is already easy. Then this button should not do anything, it should be already disabled. Otherwise start a new easy game
easyModeButton.addEventListener("click", function () {
    if (totalColors == 3) {
        //do nothing
    }
    else {
        //start a new game
        totalColors = 3;
        newGame();
    }
});

//if the game mode is already hard. Then this button should not do anything, it should be already disabled. Otherwise start a new hard game
hardModeButton.addEventListener("click", function () {
    if (totalColors == 6) {
        //do nothing
    }
    else {
        //start a new game
        totalColors = 6;
        newGame();
    }
});

for (let i = 0; i < labelList.length; i++) {
    if (!gameOver) {
        console.log(gameOver);
        labelList[i].addEventListener("click", function () {
            labelList[i].classList.add("hidden");
            console.log(colors[i][0]);
            console.log(redValue.textContent);
            var p = document.querySelector("#message");
            if (colors[i][0] == redValue.textContent && colors[i][1] == greenValue.textContent && colors[i][2] == blueValue.textContent) {
                p.textContent = "YOU WIN";
                gameOver = true;
            }
            else {
                p.textContent = "WRONG TRY AGAIN";
            }
        });
    }
}

newGameButton.addEventListener("click", newGame);

function newGame() {
    gameOver = false;
    var p = document.querySelector("#message");
    p.textContent = "";
    //unhide all of the elements   
    for (let i = 0; i < 6; i++) {
        var block = labelList[i];
        block.classList.remove("hidden");
    }
    colors = getRandomColors(totalColors);
    winningColor = colors[getWinningNumber(totalColors)];
    redValue.textContent = winningColor[0];
    greenValue.textContent = winningColor[1];
    blueValue.textContent = winningColor[2];
    setColors(colors, totalColors);//visually sets the colors
}

//Returns a list of colors. Each color is an array the the form RGB (0-255,0-255,0-255) inclusive.
function getRandomColors(totalColors) {
    var masterList = [];
    for (let i = 0; i < totalColors; i++) {
        var rgbList = [];
        for (let j = 0; j < 3; j++) {
            rgbList.push(Math.floor(Math.random() * Math.floor(256)));
        }
        masterList.push(rgbList);
    }

    return masterList;
}

//Sets all the colors to their corresponding values 
function setColors(rgbList, totalColors) {
    var color = "";
    for (let i = 0; i < totalColors; i++) {
        var curr = rgbList[i];
        color = "rgb(" + curr[0] + ", " + curr[1] + ", " + curr[2] + ")";
        labelList[i].style.background = color;
    }
    if (totalColors == 3) {
        for (let i = 3; i < 6; i++) {
            labelList[i].classList.add(".hidden");
        }
    }
}

//This function picks what positon the winning color will be.
function getWinningNumber(maxColors) {
    return Math.floor(Math.random() * Math.floor(maxColors));
}