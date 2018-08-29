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
var labelList = [p1,p2,p3,p4,p5,p6];


var colors = getRandomColors();//Colors contains a list of arrays of length 3. The array represent an rgb color.
var winningColor = colors[getWinningNumber(6)];//winning number picks which of the 3 or 6 (depends on easy or hard) is the winning number
redValue.textContent = winningColor[0];//since winner color is an array of 3 integers. The 'r' in rgb is the first value of the array
greenValue.textContent = winningColor[1];
blueValue.textContent = winningColor[2];
setColors(colors);//visually sets the colors




newGameButton.addEventListener("click", function(){
    colors = getRandomColors();
    winningColor = colors[getWinningNumber(6)];
    redValue.textContent = winningColor[0];
    greenValue.textContent = winningColor[1];
    blueValue.textContent = winningColor[2];
    setColors(colors);//visually sets the colors
});

//Returns a list of colors. The number of colors depends on if easy (0) or hard(1) mode was selected. Each color is an array the the form RGB (0-255,0-255,0-255) inclusive.
function getRandomColors() {
    var masterList = [];
    for (let i = 0; i < 6; i++) {
        var rgbList = [];
        for (let j = 0; j < 3; j++) {
            rgbList.push(Math.floor(Math.random() * Math.floor(256)));
        }
        masterList.push(rgbList);
    }

    return masterList;
}

//Sets all the colors to their corresponding values 
function setColors(rgbList,winningNumber) {
    this.rgbList = rgbList;
    var color = "";
    for (let i = 0; i < 6; i++) {
        var curr = rgbList[i];
        color = "rgb(" + curr.shift() + "," + curr.shift() + "," + curr.shift() +")";
        labelList[i].textContent = color;
    }
}

//This function picks what positon the winning color will be.
function getWinningNumber(maxColors) {
    return Math.floor(Math.random() * Math.floor(maxColors));
}