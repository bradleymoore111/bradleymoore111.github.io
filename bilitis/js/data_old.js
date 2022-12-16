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

world[0] = { // Hello World
	name: "Hello World",
	body: "It's so nice to see you. Use arrow keys or WASD (even space for jump if you're so inclined), head for that bread castle above you, and hit space.",
	message: "The Tower for me is all about beginnings. It's starting things out, opening things up, at least for me. Whenever I'd come home from school, I'd open up my msuic playlist called 'background', and it would start with The Tower. As shuffle was on, the next song would be different, but The Tower would always be the first.<br><br>The song itself was actually about Vienna Teng's roommate while in college, a person who was amazing to be around, made everyone feel great, but was slowly collapsing under the weight of her efforts. 'I need not to need' calls this out, with Vienna needing to stop needing help, in order to save her friend. This song was written for her, and the friend loved it. Wasn't anything super serious, just a nice song for a friend.",
	background: images.backgrounds.hello_world,
	player:{
		x: width/2,
		y: height - 20,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		doubled: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: 20,
			y: height-21,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
			subQuote:"Stephen R. Covey",
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 730,
			y: 370,
			width: 270,
			height: 30,
		},
		// {
		// 	x: 820,
		// 	y: 340,
		// 	width: 180,
		// 	height: 60,
		// },
		{
			x: 910,
			y: 320,
			width: 90,
			height: 80,
		},
		{
			x: 750,
			y: 280,
			width: 100,
			height: 30,
		},
		{
			x: 300,
			y: 240,
			width: 400,
			height: 30,
		},
	],
	noJumps:[
		{
			x: 150,
			y: 150,
			width: 50,
			height: 150,
		},
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 163,
			y: 135,
			width: 24,
			height: 10,
			taken: false,
		},
	],
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
			newLevel++; // Signal to the engine to change levels.
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[1] = { // Am I Right
	name: "Am I Right",
	body: "You'll get used to the mechanics as you progress, the game is devoid of any interaction other than contact. You wanna pick up a cube, you touch the cube. You wanna place the cube, you touch the plate. Fairly simple.",
	message: "We're living in the 99. One of the more interesting songs, it came from Aims, which for her was all about the world, from intimacy to critique, to exhortation. An amazing album. This song was about the occupy wall-street movement, with all the socio economic issues, but really is also talking about how we are the majority. We aren't the 1%, we are the people, and our lives should not be put second to the 1% holding the world in their hands.",
	background: images.backgrounds.right,
	player:{
		x: 50,
		y: height - 20,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: 305,
			y: height-221,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
			subQuote:"Maya Angelou",
		}
	],
	boxes:[],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[
		{
			x: 220,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 265,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 325,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		}
	],
	fields:[
		{
			x: 300,
			y: height-210,
			width: 20,
			height: 200,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 380,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[2] = { // Onward and Upward
	name: "Onward and Upward",
	body: "For this, there's a new mechanic you're going to have to learn. Run over and hug the wall on your right, then spam jump as fast as you can ;)",
	message: "This is a far nicer song, called 'Shine'. When I first moved out of my mom's house, it was a very calming song. It just made me feel nice whenever I'd listen to it, and I'd play it before I sleep. Since then my bedtime playlist has changed and shuffled around a bit, but this song still makes me feel a little warmer inside whenever I hear it. It was a part of her second album, 'Warm Strangers', which was a very happy album. Not a cotton candy album, but really was a very happy album, and this song exemplifies that. Interestingly enough, she wrote this song while she was suffering under a writer's block, and described it as her being able to look at the positive side of things even when they're dark.",
	background: images.backgrounds.onward,
	player:{
		x: width/2,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[
		{
			xMin: 50,
			xMax: 200,
			x: 60,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 250,
			xMax: 400,
			x: 260,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 650,
			x: 510,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 20,
			y: 209,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "If you're going through hell, keep going.",
			subQuote:"Winston Churchill",
		}
	],
	boxes:[
		{
			x: 700,
			y: 130,
			width: 220,
			height: 140,
		},
		{
			x: 10,
			y: 220,
			width: 690,
			height: 50,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[
		{
			x: 220,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 815,
			y: 120,
			width: 20,
			height: 15,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 755,
			y: 120,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		}
	],
	fields:[
		{
			x: 790,
			y: 10,
			width: 20,
			height: 120,
			targets: [0], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 700,
		y: 80,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[3] = { // Flying Snake
	name: "Flying Snake",
	body: "Perhaps I should mention, you can double jump.",
	message: "'I don't feel so well' was a part of 'Dreaming through the Noise', and was a bit of a cute discussion about what it means to feel well. I don't feel so well, as in can't emotionally feel anything very well? Inspired by an english teacher while she was in high school, a nice song nonetheless, and not at all too deep.",
	background: images.backgrounds.snake,
	player:{
		x: width-30,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: 50,
			y: 24,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "The last hope of the damned is not for salvation.",
			subQuote:"...",
		}
	],
	boxes:[
		{
			x: 800,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 600,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 400,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 200,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 0,
			y: 100,
			width: 100,
			height: 300,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 20,
		y: 50,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = width-30;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width-30;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[4] = { // It's Dangerous to go Alone
	name: "It's Dangerous to go Alone",
	body: "Be careful, trumpets are pretty nasty instruments. You don't want to get caught in their ego.",
	message: "Here's an interesting one. This is a song about a boy who leaves home because he doesn't feel right, goes out and has a fine life, but eventually has to go back home because he misses it and is where he belongs. It's a short story, but is actually a massive metaphor for Vienna's life. She spent the first 22 years of her life ignoring msuic, before finally acknowledging it. Her degree is actually in software engineering, and she had a high technical job before she quit to pursue msuic as a career, and the song is about her realizing that while it may be 'Enough to go by', she wanted something better. Even if it wasn't necessarily more.<br><br>Funnily enough, lately she's been moving away from msuic, more towards a socio/economic global improvement movement, getting her masters 2 years ago. Everyone's life should go where they want, and while I'm a little sad she probably won't be putting out as much msuic anymore, I'm glad her life's moving where she wants it to.",
	background: images.backgrounds.alone,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[
		{
			xMin: 350,
			xMax: 500,
			x: 410,
			y: 255,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 490,
			xMax: 560,
			x: 510,
			y: 115,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 200,
			xMax: 350,
			x: 310,
			y: 375,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 530,
			y: 119,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.",
			subQuote:"J.K. Rowling",
		},
	],
	boxes:[
		{
			x: 10,
			y: 270,
			width: 790,
			height: 20,
		},
		{
			x: 790,
			y: 280,
			width: 20,
			height: 20,
		},
		{
			x: 800,
			y: 290,
			width: 20,
			height: 20,
		},
		{
			x: 150,
			y: 130,
			width: 840,
			height: 20,
		},
		{
			x: 140,
			y: 140,
			width: 20,
			height: 20,
		},
		{
			x: 130,
			y: 150,
			width: 20,
			height: 20,
		},
		{
			x: 120,
			y: 160,
			width: 20,
			height: 20,
		},
		{
			x: 110,
			y: 170,
			width: 20,
			heihgt: 20,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 900,
		y: 80,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[5] = { // Whole lotta fielding
	name: "Whole lotta fielding",
	body: "This is the first real puzzle you'll have. You'll get a better grip on the mechanics of the game after this level, I promise.",
	message: "This song is just one of my favorites. 'Mission Street' is simple, it describes a street. Never sleeping, never silent, always alive. She used to live on a street that was constantly bustling, and yet for all its noise and distraction, was absolutely beautiful. I used to listen to this song as well as Shine before I'd sleep, immediately following Shine. It really was a beautiful song, constantly growing throughout, starting with worldly doubt, then self doubt, and growing into confidence.<br><br>The lines start with 'And it seems, that I've been wrong, more than I've been right', then are repeated as 'And it seems, that I've been right, more than I've been wrong', and finally concludes at 'And it seems, the more I'm wrong, the more that I am right'. I always loved listening to it and feeling the growth of the song as it progresses.",
	background: images.backgrounds.fielding,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: 970,
			y: 379,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Cave furorem patientis",
			subQuote: "John Dryden",
		},
	],
	boxes:[
		{
			x: 10,
			y: 230,
			width: 980,
			height: 20,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[
		{
			x: 50,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 0,
		},
		{
			x: 75,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 1,
		},
	],
	plates:[
		{
			x: 100,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 160,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 1,
		},
		{
			x: 220,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 2,
		},
		{
			x: 280,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 3,
		},
		{
			x: 340,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 4,
		},
		{
			x: 400,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 5,
		},
		{
			x: 560,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 6,
		},
		{
			x: 620,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 7,
		},
		{
			x: 680,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 8,
		},
		{
			x: 740,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 9,
		},
		{
			x: 800,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 10,
		},
		{
			x: 860,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 11,
		},
	],
	fields:[
		{
			x: 135,
			y: height-150,
			width: 20,
			height: 140,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		},
		{
			x: 255,
			y: height-150,
			width: 20,
			height: 140,
			targets: [2,3], // Which element needs to activate it
			opened: false,
		},
		{
			x: 375,
			y: height-150,
			width: 20,
			height: 140,
			targets: [4,5], // Which element needs to activate it
			opened: false,
		},
		{
			x: 595,
			y: height-150,
			width: 20,
			height: 140,
			targets: [6,7], // Which element needs to activate it
			opened: false,
		},
		{
			x: 715,
			y: height-150,
			width: 20,
			height: 140,
			targets: [8,9], // Which element needs to activate it
			opened: false,
		},
		{
			x: 835,
			y: height-150,
			width: 20,
			height: 140,
			targets: [10,11], // Which element needs to activate it
			opened: false,
		},
	],
	keys:[],
	doors:[],
	goal:{
		x: 470,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-20;
			resetLevel(0);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-20;
		resetLevel(1);
	},
};

/*
world[6] = { // Example key usage
	player:{
		x: width-20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 400,
			xMax: 450,
			x: 410,
			y: 240,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 550,
			x: 510,
			y: 140,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 20,
			y: 20,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "temp",
			subQuote:"",
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 20,
			y: 100,
			width: 80,
			height: 10,
		},
		{
			x: 80,
			y: 180,
			width: 80,
			height: 10
		},
		{
			x: 160,
			y: 140,
			width: 120,
			height: 10
		},
		{
			x: 310,
			y: 100,
			width: 110,
			height: 10
		}
	],
	noJumps:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 50,
			y: 70,
			width: 24,
			height: 10,
			taken: false,
		},
	],
	doors:[
		{
			x: 310,
			y: 50,
			width: 20,
			height: 50,
			opened: false,
		},
	],
	goal:{
		x: 400,
		y: 50,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};*/

world[6] = { // Simply Walls
	name: "Simply Walls",
	body: "This was one of the later levels I made. While I was doing level design, I had all these ideas about how to play with the mechanics of the game, but I never really gave the player the opportunity to learn them. Obviously being the omniscient being of this land, I've had plenty of experience while creating the walls that guide you, but some slow leads into the game were necessary.",
	message: "A song written for her uncle who passed away when she was 16 (your age :3), and was the first real close relative of hers to pass. It's her father's favorite song, and talks about death, but is still a light song. Not depressing at all, but more of a letting go yet remembering the good times, if that makes any sense.",
	background: images.backgrounds.walls,
	player:{
		x: width/2,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: width-30,
			y: 280,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "It is our choices that show us who we truly are, far more than our abilities.",
			subQuote: "J.K Rowling",
		}
	],
	boxes:[
		{
			x: 10,
			y: 250,
			width: 980,
			height: 20,
		},
		{
			x: 825,
			y: 270,
			width: 30,
			height: 50,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[
		{
			x: 550,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 0,
		},
	],
	plates:[
		{
			x: 160,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 0,
		},
		{
			x: 100,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		},
		{
			x: 700,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 2,
		},
		{
			x: 760,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 3,
		}
	],
	fields:[
		{
			x: 135,
			y: height-130,
			width: 20,
			height: 120,
			targets: [0,1],
			opened: false,
		},
		{
			x: 735,
			y: height-130,
			width: 30,
			height: 120,
			targets: [2,3],
			opened: false,
		}
	],
	keys:[
		{
			x: 30,
			y: 375,
			width: 24,
			height: 10,
			taken: false,
		}
	],
	doors:[
		{
			x: 825,
			y: 320,
			width: 30,
			height: 70,
			opened: false,
		}
	],
	goal:{
		x: 925,
		y: 340,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};
// Simply Danger
world[7] = {name: "Simply Danger",body:"Ohhhhh that green stuff doesn't look so fun. I'd avoid falling into it.",message:"Harbor is one of my favorite songs. It's about helping someone else, perhaps someone who's quite adventurous, but you're never sure if they'd be OK with going out and doing their own thing. The entire song is centered around you just wanting someone else to know they they'll be OK, and that you're here for them, should they ever need help, or just somewhere to rest, and that no matter what they want to do, no matter where they want to go, you'll support them, and be their 'harbor'. Many of her fans label this as their favorite songs, and I can more than see why.",background: images.backgrounds.simply_danger,bodies:[],player:{x:475,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:475,y:340,width:50,height:50},critters:[],bugs:[],bread:[{x:855,y:129,width:11,height:11,pickedUp:false,quote:'This too shall pass.',subQuote:'Nothing endures',},],spikes:[],boxes:[{x:100,y:340,width:50,height:50},{x:300,y:340,width:50,height:50},{x:650,y:340,width:50,height:50},],noJumps:[{x:850,y:140,width:30,height:130},{x:850,y:340,width:50,height:50},],neurotoxin:[{x:150,y:370,width:150,height:20,clouds:[{x:167,y:378},{x:221,y:378},{x:157,y:362},{x:183,y:376},{x:258,y:373},{x:253,y:361},{x:269,y:373},{x:184,y:362},]},{x:700,y:370,width:150,height:20,clouds:[{x:817,y:379},{x:775,y:377},{x:698,y:375},{x:780,y:372},{x:767,y:365},{x:706,y:377},{x:697,y:361},{x:770,y:378},]},],cubes:[],plates:[],fields:[],keys:[{x:38,y:375,width:24,height:10,taken:false},],doors:[{x:850,y:270,width:30,height:70,opened:false},],goal:{x:920,y:340,width:51,height:50,action:function(){world[level].player.x=475;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=475;world[level].player.y=340;resetLevel(true);}}

world[8] = { // Timing
	name: "Timing",
	body: "Oh my, the flutes have invaded as well. Try not to get caught in the crossfire while I round them up. You're gonna need some patience to avoid them.",
	message: "This song is a drone. It's called 'Feather Moon', and was all about how she can paint a picture with words, her ability to create an image and whatnot. It was semi-inspired by Bolero, and her sister actually called it out, talking about how lengthy and continuous it was. Vienna Teng intentionally wrote it along this style, literally commenting back 'But that's the beauty of it. It's supposed to do that. That's the WHOLE POINT'.<br><br>Also apparently everyone other than myself found this level too hard, so I made it a little easier. Poo.",
	background: images.backgrounds.timing,
	player:{
		x: width-30,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[
		{
			xMin: 200,
			xMax: 400,
			x: 210,
			y: 175,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		},
		{
			xMin: 450,
			xMax: 650,
			x: 460,
			y: 175,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		},
		{
			xMin: 700,
			xMax: 900,
			x: 710,
			y: 175,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		},
		{
			xMin: 200,
			xMax: 400,
			x: 210,
			y: 375,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		},
		{
			xMin: 450,
			xMax: 650,
			x: 460,
			y: 375,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		},
		{
			xMin: 700,
			xMax: 900,
			x: 710,
			y: 375,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
		}
	],
	bugs:[
		{
			yMin: 20,
			yMax: 180,
			x: 414,
			y: 30,
			height: 20,
			width: 20,
			speed: 1,
			velX: 0,
			velY: 1,
		},
		{
			yMin: 20,
			yMax: 180,
			x: 674,
			y: 30,
			height: 20,
			width: 20,
			speed: 1,
			velX: 0,
			velY: 1,
		},
		{
			yMin: 220,
			yMax: 380,
			x: 414,
			y: 230,
			height: 20,
			width: 20,
			speed: 1,
			velX: 0,
			velY: 1,
		},
		{
			yMin: 220,
			yMax: 380,
			x: 674,
			y: 230,
			height: 20,
			width: 20,
			speed: 1,
			velX: 0,
			velY: 1,
		}
	],
	bread:[
		{
			x: 45,
			y: 89,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Give a man a mask and he will show his true face.",
			subQuote:"Oscar Wilde",
		}
	],
	boxes:[
		{
			x: 200,
			y: 190,
			width: 790,
			height: 20,
		},
		{
			x: 10,
			y: 100,
			width: 100,
			height: 20,
		},
		{
			x: 80,
			y: 10,
			width: 30,
			height: 20,
		}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[
		{
			x: 80,
			y: 30,
			width: 30,
			height: 70,
			opened: false,
		},
	],
	goal:{
		x: 920,
		y: 140,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = width-30;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++;
		}
	},
	reset:function(){
		world[level].player.x = width-30;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[9] = { // Leapfrog
	name: "Leapfrog",
	body: "Sometimes, less is more. The more open your view is, the more you see. Your brain actually releases a small amount of dopamine when it sees large open spaces such as fields, as part of a survival instinct to avoid trapping ones' self. We automatically seek and feel more comfortable when seeing open spaces. So I try to have a few levels that aren't as complex, that are just relaxing. You can speed through them, but sometimes it's nice to just take a breath and admire those sexy pixel sprites I made. Oh and relax. That also.",
	message: "This is one of my favorite songs. She originally wrote this song for her father, trying to describe it from his perspective, but it ended up being about her. It revolved around how even though he was skeptical of her choices to go into music, he always supported her. The lyric you see in front of you points directly at that, and is one of the most beautiful lines I have stuck in my head.",
	background: images.backgrounds.leapfrog,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	bodies:[],
	critters:[],
	bugs:[],
	bread:[
		{
			x: width-30,
			y: height-21,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Everyone is Player 1, and to them everyone else is an NPC",
			subQuote:"",
		}
	],
	boxes:[],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[
		{
			x: 50,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		},
		{
			x: 80,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 1,
		}
	],
	plates:[
		{
			x: 250,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 310,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		},
		{
			x: 650,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 2,
		},
		{
			x: 710,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 3,
		},
		{
			x: 850,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 4,
		},
		{
			x: 910,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 5,
		}
	],
	fields:[
		{
			x: 285,
			y: 10,
			width: 20,
			height: 380,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		},
		{
			x: 685,
			y: 10,
			width: 20,
			height: 380,
			targets: [2,3],
			opened: false,
		},
		{
			x: 885,
			y: 10,
			width: 20,
			height: 380,
			targets: [4,5],
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 770,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

// Don't trip
world[10] = {name: 'Don\'t Trip',body:"As the title suggests, don't trip. I actually had a lot of fun making some of the harder levels, as artistic as I tried to be with the placement of everything, I didn't want anything to look awkward, or forced. I wanted things to fit, to make sense at a glance, even if not necessarily easy. I won't go into the math behind the height of the platforms in front of you, but this level was extra fun.",message: "Watershed. The word means a couple things, from being a medical term describing water displacement under organ tissue, to being the water level underneath us, a sort of geological formation. There's very little on the internet about this song, with a few places saying it's about nature's omnipotence, or about the rise and fall of society (her description). Yet this song stuck to me, as it's all about continuous power. About forces working constantly, and that no matter how powerful you are, no matter how omniscient you are and how much you know and control, that something is always working, against or for you, with or at you, things are always in motion, and during every break you take, every pause you take for rest, they keep going. It felt powerful to me, being about constant unending motion, and forces above any human control.",background:images.backgrounds.dont_trip,bodies:[],player:{x:30,y:200,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:30,y:200,width:50,height:50},critters:[{xMin:450,xMax:700,x:450,y:105,height:10,width:22,speed:1,velX:1},{xMin:750,xMax:980,x:750,y:105,height:10,width:22,speed:1,velX:1},],bugs:[{yMin:170,yMax:390,x:385,y:170,height:20,width:20,speed:1,velY:1},{yMin:170,yMax:390,x:575,y:170,height:20,width:20,speed:1,velY:1},{yMin:170,yMax:390,x:765,y:170,height:20,width:20,speed:1,velY:1},],bread:[{x:950,y:109,width:11,height:11,pickedUp:false,quote:'Assumption is the mother of all fuckups',subQuote:''},],spikes:[],boxes:[{x:10,y:250,width:300,height:140},{x:860,y:320,width:130,height:70},{x:420,y:120,width:570,height:50},],noJumps:[{x:310,y:250,width:20,height:140},{x:460,y:300,width:60,height:90},{x:650,y:350,width:60,height:40},{x:840,y:320,width:20,height:70},],neurotoxin:[{x:330,y:370,width:130,height:20,clouds:[{x:341,y:378},{x:396,y:372},{x:386,y:365},{x:349,y:372},{x:433,y:371},{x:349,y:367},{x:438,y:361},]},{x:520,y:370,width:130,height:20,clouds:[{x:603,y:376},{x:593,y:368},{x:533,y:360},{x:566,y:377},{x:561,y:371},{x:534,y:363},{x:577,y:374},]},{x:710,y:370,width:130,height:20,clouds:[{x:777,y:377},{x:812,y:369},{x:753,y:373},{x:738,y:371},{x:824,y:378},{x:824,y:368},{x:823,y:367},]},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:900,y:270,width:51,height:50,action:function(){world[level].player.x=30;world[level].player.y=200;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=30;world[level].player.y=200;resetLevel(true);}};
;

world[11] = {name: 'Jumping',body:"You've gone far, you've learned how to maneuver through my world, and are growing stronger as a result of it. Your movements have helped me capture many of the evil flutes and trumpets, but I need help capturing the rest of them. Keep going, and be careful, these things are not going down without a fight.",message:"St. Stephen's Cross is not about the church of St. Stephen's, nor of the fall of the Berlin wall (trust me), but actually about both. It's about a couple who run out into the streets after the fall, and is about the anxiety of a country after a monumental change, and its people's confusion on what the hell to do.",background:images.backgrounds.jumping,bodies:[],player:{x:20,y:50,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:50,width:50,height:50},neurotoxin:[],critters:[{xMin:400,xMax:600,x:400,y:115,height:10,width:22,speed:1,velX:1},{xMin:400,xMax:600,x:578,y:10,height:10,width:22,speed:1,velX:-1},{xMin:800,xMax:990,x:800,y:115,height:10,width:22,speed:1,velX:1},{xMin:800,xMax:990,x:968,y:205,height:10,width:22,speed:1,velX:-1},{xMin:800,xMax:990,x:800,y:295,height:10,width:22,speed:1,velX:1},],bugs:[{yMin:160,yMax:390,x:650,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:530,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:270,x:390,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:250,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:110,y:160,height:20,width:20,speed:1,velY:1},],spikes:[],bread:[{x:395,y:259,width:11,height:11,pickedUp:false,quote:'A society grows great when old men plant trees whose shade they know they shall never sit in.',subQuote:'Greek Proverb'},],boxes:[{x:10,y:100,width:390,height:60},{x:400,y:130,width:200,height:30},{x:600,y:100,width:200,height:60},{x:760,y:160,width:40,height:150},{x:800,y:180,width:40,height:20},{x:950,y:180,width:40,height:20},{x:800,y:270,width:40,height:20},{x:950,y:270,width:40,height:20},{x:380,y:270,width:40,height:40},{x:240,y:160,width:10,height:110},{x:100,y:270,width:10,height:120},{x:520,y:160,width:10,height:110},{x:640,y:270,width:10,height:130},{x:130,y:270,width:10,height:120},{x:270,y:160,width:10,height:110},{x:550,y:160,width:10,height:110},{x:670,y:270,width:10,height:120},],noJumps:[{x:110,y:270,width:20,height:10},{x:250,y:260,width:20,height:10},{x:530,y:260,width:20,height:10},{x:650,y:270,width:20,height:10},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:30,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(true);}}

world[12] = {name: 'Christmas',body:"And then sometimes you just want to look nice. You don't need complexity, ingenuity (though it helps), or anything super complex, just a little creativity. Unfortunately I am not a very original God and building your gardens was the hardest part of this project, but I persisted at making my own levels, to express the ideas and themes I wanted to express.",message:"This was a hard one. Not a lot on the internet about this one either (at least on warmstrangers.com), but it was one of the ones with the most potential. The 38 Geary is a bus line in San Fransisco, and the rest of the song is about danger, and an almost apocalyptic/holocaust-esque situation, in which people are suffering immensely under tyranny/terrorism and general fear mongering. Some interpretations I've seen have been that it's about the problems hidden in our own society, a dark song hidden in a happy one, but my theory on the matter is it's about someone who's afraid. Whether an elderly person from war, or a child with a dark imagination, this person is afraid and voices their fears and worries, along with the darkness they see, to another person who comforts them and reminds them that things aren't that bad, that 'It's just the radio darling'.",background:images.backgrounds.christmas,bodies:[],player:{x:475,y:20,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:475,y:20,width:50,height:50},neurotoxin:[],spikes:[],critters:[],bugs:[{yMin:10,yMax:250,x:90,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:190,x:190,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:130,x:290,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:130,x:690,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:190,x:790,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:250,x:890,y:10,height:20,width:20,speed:1,velY:1},],bread:[{x:450,y:179,width:11,height:11,pickedUp:false,quote:'When the axe came into the woods, many of the trees said, "At least the handle is one of us"',subQuote:''},],boxes:[{x:400,y:70,width:200,height:60},{x:300,y:130,width:140,height:60},{x:200,y:190,width:240,height:60},{x:100,y:250,width:340,height:60},{x:560,y:130,width:140,height:60},{x:560,y:190,width:240,height:60},{x:560,y:250,width:340,height:60},{x:440,y:190,width:80,height:20},{x:490,y:280,width:70,height:20},{x:560,y:310,width:20,height:80},],noJumps:[],cubes:[],plates:[],fields:[],keys:[{x:600,y:360,width:24,height:10,taken:false},],doors:[{x:490,y:210,width:30,height:70,opened:false},],goal:{x:500,y:340,width:51,height:50,action:function(){world[level].player.x=475;world[level].player.y=20;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=475;world[level].player.y=20;resetLevel(true);}}

world[13] = {name: 'Life is one way',body:"When Life throws lemons at you, you don't pick them up and make lemonade out of them. They've been on the ground, and assuming Life has a good throwing arm are probably not in very good condition. Sometimes you need to change your course, stop the lemons from hitting you, either through hitting Life right back, or rectifying the problem Life has with you in the first place. Maybe you should have thought about your morals before banging Life's wife. Make your dirty lemonade.<br><br>Jerk.<br>",message:"Oh now recessional is one of my FAVORITE songs. I love this song, it's a part of my nightly sleeping set currently. Vienna Teng as the cool person she is, described this song as a 'reverse strip-tease' song, talking about a relationship in reverse. It starts with describing the beauty of the moment (the happiness that comes in realizing just how awesome of a relationship you have and have had, often after awhile of being with the person), to being pressed together and going through experiences (the first time in a relationship where you're comfortable, where you do things without thinking, where everything is just right without having to try). Then she moves to the phrase 'Maybe it means nothing', the part right before a relationship is made or broken, where a person questions whether there's anything really there or not. After that, the dating phase, where they're learning everything there is about each other, their coffee style, their eccentricness, remarks and diction styles. And at the end of the song, she talks about the first meeting '...like rain, how sweet the sound', ending with the line that comes after a first meeting that is sure to lead to more (for this I picture a cute girl smiling just after handing me her number), 'Well anyway, she says, I'll see you around...'.",background:images.backgrounds.one_way,bodies:[],player:{x:20,y:50,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:50,width:50,height:50},critters:[{xMin:750,xMax:950,x:750,y:75,height:10,width:22,speed:1,velX:0.25},],bugs:[],spikes:[{x:450,y:380}],bread:[{x:960,y:80,width:11,height:11,pickedUp:false,quote:'First they laugh at you, then they ignore you, then they fight you, and then you win.',subQuote:'Ghandi'},],boxes:[{x:10,y:100,width:90,height:60},{x:200,y:10,width:40,height:200},{x:240,y:260,width:200,height:130},{x:340,y:90,width:200,height:50},{x:740,y:90,width:240,height:50},],noJumps:[{x:100,y:100,width:10,height:60},{x:190,y:10,width:10,height:200},{x:230,y:260,width:10,height:130},{x:10,y:160,width:100,height:10},{x:10,y:160,width:10,height:230},{x:980,y:10,width:10,height:380},{x:730,y:90,width:10,height:50},{x:440,y:260,width:10,height:130},],neurotoxin:[{x:20,y:340,width:210,height:50,clouds:[{x:215,y:368},{x:162,y:351},{x:109,y:365},{x:184,y:341},{x:71,y:335},{x:182,y:342},{x:161,y:348},{x:57,y:376},{x:26,y:351},{x:25,y:375},{x:72,y:335},{x:49,y:341},{x:22,y:337},{x:117,y:335},{x:105,y:338},{x:180,y:358},{x:175,y:377},{x:187,y:334},{x:61,y:352},{x:122,y:343},{x:200,y:370},{x:142,y:374},{x:123,y:338},{x:48,y:361},{x:158,y:362},{x:87,y:354},{x:74,y:343},]},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:800,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(true);}}

world[14] = {name: 'Think Fast',body:"The world seems to be about auto pilot. Very few people do what they want to do, but instead follow the supposed to. Nearly every person out of high school goes into some form or another of college (at least at El Segundo) or if their family needs money, might instead pursue a craft, or straight up get a job. They don't do this because they want money, or to succeed, or just like learning, they do this because since they could listen to their parents talk about the world, they knew everyone's goal in life is to 'succeed'. Whatever that means, but it's ingrained in our heads that we have to 'succeed'. And in order to 'succeed' we have to go to a good college (community college only if you didn't get into a 4 year), and that's whether or not you can afford. If you got into LMU, you're expected to pay the $50k annual tuition and take out loans to back it, because that's how you 'succeed'. Then you get a nice paying job with your worthless degree, spend 2/3rds of your life working and sleeping, all so when you're finally old and unable to remember anything, talk to anyone you still care about, or do anything physical beyond shit your pants, you can at least have a nice retirement to live with. The world just keeps going, repeating actions over and over until you can break from this cycle of what you do as a productive member of society, and instead live. Just live. Eat, sleep, run, play, work, anything, but as long as it's <i>yours</i>. Don't keep falling into the same trap as everyone else, break free from the cycle. Life's meaning is what you decide on, not what society says it is. Set your goals, and meet them. Fuck all else.",message:"Whatever you want is another subtle favorite of mine. It never made the bedtime playlist, but it's consistently been one that when clicking 'random', I'll always stop at and listen to. This is a song that was written the day before it was performed, as she needed something other than a sing-along. She described it as being about a worker turning in their boss, which makes sense, but my personal interpretation was that it's about a stay at home wife, not necessarily mother, who's totally supportive of her husband. Whatever he wants or needs after he gets back from a tiring day, she provides. And he may not necessarily be cheating on her, or hurting her at all, but she's tired of how tired he is, and wants to help him, so she sets him up at the office, getting a final revenge using the information she has on him. A bit of a funny yet more sadistic, and not entirely sensical, interpretation of mine.",background:images.backgrounds.think_fast,bodies:[],player:{x:20,y:30,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:30,width:50,height:50},critters:[],bugs:[],bread:[{x:15,y:15,width:11,height:11,pickedUp:false,quote:'Every person dies twice in their life. The day they die, and the last time their name is ever said.',subQuote:'Banksy'},],boxes:[{x:100,y:160,width:60,height:230},{x:260,y:200,width:120,height:30},{x:380,y:230,width:120,height:30},{x:560,y:300,width:120,height:30},{x:650,y:240,width:54,height:27},{x:680,y:300,width:100,height:30},{x:750,y:380,width:10,height:0},{x:750,y:330,width:30,height:60},{x:930,y:240,width:10,height:0},],noJumps:[{x:540,y:70,width:20,height:180},],spikes:[],neurotoxin:[{x:10,y:260,width:90,height:130,clouds:[{x:6,y:346},{x:6,y:327},{x:75,y:318},{x:26,y:340},{x:71,y:254},{x:44,y:328},{x:20,y:271},{x:63,y:312},{x:79,y:291},{x:79,y:355},{x:4,y:294},{x:81,y:274},{x:36,y:358},{x:85,y:304},{x:5,y:250},{x:68,y:293},{x:52,y:357},{x:84,y:300},{x:24,y:313},{x:44,y:272},{x:21,y:323},{x:4,y:350},{x:83,y:374},{x:20,y:291},{x:30,y:374},{x:22,y:330},{x:57,y:345},{x:68,y:272},{x:43,y:317},{x:9,y:375},]},{x:160,y:360,width:590,height:30,clouds:[{x:154,y:352},{x:178,y:356},{x:337,y:371},{x:209,y:360},{x:353,y:352},{x:692,y:366},{x:501,y:365},{x:579,y:374},{x:601,y:378},{x:696,y:369},{x:361,y:356},{x:272,y:376},{x:227,y:370},{x:594,y:361},{x:653,y:361},{x:589,y:353},{x:251,y:358},{x:177,y:365},{x:286,y:350},{x:534,y:367},{x:466,y:378},{x:694,y:366},{x:482,y:360},{x:604,y:376},{x:242,y:365},{x:662,y:370},{x:187,y:371},{x:475,y:367},{x:563,y:363},{x:500,y:354},{x:700,y:365},{x:434,y:368},{x:220,y:370},{x:680,y:371},{x:665,y:358},{x:655,y:377},{x:704,y:354},{x:286,y:373},{x:244,y:363},{x:327,y:365},{x:332,y:370},{x:278,y:365},{x:494,y:375},{x:257,y:374},{x:431,y:370},]},],cubes:[{x:400,y:210,width:20,height:20,pickedUp:false,placed:-1,id:0},],plates:[{x:665,y:230,width:20,height:5,activated:false,cube:-1,playerStillIn:false,id:0},],fields:[{x:755,y:10,width: 20,height:290,targets:[0],opened:false},],keys:[],doors:[],goal:{x:850,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=30;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=30;resetLevel(true);}};

// world[15] = {name: 'Speed and Reflexes of a Spider',,spikes:[],bodies:[],player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:340,width:50,height:50},critters:[],bugs:[],bread:[{x:530,y:289,width:11,height:11,pickedUp:false,quote:'Years of love have been forgot, in the hatred of a minute',subQuote:'Edgar Allen Poe'},],boxes:[{x:150,y:310,width:100,height:10},{x:290,y:210,width:10,height:80},{x:190,y:140,width:10,height:90},{x:290,y:140,width:120,height:10},{x:400,y:150,width:10,height:230},{x:400,y:380,width:10,height:10},{x:820,y:240,width:10,height:50},{x:730,y:130,width:10,height:50},{x:640,y:310,width:10,height:80},{x:530,y:300,width:10,height:10},],noJumps:[{x:830,y:140,width:20,height:250},{x:710,y:10,width:20,height:170},{x:710,y:180,width:20,height:150},],neurotoxin:[{x:410,y:320,width:230,height:70,clouds:[{x:577,y:332},{x:438,y:334},{x:420,y:377},{x:464,y:376},{x:621,y:369},{x:542,y:320},{x:552,y:323},{x:559,y:362},{x:485,y:364},{x:570,y:343},{x:623,y:331},{x:415,y:310},{x:455,y:314},{x:483,y:370},{x:483,y:328},{x:549,y:355},{x:579,y:336},{x:577,y:375},{x:571,y:323},{x:497,y:354},{x:489,y:357},{x:586,y:320},{x:425,y:360},{x:482,y:343},{x:469,y:328},{x:580,y:361},{x:551,y:360},{x:564,y:329},{x:519,y:366},{x:577,y:328},{x:599,y:338},{x:462,y:358},{x:567,y:321},{x:470,y:328},{x:623,y:314},{x:509,y:378},{x:556,y:372},{x:459,y:350},{x:479,y:366},{x:510,y:377},{x:485,y:360},]},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};

world[15] = {name: 'Speed and Reflexes of a Spider',body:"I got a little carried away back there. Sorry. Sometimes it's not such a bad thing to just go with the flow. Let life take you where it goes, see the sights as you pass on through. It doesn't have to all be about doing something, hell sometimes the best thing you can do is do nothing. Just sit back, and<br><br>And<br><br>That's it.<br><br>Nothing more.",message:"This was Vienna Teng's first autobiographical piece. I always thought it was one of the prettier ones of hers. A very pretty one, going through a life, it's simple. It's got a repeated message of 'Flat on the table like Kansas', first going from describing her surroundings, to talking about her activities, and finally to the restings and endings. Nothing super intricate (that I see), just nice. There's depth to the lyrics, meanings in everything, but again. It's a pretty, nice song. Worthwhile.",background:images.backgrounds.spider,player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},bodies:[],spawn:{x:20,y:340,width:50,height:50},critters:[],bugs:[],bread:[{x:530,y:289,width:11,height:11,pickedUp:false,quote:'Years of love have been forgot, in the hatred of a minute',subQuote:'Edgar Allen Poe'},],boxes:[{x:150,y:310,width:100,height:10},{x:290,y:210,width:10,height:80},{x:190,y:140,width:10,height:90},{x:290,y:140,width:120,height:10},{x:400,y:150,width:10,height:230},{x:400,y:380,width:10,height:10},{x:820,y:240,width:10,height:50},{x:730,y:130,width:10,height:50},{x:640,y:310,width:10,height:80},{x:530,y:300,width:10,height:10},],noJumps:[{x:830,y:140,width:20,height:250},{x:710,y:10,width:20,height:170},{x:710,y:180,width:20,height:150},{x:730,y:180,width:10,height:150},{x:730,y:10,width:10,height:120},{x:820,y:140,width:10,height:100},{x:820,y:290,width:10,height:100},],neurotoxin:[{x:410,y:320,width:230,height:70,clouds:[{x:577,y:332},{x:438,y:334},{x:420,y:377},{x:464,y:376},{x:621,y:369},{x:542,y:320},{x:552,y:323},{x:559,y:362},{x:485,y:364},{x:570,y:343},{x:623,y:331},{x:415,y:310},{x:455,y:314},{x:483,y:370},{x:483,y:328},{x:549,y:355},{x:579,y:336},{x:577,y:375},{x:571,y:323},{x:497,y:354},{x:489,y:357},{x:586,y:320},{x:425,y:360},{x:482,y:343},{x:469,y:328},{x:580,y:361},{x:551,y:360},{x:564,y:329},{x:519,y:366},{x:577,y:328},{x:599,y:338},{x:462,y:358},{x:567,y:321},{x:470,y:328},{x:623,y:314},{x:509,y:378},{x:556,y:372},{x:459,y:350},{x:479,y:366},{x:510,y:377},{x:485,y:360},]},],spikes:[],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};

world[16] = {name: 'Slip n Slide',body:"I figured I needed to make up for my outburst back there, so I added spikes to the game. <3",message:"Vienna Teng first hit fame back in 2002, with her first album Waking Hour, and she was this cute, petite and pretty Asian American making amazing msuic, and when her album came out she suddenly was shoved into the spotlights. Put onto TV shows, got a new crowd of fans, but it wasn't what she wanted. She was actually in it for the msuic. So she built up an actually strong audience, one who wasn't for her just because she was Asian, but actually because they enjoyed her msuic. During this time, Sports Illustrated actually released an article about her talking how her msuic was perfect for getting into a girl's pants through showing off your sensitive side. Everyone involved found this hilarious, and it was how she described her song 'Momentum', as a song to get into a girl's pants. This wasn't enough for me though, as it didn't seem like a song of seduction, so I decided to look into the lyrics a bit more. It's certainly a song for someone, to someone, and is definitely about love, but it doesn't seem to be purely that. The lyrics seem more about how, this lets say guy, is in love with this girl. But he doesn't just love her, he doesn't feel right without her. He doesn't feel alive unless he's with her, and so he's asking her to bring him to life, to help him not just feel, but to <i>be</i> alive. And how his entire existence and purpose in life is her. So to me, it's a bit more than just a song of seduction, but a song of expressing what true love really is.<br><br>On a dark note, it's also worth noting this version of love isn't necessarily two way. It could be a depressing song of how he's (remember that he and she could be easily flopped, or both be he's, I don't judge), hopelessly obsessed with her, but can't be with her, and so he's torturing himself.",background:images.backgrounds.slipnslide,bodies:[],player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:340,width:50,height:50},critters:[],bugs:[],bread:[{x:530,y:309,width:11,height:11,pickedUp:false,quote:'War doesn\'t determine who is right, only who is left.',subQuote:'Bertrand Russell'},],boxes:[{x:200,y:310,width:10,height:80},{x:860,y:310,width:10,height:80},{x:300,y:210,width:20,height:90},{x:450,y:210,width:20,height:90},{x:600,y:210,width:20,height:90},{x:750,y:210,width:20,height:90},{x:530,y:320,width:10,height:10},],noJumps:[],neurotoxin:[{x:210,y:340,width:650,height:50,clouds:[{x:220,y:368},{x:330,y:342},{x:666,y:341},{x:278,y:351},{x:422,y:368},{x:367,y:335},{x:203,y:340},{x:348,y:367},{x:296,y:350},{x:803,y:334},{x:437,y:331},{x:539,y:333},{x:696,y:377},{x:339,y:354},{x:673,y:359},{x:215,y:374},{x:796,y:343},{x:203,y:379},{x:832,y:367},{x:231,y:378},{x:244,y:352},{x:584,y:339},{x:374,y:367},{x:424,y:332},{x:785,y:369},{x:212,y:359},{x:473,y:364},{x:438,y:375},{x:456,y:356},{x:565,y:379},{x:299,y:348},{x:775,y:349},{x:437,y:331},{x:487,y:373},{x:527,y:341},{x:485,y:353},{x:807,y:375},{x:268,y:368},{x:589,y:349},{x:263,y:342},{x:775,y:373},{x:239,y:336},{x:452,y:332},{x:596,y:336},{x:471,y:351},{x:782,y:367},{x:591,y:334},{x:522,y:356},{x:832,y:370},{x:654,y:350},{x:568,y:368},{x:833,y:370},{x:536,y:371},{x:224,y:351},{x:550,y:363},{x:201,y:372},{x:255,y:366},{x:681,y:332},{x:446,y:340},{x:427,y:377},{x:228,y:330},{x:301,y:368},{x:381,y:357},{x:656,y:338},{x:831,y:357},{x:814,y:359},{x:818,y:362},{x:394,y:331},{x:692,y:375},{x:266,y:364},{x:341,y:370},{x:750,y:333},{x:251,y:352},{x:543,y:376},{x:392,y:369},{x:373,y:367},{x:822,y:330},{x:212,y:341},{x:700,y:343},{x:748,y:360},{x:639,y:373},{x:237,y:367},]},],spikes:[{x:305,y:200,width:undefined,height:undefined},{x:455,y:200,width:undefined,height:undefined},{x:605,y:200,width:undefined,height:undefined},{x:755,y:200,width:undefined,height:undefined},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};

world[17] = {name: 'Liar',body:"Sometimes you might feel unsure about where you are. Things don't seem to make sense, there's a path in front of you, laid out and even nicely lit, but things just aren't quite clicking. The ground keeps crumbling below you, every step you take seems to get you closer and closer but in the end you're no farther than when you started. It's now when you need to fight back, fuck this path, we're making our own. That's what the best of humanity can do is, to instead of following the same road that everyone else takes, even if it's one of a million, make a new one. Get off the path, go through the forest and forage. You might die, that happens, but you need to push. You need to fight. Life and it's fucking lemons isn't easy, it isn't nice, it isn't fair, it just is. It's up to you what you do, and how you respond. Everything rests on you.",message:"This one's really short. The Last Snowfall. The song itself isn't short at all, but the lyrics are 3 4 line 6 word stanzas (take your time while you figure out what those numbers mean). The internet has very little information on it, again, but it's a very pretty piece to me. I love the sound of it, but never looked too much at the meaning. To me it's about someone contemplating what would happen if this were the end of their relationship. What if that was the last time you kissed them? What if it were the last time you felt their hand on yours? The last time you saw their smile as they turned away? All the little things, knowing that it's not the last snowfall, but what if.",background:images.backgrounds.liar,bodies:[],player:{x:200,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:200,y:340,width:50,height:50},critters:[{xMin:650,xMax:780,x:650,y:255,height:10,width:22,speed:1,velX:1},],bugs:[],bread:[{x:715,y:89,width:11,height:11,pickedUp:false,quote:'Confidence is quiet. Insecurities are loud.',subQuote:''},],boxes:[{x:960,y:270,width:30,height:120},{x:930,y:300,width:30,height:90},{x:900,y:330,width:30,height:60},{x:870,y:360,width:30,height:30},{x:790,y:230,width:80,height:10},{x:770,y:270,width:10,height:10},{x:700,y:270,width:70,height:10},{x:650,y:270,width:50,height:10},{x:500,y:230,width:110,height:10},{x:300,y:180,width:120,height:10},{x:230,y:50,width:10,height:90},{x:230,y:20,width:10,height:30},{x:230,y:10,width:10,height:10},{x:460,y:40,width:70,height:10},],spikes:[],noJumps:[{x:710,y:100,width:20,height:80},{x:640,y:270,width:10,height:10},{x:780,y:270,width:10,height:10},{x:490,y:230,width:10,height:10},{x:610,y:230,width:10,height:10},{x:450,y:40,width:10,height:10},{x:420,y:180,width:10,height:10},{x:530,y:40,width:10,height:10},{x:290,y:180,width:10,height:10},{x:780,y:230,width:10,height:10},{x:870,y:230,width:10,height:10},],neurotoxin:[],cubes:[{x:485,y:20,width:20,height:20,pickedUp:false,placed:-1,id:0},],plates:[{x:80,y:380,width:20,height:5,activated:false,cube:-1,playerStillIn:false,id:0},{x:140,y:380,width:20,height:5,activated:false,cube:-1,playerStillIn:false,id:1},],fields:[{x:115,y:200,width: 20,height:190,targets:[0,1],opened:false},],keys:[],doors:[],goal:{x:20,y:340,width:51,height:50,action:function(){world[level].player.x=200;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=200;world[level].player.y=340;resetLevel(true);}};

// world[18] = {name: 'Definition',body:"There's no denying we feel The Third One.<br><br>We do.",message:"",background:images.backgrounds.definition,player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},bodies:[],spawn:{x:20,y:340,width:50,height:50},critters:[],bugs:[],bread:[{x:520,y:20,width:11,height:11,pickedUp:false,quote:'Sometimes you gotta break a few eggs to make an omellete',subQuote:''},],boxes:[],noJumps:[],neurotoxin:[],spikes:[],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};

// world[19] = {name: 'Fin',body:"And yet.<br><br>You got through.<br><br>Yay! This journey started light, like a game. It started casual, fun even, and it certainly never lost the gameplay aspect behind it. I figured for this gift I'm giving you, this game, I didn't really know what I wanted to do with it. I wasn't entirely sure what the story was, and truth be told it's a very short story. It's not much of a present I guess, it has no material value, and doesn't even seem focused on you. But for what it may or may not be worth to you, happy birthday CK, I hope you enjoyed your game :) thank you for playing, and now you've got to keep going. This level is behind you, and as always, time to progress to the next one, wherever it may be.",message:"The Atheist Christmas Carol. Christmas is not religious anymore, mostly, and instead is more of a season. The song is all about the season and the feelings in the air, hence the song is void of any references to Christmas, Hanukka, or any other religious holidays. It's simple, it's beautiful, it's about kinship, it's about community, even with a little warmth thrown in. The main line 'Don't forget I love you' definitely rings christmas carol and that season, but has nothing attached to the holiday, hence the name Atheist thrown in front. It's beautiful, and simple.<br>Fin.",background:images.backgrounds.fin,bodies:[],player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},neurotoxin:[],spikes:[],spawn:{x:20,y:340,width:50,height:50},critters:[{xMin:330,xMax:400,x:330,y:275,height:10,width:22,speed:1,velX:1},{xMin:330,xMax:400,x:330,y:315,height:10,width:22,speed:1,velX:1.3333},{xMin:330,xMax:400,x:330,y:355,height:10,width:22,speed:1,velX:1.6666},{xMin:610,xMax:680,x:610,y:355,height:10,width:22,speed:1,velX:1.125},{xMin:610,xMax:680,x:610,y:315,height:10,width:22,speed:1,velX:1.375},{xMin:610,xMax:680,x:610,y:275,height:10,width:22,speed:1,velX:1.625},],bugs:[{yMin:20,yMax:50,x:380,y:20,height:20,width:20,speed:1,velY:0.5},{yMin:80,yMax:110,x:380,y:80,height:20,width:20,speed:1,velY:0.5},{yMin:20,yMax:50,x:610,y:20,height:20,width:20,speed:1,velY:0.5},{yMin:80,yMax:110,x:610,y:80,height:20,width:20,speed:1,velY:0.5},],bread:[{x:495,y:379,width:11,height:11,quote:'At the end of the game, the king and the pawn go back in the same box.',subQuote:'Italian Proverb'}],boxes:[{x:130,y:250,width:120,height:40},{x:190,y:150,width:40,height:100},{x:160,y:110,width:120,height:40},{x:220,y:10,width:40,height:100},{x:350,y:110,width:70,height:40},{x:400,y:10,width:20,height:100},{x:590,y:10,width:20,height:100},{x:590,y:110,width:70,height:40},{x:320,y:250,width:100,height:20},{x:750,y:250,width:120,height:40},{x:730,y:110,width:120,height:40},{x:750,y:10,width:40,height:100},{x:780,y:150,width:40,height:100},{x:370,y:100,width:10,height:10},{x:370,y:40,width:10,height:50},{x:370,y:70,width:30,height:10},{x:260,y:10,width:490,height:10},{x:370,y:20,width:10,height:10},{x:380,y:50,width:20,height:10},{x:590,y:250,width:100,height:20},{x:400,y:270,width:20,height:120},{x:590,y:270,width:20,height:120},{x:330,y:290,width:90,height:20},{x:330,y:330,width:90,height:20},{x:590,y:290,width:90,height:20},{x:590,y:330,width:90,height:20},{x:320,y:370,width:80,height:20},{x:610,y:370,width:80,height:20},{x:630,y:100,width:10,height:10},{x:630,y:40,width:10,height:50},{x:630,y:20,width:10,height:10},{x:610,y:50,width:20,height:10},{x:610,y:70,width:20,height:10},],noJumps:[{x:380,y:60,width:20,height:10},{x:320,y:270,width:10,height:100},{x:680,y:270,width:10,height:100},{x:610,y:60,width:20,height:10},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};