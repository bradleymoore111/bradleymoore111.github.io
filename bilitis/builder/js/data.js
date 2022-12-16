var worldBorder = [
	{
		x: 0,
		y: 0,
		width: 10,
		height: height,
	},
	{
		x: 0,
		y: height - 10,
		width: width,
		height: 50,
	},
	{
		x: width - 10,
		y: 0,
		width: 50,
		height: height,
	},
	{
		x: 0,
		y: 0,
		width: width,
		height: 10,
	}
];

world = { // Hello World
	name: "Hello World",
	background: "hello_world",
	spawn: {
		x: width/2,
		y: height - 60,
		width: 50,
		height: 50,
	},
	critters:[],
	bugs:[],
	bread:[],
	boxes:[],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 301, // Error: Not Found
		y: 190,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++;
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};