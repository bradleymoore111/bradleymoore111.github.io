console.log("Initializing local variables.");

var lastCalledTime;
var fps;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var hud = document.getElementById("hud");
// var htx = hud.getContext("2d");

var inventory_canvas = document.getElementById("inventory_canvas");
var itx = inventory_canvas.getContext("2d");

var levelInf = {
	title:document.getElementById("level-title"),
	body:document.getElementById("level-discussion"),
	bread:document.getElementById("bread-discussion"),
};

// var worldInf = document.getElementById("world-information");
// var playerInf = document.getElementById("player-information");

var oldHud;
var level = -1;
var newLevel = 0;
var deaths;
var currentBackground = (14*Math.random())|0; // Eventually each level will have a specific background

var d = new Date();
var startingTime = d.getTime();
var lastTime = 0;
var currentTime = startingTime - d.getTime();

document.cookie="username=John Smith; expires=Thu, 18 Dec 2016 12:00:00 UTC";

var x = document.cookie;
console.log(x);

var width = 1000;
var height = 400;
var keyboard = [];
var world = []; // Contains all the world stuff
var friction = 0.8;
var gravity = 0.3;
var dead = false;

var recentDirection = true; // right
var itemKeys = 0;
var bread = 0;

var inDialogue = false;
var dialogue = null;
var currentDialogue = null;

var stillPressingSpace = false;

// Story vars
var interviewSuccess = null;
var isMaybeNazi = false;

console.log("Dimensions: "+width+"x"+height);
console.log("Coefficient of friction = "+friction+", acceleration due to gravity = "+gravity+" (both px)");

console.log("Other useless technical jargon, jubilence achieved");