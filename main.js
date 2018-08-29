var p1 = document.querySelector("#color1");
var p2 = document.querySelector("#color2");
var p3 = document.querySelector("#color3");
var p4 = document.querySelector("#color4");
var p5 = document.querySelector("#color5");
var p6 = document.querySelector("#color6");
var labelList = [p1,p2,p3,p4,p5,p6];

//Returns a list of colors. The number of colors depends on if easy (0) or hard(1) mode was selected. Each color is an array the the form RGB (0-255,0-255,0-255) inclusive.
var test = getRandomColors();
var winningNumber = getWinningNumber(6);
setColors(test);

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
        color = "rgb(" + curr.pop() + "," + curr.pop() + "," + curr.pop() +")";
        labelList[i].textContent = color;
    }
}

//This function picks what positon the winning color will be.
function getWinningNumber(maxColors) {
    return Math.floor(Math.random() * Math.floor(maxColors));
}