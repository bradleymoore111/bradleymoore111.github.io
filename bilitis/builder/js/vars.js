console.log("Initializing local variables.");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



// var worldInf = document.getElementById("world-information");
// var playerInf = document.getElementById("player-information");

var selectedElement;

var lastMouseX;
var lastMouseY;

var itemsLoaded = 0;
var oldElementAdd;
var oldElementMod;
var oldID;
var todo=false;

var mouseX = 0;
var mouseY = 0;

var currentBackground = (14*Math.random())|0; // Eventually each level will have a specific background

var d = new Date();
var startingTime = d.getTime();

var currentTime = startingTime - d.getTime();

document.cookie="username=John Smith; expires=Thu, 18 Dec 2016 12:00:00 UTC";

var x = document.cookie;
console.log(x);

var width = 1000;
var height = 400;
var keyboard = [];
var world;
var friction = 0.8;
var gravity = 0.3;

var recentDirection = true; // right
var itemKeys = 0;
var bread = 0;
// var quotes = ["", "", "", "", "", "", ""];

var stillPressingSpace = false;

console.log("Dimensions: "+width+"x"+height);
console.log("Coefficient of friction = "+friction+", acceleration due to gravity = "+gravity+" (both px)");

console.log("Other useless technical jargon, jubilence achieved");