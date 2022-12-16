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

const garden_scene1 = 0;
world[garden_scene1] = {
	name: "The Gardens of Bilitis",
	body: `\"Bilitis was born at the beginning of the sixth century before our era, in a mountain village situated on the banks of the Melas, towards the east of Pamphylia. This country is solemn and dreary, shadowed by heavy forests, dominated by the vast pile of the Taurus; streams of calciferous water spring from the rocks; great salt lakes remain on the highlands, and the valleys are heavy with silence." <br><br>
 - Pierre Louys, <i>Paris, August 1894</i><br><br>

 Use the arrow keys or WASD to move around. Up, W, or Space all allow you to jump.`,
	background:images.backgrounds.pixel_garden,
	// Write a historical disclaimer
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{
			x: 730,
			y: 370,
			width: 270,
			height: 30,
		},
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
	],noJumps:[],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	dialogue: {
		"start": {
			title: "Bilitis and her Gardens",
			text: `"Bilitis was born at the beginning of the sixth century before our era, in a mountain village situated on the banks of the Melas, towards the east of Pamphylia. This country is solemn and dreary, shadowed by heavy forests, dominated by the vast pile of the Taurus; streams of calciferous water spring from the rocks; great salt lakes remain on the highlands, and the valleys are heavy with silence." <br><br> - Pierre Louys, <i>Paris, August 1894</i>
`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene1].dialogue);
	},
	interactables: [
		{
			// door
			x: 310,
			y: 190,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene2;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene2;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene2 = 1;
world[garden_scene2] = {
	name: "Gardens of Bilitis",
	body: `The Second World War marked the end of one era and the beginning of another. Social, political, and even economic expectations became the unexpected. Life became tumultuous, unpredictable, and wild for all; even those who fit into the \'perfect\' places in society felt the changes across the country. The United States of America: The happiest place in the world for some, the capital of industry for others, and the most complicated balance between life and death for the rest.<br><br>

By the way, you can double jump and wall jump. Try jumping off the walls!`,
	dialogue: {
		"start": {
			title: "World War II and it's reach",
			text: `The Second World War marked the end of one era and the beginning of another. Social, political, and even economic expectations became the unexpected. Life became tumultuous, unpredictable, and wild for all; even those who fit into the \'perfect\' places in society felt the changes across the country. The United States of America: The happiest place in the world for some, the capital of industry for others, and the most complicated balance between life and death for the rest.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene2].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:970,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:970,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{
			x: 800,
			y: 100,
			width: 100,
			height: 300,
		},
		// {
		// 	x: 600,
		// 	y: 0,
		// 	width: 100,
		// 	height: 300,
		// },
		// {
		// 	x: 400,
		// 	y: 100,
		// 	width: 100,
		// 	height: 300,
		// },
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
		},
	],
	noJumps:[],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 20,
			y: 50,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene3;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene3;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene3 = 2;
world[garden_scene3] = {
	name: "Gardens of Bilitis",
	body: `Communism: every conservative American's biggest fear. The U.S. government began taking measures against homophiles and other minority groups, because those are the people who were most attracted to the potential equality that communism and socialism offered. The United States thrived off of capitalism and greed.<br><br>

You can control your speed in the air. Try tapping left and right instead of holding them for more precise control.`,
	background:images.backgrounds.pixel_garden,
	dialogue: {
		"start": {
			title: "Communism",
			text: `Communism: every conservative American's biggest fear. The U.S. government began taking measures against homophiles and other minority groups, because those are the people who were most attracted to the potential equality that communism and socialism offered. The United States thrived off of capitalism and greed.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene3].dialogue);
	},
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{x:90,y:90,width:40,height:210},
		{x:210,y:110,width:50,height:190},
		{x:360,y:130,width:30,height:170},
		{x:470,y:140,width:10,height:160},
		{x:780,y:110,width:220,height:190},
	],
	noJumps:[
		{x:130,y:90,width:10,height:210},
		{x:200,y:110,width:10,height:190},
		{x:260,y:110,width:10,height:190},
		{x:350,y:130,width:10,height:170},
		{x:390,y:130,width:10,height:170},
		{x:460,y:140,width:10,height:160},
		{x:480,y:140,width:10,height:160},
		{x:630,y:140,width:20,height:160},
		{x:770,y:110,width:10,height:190}
	],
	neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 900,
			y: 60,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene4;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene4;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene4 = 3;
world[garden_scene4] = {
	name: "Gardens of Bilitis",
	body: `Power became the biggest commodity around, with money following behind as a close second. People were being punished left and right simply for existing as themselves; as people who had to hide their sexualities, their heritage, and their entire belief systems, activism and community became a huge priority.<br><br>

You can double jump after falling off of a ledge/cliff. Don't feel too bad about skipping levels, only you can see this counter :)`,
	dialogue: {
		"start": {
			title: "Power and class discrimination",
			text: `Power became the biggest commodity around, with money following behind as a close second. People were being punished left and right simply for existing as themselves; as people who had to hide their sexualities, their heritage, and their entire belief systems, activism and community became a huge priority.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene4].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{x:600,y:120,width:10,height:160},
		{x:250,y:120,width:10,height:160},
		{x:440,y:210,width:10,height:180},
		{x:750,y:210,width:10,height:180},
		{x:250,y:10,width:10,height:110},
		{x:600,y:100,width:10,height:10},
		{x:600,y:110,width:10,height:10},
		{x:600,y:10,width:10,height:90},
		{x:750,y:110,width:10,height:100},
	],
	noJumps:[
		{x:430,y:210,width:10,height:180},
		{x:240,y:120,width:10,height:160},
		{x:590,y:120,width:10,height:160},
		{x:740,y:210,width:10,height:180},
		{x:240,y:10,width:10,height:110},
		{x:590,y:10,width:10,height:110},
		{x:740,y:110,width:10,height:100},
	],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 900,
			y: 340,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene5;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene5;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene5 = 4;
world[garden_scene5] = {
	name: "Gardens of Bilitis",
	body: "San Francisco was a city full of light and extravagance, a place for people to celebrate the post-war boom with easy living and an exciting nightlife. If you were part of the classes that felt the wealth, then you had some of the best years of your life. Unfortunately, if you were part of the communities that had limited resources like money, housing, and social acceptance, then you lost out and were set even further behind.",
	dialogue: {
		"start": {
			title: "San Francisco",
			text: `San Francisco was a city full of light and extravagance, a place for people to celebrate the post-war boom with easy living and an exciting nightlife. If you were part of the classes that felt the wealth, then you had some of the best years of your life. Unfortunately, if you were part of the communities that had limited resources like money, housing, and social acceptance, then you lost out and were set even further behind.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene5].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{x:110,y:300,width:60,height:10},
		{x:250,y:240,width:60,height:10},
		{x:420,y:180,width:70,height:10},
		{x:610,y:120,width:50,height:10},
		{x:800,y:80,width:100,height:10},
		{x:900,y:80,width:90,height:10},
	],noJumps:[],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 900,
			y: 30,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene6;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene6;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene6 = 5;
world[garden_scene6] = {
	name: "Gardens of Bilitis",
	body: `So begins the Civil Rights Movement, Gay Rights Movement, the Feminist Movement, and other movements that stood up for those with oppressed voices. Some found bigger voices that were willing to listen.`,
	dialogue: {
		"start": {
			title: "The beginning of Civil Rights",
			text: `So begins the Civil Rights Movement, Gay Rights Movement, the Feminist Movement, and other movements that stood up for those with oppressed voices. Some found bigger voices that were willing to listen.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene6].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{x:70,y:80,width:10,height:250},
		{x:160,y:10,width:10,height:190},
		{x:470,y:170,width:30,height:30},
		{x:670,y:170,width:30,height:30},
	],
	noJumps:[
		{x:80,y:80,width:10,height:250},
		{x:180,y:260,width:230,height:10},
		{x:150,y:10,width:10,height:190},
		{x:800,y:110,width:200,height:10},
		{x:80,y:10,width:10,height:20},
	],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 900,
			y: 60,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene7;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene7;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene7 = 6;
world[garden_scene7] = {
	name: "Gardens of Bilitis",
	body: "Political activist organizations grew out of social mingling groups, and the LGBT+ fight for equality was in full swing. Beginning with Chicago's Society for Human Rights, the Mattachine Society and the Daughters of Bilitis followed closely behind in the 1950s. 1955, to be precise.",
	skip2Text: `Seeing as you've skipped a few levels by now, you should know that suicide rates amongst LGBT youth as of 1989 was 3-4 times higher than that amongst non. The passing of sexuality-discriminatory legislature raises this number, and the passage of laws that recognize LGBT people as equal results in a significant reduction in the rate of attempted suicide amongst children.<br><br>

Giving up in a video game that's too hard is fine; the point is to have fun, and failing endlessly is not that. But many people didn't have the choice to skip a level, all they had was a give up option. When the world is against you because of who you are and who you love, and everything gets harder and more crushing, not everyone is strong enough to power through.`,
	dialogue: {
		"start": {
			title: "LGBT+ Fight",
			text: `Political activist organizations grew out of social mingling groups, and the LGBT+ fight for equality was in full swing. Beginning with Chicago's Society for Human Rights, the Mattachine Society and the Daughters of Bilitis followed closely behind in the 1950s. 1955, to be precise.`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene7].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:80,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[],
	noJumps:[
		{x:30,y:350,width:40,height:10},
		{x:120,y:350,width:50,height:10},
		{x:180,y:320,width:50,height:10},
		{x:260,y:250,width:40,height:10},
		{x:200,y:190,width:20,height:10},
		{x:250,y:150,width:20,height:10},
		{x:300,y:130,width:20,height:10},
		{x:360,y:110,width:20,height:10},
		{x:420,y:140,width:10,height:10},
		{x:420,y:140,width:40,height:10},
		{x:490,y:170,width:60,height:10},
		{x:580,y:200,width:30,height:10},
		{x:640,y:120,width:40,height:10},
		{x:740,y:160,width:40,height:10},
		{x:860,y:90,width:130,height:10},
	],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 930,
			y: 40,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = garden_scene8;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = garden_scene8;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const garden_scene8 = 16;
world[garden_scene8] = {
	name: "Bucolics in Pamphylia",
	body: `"Shades of the wood where she now ought to be, tell me, whence has my fair mistress strayed? --She has gone down to the plain. --Meadow, oh! tell me, where is my mistress? --She has followed the banks of the stream."<br><br>

 - Pierre Louys, Song, <i>Paris, August 1894</i>`,
	dialogue: {
		"start": {
			title: "Bucolics in Pamphylia",
			text: `"Shades of the wood where she now ought to be, tell me, whence has my fair mistress strayed? --She has gone down to the plain. --Meadow, oh! tell me, where is my mistress? --She has followed the banks of the stream."<br><br>

 - Pierre Louys, Song, <i>Paris, August 1894</i>`,
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene8].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:80,y:280,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:280,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[{x:10,y:320,width:100,height:10},{x:10,y:320,width:100,height:80},{x:100,y:330,width:10,height:10},{x:110,y:330,width:10,height:10},{x:110,y:340,width:10,height:10},{x:120,y:340,width:10,height:10},{x:110,y:350,width:10,height:10},{x:120,y:350,width:10,height:10},{x:130,y:360,width:10,height:10},{x:130,y:350,width:10,height:10},{x:140,y:360,width:10,height:10},{x:150,y:370,width:10,height:10},{x:160,y:380,width:10,height:10},{x:110,y:380,width:50,height:20},{x:110,y:360,width:40,height:30},
	],
	noJumps:[
		{x:250,y:250,width:60,height:30},
		{x:300,y:110,width:10,height:140},
		{x:80,y:160,width:20,height:20},
		{x:310,y:110,width:70,height:170},
		{x:380,y:250,width:50,height:30},
		{x:560,y:210,width:40,height:30},
		{x:470,y:10,width:10,height:140},
		{x:480,y:140,width:20,height:10},
		{x:600,y:80,width:30,height:30},
		{x:620,y:110,width:10,height:130},
		{x:600,y:210,width:20,height:30},
		{x:600,y:110,width:20,height:100},
		{x:940,y:90,width:50,height:20},
		{x:630,y:150,width:20,height:10},
		{x:790,y:150,width:20,height:10},
		{x:800,y:150,width:20,height:10},
		{x:980,y:110,width:10,height:280}
	],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 960,
			y: 40,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = apartment_scene1;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = apartment_scene1;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const apartment_scene1 = 7;
world[apartment_scene1] = { // Hello World
	name: "Your Apartment",
	body: "Your apartment is where you feel the safest, most relaxed, and warm.",
	background: images.backgrounds.apartment_interior,
	player:{
		x: 50,
		y: 340,
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
	spawn:{
		x:50,y:340,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": {
			title: "Your Apartment",
			text: "This is your apartment, where you spend many of your days.",
			options: [
				{
					text: "Get right to it",
					// Next omitted to indicate leaving the dialogue.
					next: "leave",
				}
			],
		},
	},
	onStart: () => {
		startDialogue(world[apartment_scene1].dialogue);
	},
	interactables: [
		{
			x: 75,
			y: 230,
			width: 45,
			height: 45,
			hidden: false,
			data: {
				collected: false,
			},
			image: images.newspaper,
			dialogue: {
				"start": {
					title: "The news",
					text: "You've collected today's newspaper! Read all about it (in your journal).",
					leftIcon: images.newspaper,
				},
			},
			onHit: (self) => {
				if (!self.data.collected) {
					self.data.collected = true;
					self.hidden = true;
					startDialogue(self.dialogue);
					addToInventory(world_items.newspaper);
				}
			},
		}, 
		{
			// bed
			x: 750,
			y: 230,
			width: 75,
			height: 30,
			image: images.bed,
			dialogue: {
				"start": {
					title: "Your bed",
					text: "You're tired, but you have too much to do to sleep right now.",
					leftIcon: images.bed,
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// Postit
			x: 650,
			y: 130,
			width: 40,
			height: 40,
			image: images.postit,
			dialogue: {
				// Sydney can do it.
				"start": {
					text: "You, Carmen Remedios Del Rosario, found yourself moving away from your family in Daly City a bit north into The Castro District in Eureka Valley. Your Pilipina heritage was conservative and you felt the pressure of a model minority, as your parents were first generation immigrants. How will you know who you are if your family is constantly telling you who they want you to be? Your goal is to find yourself and live your own life for once.",
					next: "a",
					rightIcon: images.player_profile,
				},
				"a": {
					text: "What attracted you to The Castro?",
					options: [
						{
							text: "The business district",
							next: "b",
						},
						{
							text: "The history",
							next: "c",
						},
					],
					leftIcon: images.player_profile,
				},
				"b": {
					text: "You desperately needed a job to survive in this cutthroat economy, but you also wanted a degree. You got accepted into San Francisco State College with a major in nursing, but you needed something to pay the bills.",
					rightIcon: images.player_profile,
				},
				"c": {
					text: "You start thinking about the history of the city and why you came here. You wanted somewhere thrilling and The Castro area seemed to fit the criteria. You also wanted to go somewhere that wasn't so supportive of the war in Vietnam. There would hopefully be a ton of places to visit and learn from.",
					rightIcon: images.player_profile,
				}
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// door
			x: 460,
			y: 130,
			width: 30,
			height: 80,
			data: {},
			image: images.door, 
			dialogue: {
				"start": {
					title: "Your door",
					text: "Would you like to leave?",
					options: [
						{
							text: "Yes",
							onClick: () => {
								// Load next level
								newLevel = garden_scene9;
							},
						},{
							text: "No",
						},
					],
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
	],
	boxes: [
		{x:570,y:260,width:420,height:10},
		{x:420,y:330,width:140,height:10},
		{x:60,y:290,width:150,height:10},
		{x:410,y:220,width:120,height:10},
		{x:200,y:300,width:10,height:40},
		{x:200,y:330,width:50,height:10},
		{x:600,y:180,width:170,height:10},
		{x:760,y:180,width:20,height:10}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: false,
	skipLevel: () => {},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const garden_scene9 = 17;
world[garden_scene9] = {
	name: "Elegies at Mytilene",
	body: `"And only women know the art of love; stay with us, Bilitis, do stay. And if you have a truly ardent spirit, you'll see your beauty as within a glass upon the bodies of your mistresses."<br><br>

 - Pierre Louys, Counsels, <i>Paris, August 1894</i>`,
	dialogue: {
		"start": {
			title: "Elegies at Mytilene",
			text: `"And only women know the art of love; stay with us, Bilitis, do stay. And if you have a truly ardent spirit, you'll see your beauty as within a glass upon the bodies of your mistresses."<br><br>

 - Pierre Louys, Counsels, <i>Paris, August 1894</i>`,
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene9].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	player:{
		x:80,y:280,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:280,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[{x:90,y:310,width:10,height:10},{x:110,y:340,width:10,height:10},{x:210,y:340,width:10,height:10},{x:120,y:270,width:10,height:10},{x:100,y:260,width:10,height:10},{x:120,y:200,width:10,height:10},{x:270,y:260,width:10,height:10},{x:180,y:310,width:10,height:10},{x:210,y:190,width:10,height:10},{x:390,y:140,width:10,height:10},{x:490,y:210,width:10,height:10},{x:380,y:300,width:10,height:10},{x:310,y:350,width:10,height:10},{x:430,y:320,width:10,height:10},{x:320,y:260,width:10,height:10},{x:250,y:170,width:10,height:10},{x:200,y:130,width:10,height:10},{x:360,y:120,width:10,height:10},{x:520,y:140,width:10,height:10},{x:380,y:220,width:10,height:10},{x:280,y:140,width:10,height:10},{x:490,y:80,width:10,height:10},{x:580,y:100,width:10,height:10},{x:610,y:200,width:10,height:10},{x:490,y:260,width:10,height:10},{x:630,y:300,width:10,height:10},{x:700,y:330,width:10,height:10},{x:730,y:350,width:20,height:10},{x:810,y:260,width:10,height:10},{x:620,y:230,width:10,height:10},{x:530,y:250,width:10,height:10},{x:620,y:130,width:10,height:10},{x:730,y:140,width:10,height:10},{x:830,y:210,width:10,height:10},{x:610,y:210,width:10,height:10},{x:820,y:250,width:10,height:10},{x:860,y:340,width:10,height:10},{x:670,y:230,width:10,height:10},{x:700,y:160,width:10,height:10},{x:510,y:110,width:10,height:10},{x:440,y:50,width:10,height:10},{x:320,y:50,width:10,height:10},{x:160,y:70,width:10,height:10},{x:130,y:130,width:10,height:10},{x:290,y:160,width:10,height:10},{x:130,y:100,width:10,height:10},{x:40,y:160,width:10,height:10},{x:90,y:240,width:10,height:10},{x:310,y:300,width:10,height:20},{x:460,y:340,width:10,height:10},{x:690,y:290,width:20,height:10},{x:790,y:340,width:10,height:10},{x:840,y:370,width:10,height:10},{x:960,y:290,width:10,height:10},{x:400,y:140,width:10,height:10},{x:340,y:210,width:10,height:10},{x:320,y:250,width:10,height:10},{x:270,y:100,width:10,height:10},{x:170,y:130,width:10,height:10},{x:360,y:60,width:10,height:10},{x:260,y:30,width:10,height:10},{x:640,y:90,width:10,height:10},{x:800,y:80,width:10,height:10},{x:850,y:130,width:10,height:10},{x:860,y:180,width:10,height:10},{x:900,y:240,width:20,height:10},{x:950,y:130,width:10,height:10},{x:970,y:290,width:10,height:10},{x:960,y:370,width:10,height:10},{x:880,y:350,width:10,height:10},{x:820,y:170,width:10,height:10},{x:720,y:110,width:10,height:10},{x:700,y:40,width:10,height:10},{x:900,y:80,width:10,height:10},{x:890,y:80,width:10,height:10},{x:910,y:80,width:10,height:10},{x:230,y:340,width:10,height:10},{x:240,y:330,width:10,height:10},{x:280,y:320,width:10,height:10},{x:300,y:310,width:10,height:10},{x:260,y:320,width:10,height:10},{x:320,y:300,width:10,height:10},{x:360,y:300,width:10,height:10},{x:240,y:160,width:10,height:10},{x:340,y:280,width:10,height:10},{x:410,y:360,width:10,height:10},],noJumps:[{x:400,y:320,width:10,height:10},{x:290,y:320,width:10,height:10},{x:580,y:300,width:10,height:10},{x:450,y:300,width:130,height:10},{x:660,y:300,width:10,height:10},{x:690,y:320,width:10,height:10},{x:620,y:300,width:10,height:10},{x:610,y:300,width:10,height:10},{x:600,y:300,width:10,height:10},{x:750,y:340,width:10,height:10},{x:710,y:340,width:10,height:10},{x:820,y:340,width:10,height:10},{x:820,y:360,width:10,height:10},{x:800,y:340,width:10,height:10},{x:760,y:340,width:10,height:10},{x:770,y:340,width:10,height:10},{x:910,y:350,width:10,height:10},{x:920,y:360,width:10,height:10},{x:940,y:360,width:10,height:10},{x:890,y:350,width:10,height:10},{x:230,y:190,width:10,height:10},{x:170,y:250,width:10,height:10},{x:260,y:260,width:10,height:10},{x:420,y:170,width:10,height:10},{x:270,y:120,width:10,height:10},{x:210,y:80,width:10,height:10},{x:60,y:80,width:10,height:10},{x:580,y:170,width:10,height:10},{x:480,y:220,width:10,height:10},{x:700,y:240,width:10,height:10},{x:780,y:310,width:10,height:10},{x:880,y:180,width:10,height:10},{x:730,y:150,width:10,height:10},{x:750,y:60,width:10,height:10},{x:890,y:90,width:10,height:10},{x:910,y:160,width:10,height:10},{x:510,y:30,width:10,height:10},{x:410,y:60,width:10,height:10},{x:440,y:140,width:10,height:10},{x:560,y:140,width:10,height:10},{x:320,y:60,width:10,height:50},{x:80,y:140,width:10,height:10},],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 900,
			y: 30,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = streets_scene;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = streets_scene;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const streets_scene = 8;
world[streets_scene] = {
	name: "Streets of San Francisco",
	body: "Castro District. Visit each building's door to apply there for a job!",
	background: images.backgrounds.street,
	player:{
		x: 50,
		y: 340,
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
	spawn:{
		x:50,y:340,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {},
	onStart: () => {
		// startDialogue(world[streets_scene].dialogue);
	},
	interactables: [
		{
			x: 155,
			y: 200, 
			width: 60,
			height: 40,
			hidden: false,
			data: {hit: false},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Office Building",
					text: "Seems boring and dark... Not here.",
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x: 400,
			y: 200, 
			width: 35,
			height: 40,
			hidden: false,
			data: {},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Some kind of... Factory?",
					text: "No hiring sign on this garage.",
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x: 510,
			y: 200, 
			width: 40,
			height: 40,
			hidden: false,
			data: {},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Grocery Mart",
					text: "Although perfect for someone of your skill level, they don't seem to be taking on new hires.",
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x: 630,
			y: 200, 
			width: 40,
			height: 40,
			hidden: false,
			data: {},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Diner",
					text: "You should really come back sometime, you can smell some savory scents wafting through the doors.",
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x: 780,
			y: 200, 
			width: 60,
			height: 40,
			hidden: false,
			data: {},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Maud's Study",
					text: "This looks like the place in the newspaper advert! Want to take a look inside?",
					options: [
						{
							text: "Yes",
							onClick: () => {
								// Load next level
								newLevel = bar_first_scene;
							},
						},{
							text: "No",
						},
					],
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			x: 940,
			y: 200, 
			width: 35,
			height: 40,
			hidden: false,
			data: {},
			// image: images.door,
			dialogue: {
				"start": {
					title: "Antiquities",
					text: "You would love to work here, but unfortunately, they show no signs of hiring. They also smell pretty dusty.",
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
	],
	boxes: [
		{x:620,y:240,width:90,height:10}, // second plat after center
		{x:500,y:240,width:60,height:10}, //mini platform center
		{x:560,y:310,width:60,height:10}, //platform to get up to center
		{x:560,y:100,width:60,height:10}, //upper platform above center
		// {x:710,y:80,width:10,height:170}, // wall 5 make it ice
		{x:310,y:160,width:10,height:80},// wall
		{x:350,y:160,width:10,height:90}, // wall 2
		{x:390,y:160,width:10,height:90}, // wall 3
		{x:430,y:10,width:10,height:230}, // wall 4
		{x:390,y:240,width:50,height:10}, // second business plat
		{x:50,y:310,width:270,height:10}, // bottom left platform
		{x:50,y:240,width:270,height:10} // upper left platform
	],
	noJumps:[
		{x:710,y:80,width:10,height:170},
		{x:760,y:240,width:100,height:10}, // second to last platform
		{x:930,y:240,width:60,height:10}, // last platform
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = bar_first_scene;
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const bar_first_scene = 9;
world[bar_first_scene] = { // Hello World
	name: "Maud's Study",
	body: "Try to take a look around and secure that job. You're going to need groceries pretty soon.",
	background: images.backgrounds.bar_interior,
	player:{
		x: 500,
		y: 340,
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
	spawn:{
		x:500,y:340,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {},
	onStart: () => {
		// startDialogue(world[bar_first_scene].dialogue);
	},
	interactables: [
		{
			x:690,y:70,width:20,height:50,
			image: images.rikki,
			data: {},
			dialogue: {
				"start": {
					title: "Owner",
					text: "\"I don't recognize you, there aren't a lot of people who walk into my bar that I don't know. What are you looking for?\"<br>You feel a bit of anxiety well up inside you, are you sure you want to go through with this?",
					leftIcon: images.rikki_profile,
					options: [
						{
							text: "Yes, I'm ready to ask for...",
							next: "list_people_first",
						},
						{
							text: "No, give me a moment.",
						}
					]
				},
				"list_people_first": {
					title: "You",
					text: "...",
					options: [
						{
							text: "\"Betty Friedan?\"",
							next: "list_people_wrong",
						},
						{
							text: "\"Rikki Streicher?\"",
							next: "list_people_right",
						},
						{
							text: "\"Barbara Gittings?\"",
							next: "list_people_wrong",
						},
					],
					rightIcon: images.player_profile,
				}, 
				"list_people_wrong": {
					title: "Owner",
					text: "\"Who now? I don't know that name here.\"",
					options: [
						{
							text: "Betty Friedan?",
							next: "list_people_wrong",
						},
						{
							text: "Rikki Streicher?",
							next: "list_people_right",
						},
						{
							text: "Barbara Gittings?",
							next: "list_people_wrong",
						},
					],
					rightIcon: images.player_profile,

				}, 
				"list_people_right": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"That's me. You still haven't answered my question. Are you ready to tell me who you are now?\"",
					leftIcon: images.rikki_profile,
					options: [ 
						{
							text: "Yes",
							onClick: () => {
								world[bar_first_scene].interactables[0].data.hit = true;
								interviewSuccess = 0;
								startDialogue(dialogue, "interview");
							}
						},
					],
				},
				"interview": {
					title: "You",
					text: "\"Hi there, Ms. Streicher! My name is Carmen. Sorry to barge in like this, but I noticed you had a hiring sign in the window. May I please have an interview?\"<br><br>\"Yes, you can give it your best shot.\"",
					rightIcon: images.player_profile,
					next: "interview_start",
				},
				"interview_start": { //add tracking for neutral, wrong, right (check page 7)
					// interviewSuccess
					title: "Elizabeth \"Rikki\" Streicher",
					text: "The owner gives you a brief up and down before showing you a more inquisitive look than before. \"I can't hire women to work behind the bar yet, but most positions are open because the draft took all of my previous workers. What kind of position are you looking for?\"",
					leftIcon: images.rikki_profile,
					rightIcon: images.player_profile,
					options: [
						{
							text: "Cook",
							next: "list_jobs_neutral",
						},
						{
							text: "Bartender",
							onClick: () => {
								// Bad option selected
								--interviewSuccess;
								startDialogue(dialogue, "list_jobs_wrong");
							}
						},
						{
							text: "Waitress",
							onClick: () => {
								// Best option selected
								++interviewSuccess;
								startDialogue(dialogue, "list_jobs_right");
							},
						},
					],
				},
				"list_jobs_neutral": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Huh, I wouldn't have guessed you were a kitchen kind of gal.\"",
					next: "experience_level",
					leftIcon: images.rikki_profile,
				},
				"list_jobs_wrong": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Weren't you listening? I just said I can't hire you behind the bar.\"",
					next: "experience_level",
					leftIcon: images.rikki_profile,
				},
				"list_jobs_right": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Yeah, I could see you here as a waitress.\"",
					next: "experience_level",
					leftIcon: images.rikki_profile,
				},
				"experience_level": {
					title: "You",
					text: "\"What kind of experience do you have?\"",
					rightIcon: images.player_profile,
					options: [
						{
							text: "\"I hated my last boss, so I only worked for a year until I could afford to move.\"",
							onClick: () => {
								// Bad option
								--interviewSuccess;
								startDialogue(dialogue, "experience_answer");
							}
						},
						{
							text: "\"I had trouble settling in my last job as a waitress, but the experience taught me loads about the position and how to work with a kitchen and other staff members.\"",
							next: "experience_answer", // this counts as neutral for tracking
						},
						{
							text: "\"As a waitress at my last job for a year, I built relationships with my coworkers, learned how to best execute my responsibilities, and serve my community with patience and kindness.\"", // this counts as positive for tracking
							onClick: () => {
								++interviewSuccess;
								startDialogue(dialogue, "experience_answer");
							}
						},
					],
				},
				"experience_answer" :{
					title: "You",
					text: "\"Hmmm... What are some of your strengths and weaknesses?\"",
					rightIcon: images.player_profile,
					options: [
					{
						text: "\"I really don't know.\"", //negative for tracking
						onClick: () => {
							--interviewSuccess;
							if (interviewSuccess < -1) {
								startDialogue(dialogue, "interview_result_failure");
							} else if (interviewSuccess < 2) {
								startDialogue(dialogue, "interview_result_neutral");
							} else {
								startDialogue(dialogue, "interview_result_success");
							}
						}
					},
					{
						text: "\"I don't know if I'm really the best judge of myself, but I'm a hard worker. However, sometimes I'm a bit shy\"",
						onClick: () => {
							// Neutral, no success change
							if (interviewSuccess < -1) {
								startDialogue(dialogue, "interview_result_failure");
							} else if (interviewSuccess < 2) {
								startDialogue(dialogue, "interview_result_neutral");
							} else {
								startDialogue(dialogue, "interview_result_success");
							}
						}
					},
					{
						text: "\"I recognize where my strengths lie as well as where I can continue to improve. As of right now, I have a strong work ethic and I'm passionate about every pursuit I take on. However, I am still not the most experienced in the bar scene and am always willing to learn more.\"", //positive for tracking
						onClick: () => {
							++interviewSuccess;
							if (interviewSuccess < -1) {
								startDialogue(dialogue, "interview_result_failure");
							} else if (interviewSuccess < 2) {
								startDialogue(dialogue, "interview_result_neutral");
							} else {
								startDialogue(dialogue, "interview_result_success");
							}
						}
					},
					],
				},
				"interview_result_failure": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"I'm pretty desperate for the help, so I'm going to give you a chance. You're also the only applicant and I've had that ad up for weeks... You better show me you can do more than that excuse of an interview. I think there's an old uniform in the back you might have to wash. Take a look around and try to get to know some of the patrons, you definitely need it. See you tomorrow afternoon.\"",
					leftIcon: images.rikki_profile,
				},
				"interview_result_neutral": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Not sure if it was new girl jitters, but I see some heart in you. Let's get you a uniform. Try to get to know some of the patrons, I'm sure they can help you ease up. My friends Del and Phyllis would love to meet the new girl. Your first shift is tomorrow, don't be late!\"",
					leftIcon: images.rikki_profile,
				},
				"interview_result_success": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"I'm impressed, that was an excellent interview and I can't wait to have you on my team. Let me get your uniform from the back, in the meantime, why don't you meet my friends Del and Phyllis over there, the two gals in black and red near each other, they'll give you the social rundown. Your first shift isn't until tomorrow, but you should get to know the place first. Relax!\"",
					leftIcon: images.rikki_profile,
				},
				"del_phyllis_reminder": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Go look for Del and Phyllis before you head home!\"",
					leftIcon: images.rikki_profile,
				},
				"del_phyllis_reminder_better": {
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Go look for Del and Phyllis before you head home! They're the couple in black and red together.\"",
					leftIcon: images.rikki_profile,
				},
			},
			onHit: (interactable) => {
				if (!interactable.data.hit) {
					startDialogue(interactable.dialogue);
				} else {
					if (interviewSuccess < 2) {
						startDialogue(interactable.dialogue, "del_phyllis_reminder");
					} else {
						startDialogue(interactable.dialogue, "del_phyllis_reminder_better");
					}
				}
			}
		},
		{  
			x:180,y:240,width:20,height:50,
			image: images.delmartin,
		},
		{
			x:250,y:240,width:20,height:50,
			image: images.phyllis,
		},
		{
			x:180,y:230,width:90,height:60,
			// first person Del: link Del and Phyllis dialogue
			hidden: true,
			image: images.newspaper,
			data: {hit: false},
			dialogue: {
				"start": {
					// Default if they haven't had the interview yet
					title: "Bar Patrons",
					text: "Hello there!",
					leftIcon: images.delmartin_profile,
					rightIcon: images.phyllis_profile,
				},
				"post_interview": {
					// If they've had the interview
					title: "Phyllis Lyon",
					text: "\"Hey darl', are you on the make or what's going on? Saw you talking to Rikki over there.\"",
					next: "phyllis_next",
					leftIcon: images.phyllis_profile,
				},
				"phyllis_next": {
					title: "You",
					text: "\"Hi there, I just got hired as part of the crew. Ms. Streicher suggested I meet some new people since I'm new to the area. She said you kind ladies could help?\"",
					next: "del_next2",
					rightIcon: images.player_profile,
				},
				"del_next2": {
					title: "Del Martin",
					text: "\"Oh, don't you let Rikki hear you calling her that. She appreciates the respect, but it'll make her feel a bit beyond her years. My... <i><b>Friend</b></i> and I have a women's group that meets here on occasion. You'll meet some ladies I think you'll find you really relate to.' She gives you a not so subtle wink, but you don't think too much of it for now. You started feeling drowsy, so you say your goodbyes and quickly grab your new uniform from Ms. Str... You mean Rikki.\"",
					next: "rikki_leave",
					leftIcon: images.delmartin_profile,
				},
				"rikki_leave":{
					title: "Elizabeth \"Rikki\" Streicher",
					text: "\"Welcome aboard, lady. Seems like you and the gals got along swimmingly! Get some rest, you'll have a long day tomorrow.\" She shows you a mischievous smile followed by a knowing wink, except you didn't know why everyone was winking at you. And you weren't really sure why it was going to be that long.",
					options: [
						{
							text: "Head home",
							onClick: () => {
								newLevel = apartment_night_scene;
							}
						}
					],
					leftIcon: images.rikki_profile,
				},
			},
			onHit: (interactable) => {
				if (interviewSuccess !== null) {
					startDialogue(interactable.dialogue, "post_interview");
				} else if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x:500,y:280,width:20,height:50,
			image: images.barpatron1,
			dialogue: {
				"start": {
					title: "Bar Patron",
					text: "\"Hello dear, how are you today?\"",
					leftIcon: images.barpatron1_profile,
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			x:800,y:220,width:20,height:40,
			image: images.barpatron2,
			dialogue: {
				"start": {
					title: "Bar Patron",
					text: "\"Hey doll!\"",
					leftIcon: images.barpatron2_profile,
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			x:730,y:260,width:20,height:50,
			image: images.barpatron3,
			dialogue: {
				"start": {
					title: "Bar Patron",
					text: "\"The owner might seem a bit firm, but she's a real lovebug.\"",
					leftIcon: images.barpatron3_profile,
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		}, 
	],
	boxes: [
		{x:0,y:290,width:370,height:10},
		{x:610,y:310,width:280,height:10},
		{x:780,y:260,width:210,height:50},
		{x:890,y:310,width:100,height:10},
		{x:600,y:120,width:280,height:10},
		{x:440,y:160,width:60,height:10},
		{x:320,y:200,width:70,height:10},
		{x:270,y:200,width:60,height:10},
	],
	noJumps:[
		
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: false,
	skipLevel: () => {},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const apartment_night_scene = 10;
world[apartment_night_scene] = { // Apartment after bar
	name: "Your Apartment",
	body: "You're quite tired. Go to bed.",
	background: images.backgrounds.apartment_interior,
	player:{
		x: 50,
		y: 340,
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
	spawn:{
		x:50,y:340,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": {
			title: "Inner dialogue",
			text: "With a small bit of sweat dripping down your back and your legs screaming at you to get more exercise from the long bike ride, you take a deep breath before throwing yourself into your apartment. You take a look around your apartment and notice dust beginning to settle, but you cannot find the energy to bother.",
			rightIcon: images.player_profile,
		},
	},
	onStart: () => {
		startDialogue(world[apartment_night_scene].dialogue);
	},
	interactables: [
		{
			// bed
			x: 750,
			y: 230,
			width: 75,
			height: 30,
			image: images.bed,
			dialogue: {
				"start": {
					title: "Your bed",
					text: "You spot your bed and make what some would call a mad dash, others a pathetic crawl, to the pillowy comfort of sleep. Well, not quite. As exhausted as you might be, you felt like you had some things to reflect on. What do you want to figure out tonight, and what do you want to leave for another day?",
					leftIcon: images.bed,
					options: [
						{
							text: "New job?",
							next: "job_thought",
						},
						{
							text: "Women's group?",
							next: "women_thought",
						},
						{
							text: "School?",
							next: "school_thought",
						},
					],

				}, 
				"job_thought": {
					title: "Thoughts on your new job",
					text: "I start my new job tomorrow and I'm pretty nervous. I'm not sure what exactly I should expect. I know I'm going to meet loads of people that Rikki cares about and I need to be prepared. But what she said before the interview bothered you quite a bit. You knew it was illegal to apply for the position of bartender, and many other male-dominated fields, but it didn't make sense to you how she, a woman, could own a bar but couldn't hire other women to work behind the bar. You thought about the sexism in the workforce and you wished there was more you could do about it. This is why you wanted to get away from your family; they accepted traditionalism and conservative perspectives. As conservative catholics, they pushed a lot of political and economic rhetoric onto me. As a student, I researched and found where I want to be in the world and that's in one of the most liberal areas of California. Anyway, the excitement of today finally wore off and you felt yourself drift off to sleep.",
					rightIcon: images.player_profile,
					options: [
						{
							text: "Sleep...",
							onClick: () => {
								newLevel = garden_scene10;
							}
						}
					]
				},
				"women_thought": {
					title: "Thoughts on the women's group",
					text: "What kind of women's group is this? Del mentioned it would be held after my shift, but I'm not sure what I should expect. Del and Phyllis were kind enough to invite me and said it would be a great way to make 'friends' but their tone was suggestive and made me think a little more on what they meant by that. You also got a couple of winks, was there something about the people in the bar that you didn't know about? Your questioning thoughts are interrupted by a sudden realization. Homophiles! How did you not realize this sooner? With the secret touches and hidden whispers, it should have been obvious. So why did they invite you? You aren't attracted to the same sex, are you? You think about the potential issues that might come of you going to the meeting tomorrow night. You could get arrested, as lesbianism is illegal, But you wanted to know more at the same time. Homophobia didn't make sense to you. You were going to go, just to investigate. With those final thoughts drifting away, you're finally able to fall asleep.",
					rightIcon: images.player_profile,
					options: [
						{
							text: "Sleep...",
							onClick: () => {
								newLevel = garden_scene10;
							}
						}
					]
				},
				"school_thought": {
					title: "Thoughts on college",
					text: "You have classes tomorrow and you're pretty nervous. You have no idea what you should expect, but you know you need to be prepared. You finished the preparatory readings yesterday, but you still felt like you were missing something. You want to find somewhere on campus, or some group that you can meet to make friends on campus. As nice as the ladies are at the bar, you also wanted to get the college experience with people your own age. You've heard rumors of an organization called the Phillipine American Collegiate Endeavor or, PACE, that advocates for the Filipino-American students. You also remember hearing about the Third World Liberation Front and how they joined together to fight racism. You have noticed that it's sometimes difficult for you to apply for office and higher paying jobs even with your spectacular school records. You're just lucky you got accepted into San Francisco State College, even though you have to take the bus. You'll have to see if they have flyers about their meetings tomorrow. With those last thoughts, you begin to drift off to sleep. ",
					rightIcon: images.player_profile,
					options: [
						{
							text: "Sleep...",
							onClick: () => {
								newLevel = garden_scene10;
							}
						}
					]
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			},
		},
		{
			// Postit
			x: 650,
			y: 130,
			width: 40,
			height: 40,
			image: images.postit,
			dialogue: {
				// Sydney can do it.
				"start": {
					text: "You, Carmen Remedios Del Rosario, found yourself moving away from your family in Daly City a bit north into The Castro District in Eureka Valley. Your Pilipina heritage was conservative and you felt the pressure of a model minority. How will you know who you are if your family is constantly telling you who they want you to be? Your goal is to find yourself and live your own life for once.",
					next: "a",
					rightIcon: images.player_profile,
				},
				"a": {
					text: "What attracted you to The Castro?",
					options: [
						{
							text: "The business district",
							next: "b",
						},
						{
							text: "The history",
							next: "c",
						},
					],
					rightIcon: images.player_profile,
				},
				"b": {
					text: "You desperately needed a job to survive in this cutthroat economy, but you also wanted a degree. You got accepted into San Francisco State College with a major in nursing, but you needed something to pay the bills.",
					rightIcon: images.player_profile,
				},
				"c": {
					text: "You start thinking about the history of the city and why you came here. You wanted somewhere thrilling and The Castro area seemed to fit the criteria. There would hopefully be a ton of places to visit and learn from.",
					rightIcon: images.player_profile,
				}
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// door
			x: 460,
			y: 130,
			width: 30,
			height: 80,
			data: {},
			image: images.door, 
			dialogue: {},
			onHit: (interactable) => {
				// startDialogue(interactable.dialogue);
			}
		},
	],
	boxes: [
		{x:570,y:260,width:420,height:10},
		{x:420,y:330,width:140,height:10},
		{x:60,y:290,width:150,height:10},
		{x:410,y:220,width:120,height:10},
		{x:200,y:300,width:10,height:40},
		{x:200,y:330,width:50,height:10},
		{x:600,y:180,width:170,height:10},
		{x:760,y:180,width:20,height:10}
	],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: false,
	skipLevel: () => {},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const garden_scene10 = 18;
world[garden_scene10] = {
	name: "Epigrams in the Isle of Cyprus",
	body: `"If one has suffered, I can scarcely feel it. If one has loved, I love more than she. I sing my flesh and my life, and not the sterile shades of buried lovers. Stay softly couched, oh, my body, according to your voluptuous mission! Taste daily joys and passions whose tomorrow never comes. Leave no pleasure unexplored, lest you regret the evening of your death."<br><br>

 - Pierre Louys, SONG, Paris, August 1894`,
	dialogue: {
		"start": {
			title: "Epigrams in the Isle of Cyprus",
			text: `"If one has suffered, I can scarcely feel it. If one has loved, I love more than she. I sing my flesh and my life, and not the sterile shades of buried lovers. Stay softly couched, oh, my body, according to your voluptuous mission! Taste daily joys and passions whose tomorrow never comes. Leave no pleasure unexplored, lest you regret the evening of your death."<br><br>

 - Pierre Louys, SONG, Paris, August 1894`
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene10].dialogue);
	},
	background:images.backgrounds.pixel_garden9,
	player:{
		x: 750,
		y: 250,
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
	critters:[],bugs:[],
	boxes:[
		{x:590,y:300,width:380,height:10},
		{x:830,y:210,width:130,height:90},
		{x:960,y:210,width:50,height:100},
		{x:550,y:180,width:150,height:10},
		{x:580,y:100,width:310,height:10},
		{x:440,y:10,width:10,height:280},
		{x:150,y:280,width:290,height:10},
		{x:10,y:170,width:310,height:10},
		{x:220,y:90,width:10,height:80},
		{x:270,y:90,width:10,height:80},
		{x:0,y:80,width:80,height:10},
	],
	noJumps: [],
	neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// door
			x: 50,
			y: 30,
			width: 10,
			height: 50,
			data: {},
			image: images.door,
			onHit: (interactable) => {
				newLevel = campus_scene;
			}
		},
	],
	canSkip: true,
	skipLevel: () => {
		total_skips++;
		newLevel = campus_scene;
	},
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const campus_scene = 11;
world[campus_scene] = { // On campus
	name: "Where do you protest?",
	body: "You see a few groups of students protesting already, but also some counter-protesters terrorizing them. Which group stands out the most to you?",
	background: images.backgrounds.college_campus,
	player:{
		x: 510,
		y: 340,
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
	spawn:{
		x:510,y:340,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": {
			title: "On your way to class...",
			text: "On your way to class, you think about how disappointing your college experience has been so far. You're tired of the dirty looks from your white classmates and boys who terrorize you for knowing the answers. You were a transfer student trying to get into medical school. Not many programs were willing to accept someone who was Pilipina and female, no matter how hard you worked. You had your Bachelor's of Science already, but you wanted to become at least a nurse. You weren't sure if you would be able to, but it was worth a try. You got to campus pretty early, so you decide to look around.",
		},
	},
	onStart: () => {
		startDialogue(world[campus_scene].dialogue);
	},
	interactables: [
		{
			x: 20,
			y: 45,
			width: 25,
			height: 25,
			hidden: false,
			data: {
				collected: false,
			},
			image: images.flyer,
			dialogue: {
				"start": {
					title: "Flyer",
					text: "You've found a flyer for something interesting! Check it out in your inventory.",
					leftIcon: images.flyer,
				},
			},
			onHit: (self) => {
				if (!self.data.collected) {
					self.data.collected = true;
					self.hidden = true;
					startDialogue(self.dialogue);
					addToInventory(world_items.liberation_flyer);
				}
			},
		}, 
		{
			// Women's Liberation, make it so you can only interact once and you move on to the next level once visiting all groups except the bad one (don't need nazi's to move on)
			x: 300,
			y: 340,
			width: 100,
			height: 50,
			image: images.women_crowd,
			dialogue: {
				"start": {
					title: "Women's Liberation Front",
					text:"The women gather around you and you become filled with empowerment, as someone forces a sign into your hand and you're now committed to the Women's Liberation Movement. Do you join their cause? (You can check out the other groups first)",
					options: [
						{
							text: "Join the Women's Libration Front",
							onClick: () => {
								newLevel = bilitis_meeting_scene;
							},
						},
						{
							text: "I'm not ready to commit just yet, but maybe",
						},
					]
				}
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// Gay and Lesbian Power
			x: 300,
			y: 250,
			width: 100,
			height: 50,
			image: images.lgbt_crowd,
			dialogue: {
				"start": {
					title:"Gay and Lesbian Power",
					text:"You go up to the group only to be given a sign that you feel you need to hold up. Some people smile at you, while others continue with their demonstration. You feel like you belong and you realize why you've never had a successful boyfriend.",
					options: [
						{
							text: "Join the Gay and Lesbian Power",
							onClick: () => {
								newLevel = bilitis_meeting_scene;
							},
						},
						{
							text: "I'm not ready to commit just yet, but maybe",
						},
					]
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// Third World Liberation Front
			x: 800,
			y: 200,
			width: 100,
			height: 50,
			image: images.thirdworld_crowd,
			dialogue: {
				"start": {
					title:"Students for Ethnic Studies",
					text:"You look around and notice faces that look similar to what you grew up with. You feel like you fit in for once and you're surrounded by your culture. You found what you were looking for in the city.",
					options: [
						{
							text: "Join the Students for Ethnic Studies",
							onClick: () => {
								newLevel = bilitis_meeting_scene;
							},
						},
						{
							text: "I'm not ready to commit just yet, but maybe",
						},
					]
				},
			},
			onHit: (interactable) => {
				startDialogue(interactable.dialogue);
			}
		},
		{
			// Nazis
			x: 800,
			y: 340,
			width: 100,
			height: 50,
			image: images.nazi_crowd,
			dialogue: {
				"start": {
					title:"Counter-Protesters",
					text:" The angry group looks at you with unadulterated hatred, and beyond getting some threats as you continue walking up, you almost immediately get attacked even as the other groups tried defending you. You could have avoided all of this if you had picked a group that actually wanted to help people like you.",
					options: [
						{
							text: "Learn your lesson...",
							onClick: () => {
								isMaybeNazi = true;
							}
						}
					]
				},
				"lesson_learned": {
					title: "Counter-Protesters",
					text: "You should probably steer clear of this group, they don't welcome your kind.",
				},
			},
			onHit: (interactable) => {
				if (!isMaybeNazi) {
					startDialogue(interactable.dialogue);
				} else {
					startDialogue(interactable.dialogue, "lesson_learned");
				}
			}
		},
	],
	boxes: [
		{x:700,y:250,width:10,height:60},
		{x:710,y:250,width:280,height:10},
		{x:0,y:70,width:70,height:10},
		{x:410,y:150,width:10,height:240},
		{x:760,y:120,width:10,height:40},
		{x:760,y:120,width:230,height:10},
		{x:160,y:200,width:250,height:10},
		{x:160,y:300,width:250,height:10},
	],
	noJumps:[
		{x:190,y:90,width:20,height:20},
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: false,
	skipLevel: () => {},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const bilitis_meeting_scene = 12;
world[bilitis_meeting_scene] = { // Hello World
	name: "Maud's Study",
	body: "Get to work, play later.",
	background: images.backgrounds.bar_interior,
	player:{
		x: 650,
		y: 240,
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
	spawn:{
		x:650,y:240,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": {
			title: "Inner Dialogue",
			text: "Barely remembering how class went from the adrenaline rush of the demonstrations, you feel yourself rushing to use the energy at work. You didn't have high expectations of your job, but you were desperate to go to the women's meeting that followed. You feel involved in the community and you have a better understanding of what to expect from Phyllis and Del's group. Your job was pretty simple, but you forgot how tiring it is to wash the same dishes over and over again. You were just grateful for the money and family-like environment.",
			next: "inner_dialogue_2",
		},
		"inner_dialogue_2": {
			title: "Inner Dialogue",
			text: "After work finishes, you look around the bar and notice a large group forming. That must be it! You walk over and notice even more women sending flirty glances to their partners. Golly, you were dense yesterday. You hear Del whistle in your direction and motion you over in a polite but encouraging fashion. She asks you to introduce yourself and you proceed to do so.",
			next: "introduction_meeting",
		},
		"introduction_meeting": {
			title: "Daughters of Bilitis Meeting",
			text: "\"Hello everyone, my name is Carmen Del Rosario and I'm glad to be here. I'm fairly new to this scene, unfortunately. I do hope to learn more and I can't wait to meet everyone!\"",
		    rightIcon: images.player_profile,
			next: "group_response",
		},
		"group_response": {
			title: "...",
			text: "The group smiles at you in a welcoming manner, then begins the meeting. It was a lot of notes on past meetings, upcoming events and protests, sports games, and charity opportunities. The president, which you've now learned is where Del sat, gave a brief history of the group for you to understand why activism was so important.",
			next: "dob_history",
		},
		"dob_history": {
			title: "Del Martin",
			text: "\"So, we all started officially in 1955 with Rosalie Bamberger, well we called her Rose at the time, and her partner, Rosemary Sliepen. She's actually Filipina too, you know. I think she's off doing workers' union stuff now, she left about a year after we started the Daughters of Bilitis. That's when we needed to find another place to meet. Their place was home for a while, but then we hosted. Then Rikki opened this place in '66, which was a lifesaver. It's been our safe house ever since. Here's a copy of our August issue, <i>The Ladder</i>. Take care of it, kid. Don't let it fall into the wrong hands.\"",
			options: [
				{
					text: "Take the article.",
					onClick: () => {
						addToInventory(world_items.the_ladder_august);
						startDialogue(dialogue, "notify_pamphlet");
					}
				}
			]
		},
		"notify_pamphlet": {
			title: "...",
			text: "You received the August issue of <i>The Ladder</i>!",
			next: "goodbye_bar",
		},
		"goodbye_bar":{
			title: "Inner Monologue",
			text: "You felt the meeting starting to come to a close and you look around as some women stayed while others said their goodbyes to Rikki. You make eye contact with a woman and she saunters over to your side. You two make small talk and share quiet laughs. <i>Lisa</i>. You hope you can see her again, you felt a real connection. It dawns on you that it's been at least an hour and it's well past when you would normally go to sleep. The room was starting to dim and the light tapping of glass against wooden tables started to quiet down. Unluckily for the remaining women, none of this happened soon enough. You heard a door slam open and a swarm of people decked out in blue with guns and batons came pouring in.",
			options: [
				{
					text: "Click to continute...",
					onClick: () => {
						newLevel = bar_raid_scene;
					}
				}
			]
		}
	},
	onStart: () => {
		startDialogue(world[bilitis_meeting_scene].dialogue);
	},
	interactables: [ // include a group of women
		{
			x:690,y:70,width:20,height:50,
			image: images.rikki,
		},
		{
			x:600,y:230,width:20,height:50, // first person Del: link Del and Phyllis dialogue
			image: images.delmartin,
		},
		{
			x:650,y:230,width:20,height:50, // second person Phyllis
			image: images.phyllis,
		},
		{
			x:670,y:260,width:20,height:50,
			image: images.barpatron1,
		},
		{
			x:800,y:220,width:20,height:50,
			image: images.barpatron2,
		},
		{
			x:730,y:260,width:20,height:50,
			image: images.barpatron3,
		}, 
	],
	boxes: [
		{x:0,y:290,width:370,height:10},
		{x:610,y:310,width:280,height:10},
		{x:780,y:260,width:210,height:50},
		{x:890,y:310,width:100,height:10},
		{x:600,y:120,width:280,height:10},
		{x:440,y:160,width:60,height:10},
		{x:320,y:200,width:70,height:10},
		{x:270,y:200,width:60,height:10},
	],
	noJumps:[
		
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const bar_raid_scene = 13;
world[bar_raid_scene] = { // Hey if they pick attempting to run away with everyon else, then they need a difficult police officer level. If they Turn themselves in, then they go to the police station scene instead.
	name: "Maud's Study",
	body: "What is happening? Police are all over the place.",
	background: images.backgrounds.bar_interior,
	player:{
		x: 750,
		y: 250,
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
	spawn:{
		x:750,y:250,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": {
			title: "Police Raid",
			text: "Rikki opens up the back door, and screams for everyone to run. You'd never been chased by police before, let alone done something so outright against the law. An ignorant law, but still the law. You look at your options, what do you want to do?",
			options: [
				{
					text: "Attempt to run away with everyone else.",
				},
				{
					text: "Turn yourself in.",
					onClick: () => {
						newLevel = police_station_scene;
					}
				},
			],
		},
		"friend_retcon": {
			title: "Oh no!",
			text: "Your friend got caught by the police! Let's see if you can escape without getting caught now."
		}
	},
	onStart: () => {
		startDialogue(world[bar_raid_scene].dialogue);
	},
	interactables: [
		{
			x:60,y:120,width:20,height:50,
			image: images.rikki,
		},
		{
			x:350,y:230,width:20,height:50, // first person Del: link Del and Phyllis dialogue
			image: images.delmartin,
			data: {hit: false},
			dialogue: {
				"start": {
					title: "Scared Patron",
					text: "Run run!! You're almost there! Head for Rikki!",
				}
			},
			onHit: (interactable) => { // Load the alley level
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x:120,y:280,width:20,height:50, // second person Phyllis
			image: images.phyllis,
		},
		{
			x:500,y:160,width:20,height:50,
			image: images.barpatron1,
			data: {hit: false},
			dialogue: {
				"start": {
					title: "Scared Patron",
					text: "Watch out for the two ahead, they're fast!!",
				}
			},
			onHit: (interactable) => { // Load the alley level
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		},
		{
			x:800,y:220,width:20,height:50,
			image: images.barpatron2,
		},
		{
			x:850,y:160,width:20,height:50,
			image: images.barpatron3,
			data: {hit: false},
			dialogue: {
				"start": {
					title: "Scared Patron",
					text: "Get going! Head for the door in the back!",
				}
			},
			onHit: (interactable) => { // Load the alley level
				if (!interactable.data.hit) {
					interactable.data.hit = true;
					startDialogue(interactable.dialogue);
				}
			}
		}, 
		{
			// door
			x: 50,
			y: 30,
			width: 30,
			height: 80,
			data: {},
			image: images.door, 
			dialogue: {},
			onHit: (interactable) => { // Load the alley level
				newLevel = alley_scene;
			}
		},
		// Policemen
		{
			x:580,y:110,width:30,height:75,
			image: images.policeman1_static,
			onHit: (interactable) => {
				// Reset the player back, and display "your friend got caught! your turn to escape" dialogue
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:600,y:210,width:30,height:75,
			image: images.policeman2_static,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:230,y:50,width:20,height:40,
			minY: 1,
			maxY: 130,
			currentSpeed: .05,
			image: images.policeman1_static,
			upImage: images.policeman1_back,
			downImage: images.policeman1_static,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:200,y:200,width:15,height:30,
			maxY: 250,
			minY: 180,
			currentSpeed: .05,
			image: images.policeman2_static,
			upImage: images.policeman2_back,
			downImage: images.policeman2_static,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:290,y:200,width:15,height:30,
			maxY: 250,
			minY: 180,
			currentSpeed: .07,
			image: images.policeman1_static,
			upImage: images.policeman1_back,
			downImage: images.policeman1_static,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:160,y:370,width:15,height:45,
			maxX: 900,
			minX: 100,
			currentSpeed: .25,
			image: images.policeman1_static,
			rightImage: images.policeman1_right,
			leftImage: images.policeman1_left,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
		{
			x:760,y:370,width:15,height:45,
			maxX: 900,
			minX: 100,
			currentSpeed: .2,
			image: images.policeman2_static,
			rightImage: images.policeman2_right,
			leftImage: images.policeman2_left,
			onHit: (interactable) => {
				startDialogue(world[bar_raid_scene].dialogue, "friend_retcon");
				world[bar_raid_scene].player.x = 750;
				world[bar_raid_scene].player.y = 250;
				world[bar_raid_scene].player.velX = world[bar_raid_scene].player.velY = 0;
			}
		},
	],
	boxes: [
		{x:590,y:300,width:380,height:10},
		{x:830,y:210,width:130,height:90},
		{x:960,y:210,width:50,height:100},
		{x:550,y:180,width:150,height:10},
		{x:580,y:100,width:310,height:10},
		{x:440,y:10,width:10,height:280},
		{x:150,y:280,width:290,height:10},
		{x:10,y:170,width:310,height:10},
		{x:220,y:90,width:10,height:80},
		{x:250,y:90,width:10,height:80}
	],
	noJumps:[
		{x:230, y:90, width:20, height:10},
	],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	canSkip: true,
	skipText: "Give up",
	skipLevel: () => {
		total_skips++;
		newLevel = police_station_scene;
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const alley_scene = 14;
world[alley_scene] = { // The alley
	name: "The Alley Behind Maud's",
	body: "You made it out... but just barely.",
	background: images.backgrounds.alley2,
	player:{
		x: 450,
		y: 240,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		doubled: false,
		grounded: false,
		hasCube: -1,
		hidden: true,
	},
	spawn:{
		x:450,y:240,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": { //connect from door after fight scene
			title: "The Alley",
			text: "After escaping the cops, you hid in the alley behind the bar and Rikki talks to you.<br><br>\"Work is cancelled for the next few days, doll. I gotta do some legal clean-up and it would be best for someone like you if you weren't involved at all.\"",
			leftIcon: images.rikki_profile,
			options: [
				{
					title: "You",
					text: "\"I know I just started, but I want to help you! You hired me despite my skin color and you helped me find a group that I can belong to. Please let me do anything that can lighten your load.\"",
					next: "rikki_reply1",
				},
				{
					title: "You",
					text: "\"Maybe you're right; I guess I'm already in a dangerous enough position as it is. Please tell me if you need anything, I'm just a phone call away. And possibly a bit of a bike ride.\"",
					next: "rikki_reply2",
					
				}
			],
			rightIcon: images.player_profile,
		},
		"rikki_reply1": {
			title: "Elizabeth \"Rikki\" Streicher",
			text: "Rikki gives you a warm smile and shrugs, \"Sweetheart, I really appreciate the thought but it would really be best if you just get out of here. It gives me one less thing to worry about, alrighty? We all need some sleep and we'll try to meet again tomorrow. I do want to ask without prying too much, but I noticed you and Lisa hit it off earlier. She's a bit of a firecracker, shows up to every demonstration. I think she has a degree in law? Do you have plans to court her?\"",
			leftIcon: images.rikki_profile,
			next: "your_reply_1",
		},
		"rikki_reply2": {
			title: "Elizabeth \"Rikki\" Streicher",
			text: "Rikki briefly stops you by the shoulder, \"Before you leave, start by talking to her!\" You give Rikki a questioning glance until you notice Lisa, the girl you were bonding with earlier. A blush covers your warm cheeks and you shyly go up to her. By the end of the night, you figure out how you can be the best version of your real self. You think about how you never would have found this community if it wasn't for the Castro District move and how you would have eventually married a man despite your attraction for women only. You look at Lisa and she is the most beautiful thing in the world; you feel true desire for the first time in your life. You can't count your kindergarten first crush on Lucy Johnson, but you should have taken it as a sign. You're going to fight for your right to love who you want and no one can stop you.",
			leftIcon: images.rikki_profile,
			next: "best_end",
		},
		"your_reply_1": {
			title: "You",
			text: "You laugh at her pun amidst the havoc coming to a close inside. Is now really the time to ask things like that? You thought you were going to die, so you might as well answer. You feel invincible. \"I think Lisa and I got along pretty well, but I'm not sure how to go about this. I've barely dated men, let alone women. How do I even start?\"",
			rightIcon: images.player_profile_blushing,
			next: "rikki_encouragement",
		},
		"rikki_encouragement": {
			title: "Lisa and You",
			text: "Rikki laughs in response and motions down the alley, \"Start by talking to her!\" You realize that Lisa likely heard all of your conversation and you feel your cheeks redden at the thought. You attempt a confident smile as you go up to her and, eventually, figure out how to be the best version of your real self. You think about how you never would have found this community if it wasn't for the Castro District move and how you would have eventually married a man despite your attraction for women only. You look at Lisa and she is the most beautiful thing in the world; you feel true desire for the first time in your life. You can't count your kindergarten first crush on Lucy Johnson, but you should have taken it as a sign. You're going to fight for your right to love who you want and no one can stop you.",
			leftIcon: images.rikki_profile,
			rightIcon: images.player_profile_blushing,
			next: "best_end",
		},
		"best_end": { // I might want this as a whole new scene????? I want to do something that breaks up this massive block, it looks horrible.
			title: "Fall of 2008",
			text: "As an active participant in many of the demonstrations, charities, and legislation that got you and your fiancee here today, you were excited that you got to see your impact on the gay and lesbian communities. To think your motivation began with a police raid 40 years ago; man, you were an old woman now. You finally get to marry the love of your life in a Catholic Church, something you dreamed of but never thought possible. Lisa, your light in the darkness, kept you going all these years. She kept telling you just how close legislation was getting in California and she convinced you to stay in the Castro District, even when it was dangerous. You never told your family, mostly because you didn't want Lisa to get in trouble and you knew they would never support you. They wanted you to forget your heritage by blending in with other 'Americans' who were white. You thought your best bet was to get into medical school, which you did, but instead of becoming a nurse like your family wanted, you became a Cardiothoracic surgeon. While volunteering during your residency, you realized that you wanted to help communities that experienced what you did. You wanted to show people that as a medical professional, you would never turn someone away simply because they're part of the LGBT+ community. You wanted equality and now you finally have something close. The future looks bright, but you know you and Lisa have loads of work ahead of you.",
			rightIcon: images.player_profile,
			options: [
				{
					text: "Click to continue...",
					onClick: () => {
						newLevel = garden_scene11;
					}
				}
			]
		},
	},
	onStart: () => {
		startDialogue(world[alley_scene].dialogue);
	},
	interactables: [
	],
	boxes: [],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const police_station_scene = 15;
world[police_station_scene] = { // Police station
	name: "The police station",
	body: "You turned yourself in",
	background: images.backgrounds.police_station,
	player:{
		x: 450,
		y: 240,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		doubled: false,
		grounded: false,
		hasCube: -1,
		hidden: true,
	},
	spawn:{
		x:450,y:240,width:50,height:50
	},
	bodies:[],
	critters:[],
	bugs:[],
	dialogue: {
		"start": { //Interrogation
			title: "The Interrogation Room",
			text: "The officer interrogating you never even bothered to tell you his name. He sat you down in a cold metal chair and you had to wait for him to speak. You were trying to be honest without getting anyone else in trouble, but his next line of questioning dashed all hopes of that last statement.<br><br>\"You seem like an honest girl, want to try to make a deal? If you tell me some of the people you were with, maybe we can reduce your sentence. Just to clarify, you're being arrested for perversion and we've had an eye on Maud's for awhile now. You're looking at a few years, and you mentioned you were a college student. This isn't going to look good on your record...\"<br><br> You feel your body reacting with panic and anxiety, what do you do?",
			leftIcon: images.policeman2_profile,
			rightIcon: images.player_profile,
			options: [
				{
					title: "You",
					text: "Jeopardize your own life and sacrifice your freedom to protect the Daughters of Bilitis members?",
					next: "neutral_ending",
				},
				{
					title: "You",
					text: "Give up the names of the Daughters of Bilitis members for a chance at your own freedom?",
					next: "bad_ending",
					
				}
			],
		},
		"neutral_ending": {
			title: "Neutral Ending",
			text: "The officer looks at you in surprise and gives you a cold sneer. \"Not gonna bite, huh? Figures. Let's find you a cell.\"<br><br> You end up spending time in and out of jail. You're never able to finish your degrees, but you keep your job at the bar when you're not in shackles. You frequent D.O.B. meetings when possible, but you can't show your face at most protests without getting arrested again. You helped organize some peaceful protests throughout the 70s, but because you die early from being abused by the police force, you don't get to see potential future legislation that would let you marry women. Although this isn't the worst that could have happened, it certainly isn't the best. Try again?", //i might want this as a whole different scene? help
			leftIcon: images.policeman2_profile,
			rightIcon: images.player_profile_crying,
			options: [
				{
					text: "Rewind time...",
					onClick: () => {
						newLevel = bar_raid_scene;
					}
				}
			]
		},
		"bad_ending": {
			title: "Bad Ending",
			text: "The officer chuckles heartily and pulls out his pencil and notepad, \"Go ahead and list them, you made the right choice.\" <br><br> In reality, you did not make the right choice. The officer not only goes through with your jailing, but also takes a team to track down the other members. You feel stuck and everyone in the community resents you; you aren't able to participate in or organize any meetings, protests, or charities. You permanently set back every single minority movement because of your actions. Your life didn't improve, unfortunately. Because of your criminal record, you got kicked out of school, and obviously you got fired from the bar for turning everyone in. You had to go back to living with your parents and their judgement. You live an unfulfilling life and die relatively early due to your alcoholism. This was quite literally the worst that could have happened. Try again?",
			leftIcon: images.policeman2_profile,
			rightIcon: images.player_profile_crying,
			options: [
				{
					text: "Rewind time...",
					onClick: () => {
						newLevel = bar_raid_scene;
					}
				}
			]
		}
	},
	onStart: () => {
		startDialogue(world[police_station_scene].dialogue);
	},
	interactables: [
	],
	boxes: [],
	noJumps:[],
	neurotoxin:[],
	spikes:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

const garden_scene11 = 19;
world[garden_scene11] = {
	name: "The Tomb of Bilitis",
	body: `"Do not weep for me, you who have paused here: my funeral arrangements were sweet; the mourners scratched their cheeks; my mirrors and necklaces rest in my tomb. And now, on the pale prairies of asphodel, an impalpable shadow, I walk, and the memories of my earthly existence are the joys of my underworld life."<br><br>

 - Pierre Louys, <i>Paris, August 1894</i>`,
	dialogue: {
		"start": {
			title: "The Tomb of Bilitis",
			text: `"Do not weep for me, you who have paused here: my funeral arrangements were sweet; the mourners scratched their cheeks; my mirrors and necklaces rest in my tomb. And now, on the pale prairies of asphodel, an impalpable shadow, I walk, and the memories of my earthly existence are the joys of my underworld life."<br><br>

 - Pierre Louys, <i>Paris, August 1894</i>`,
		}
	},
	onStart: () => {
		startDialogue(world[garden_scene2].dialogue);
	},
	background:images.backgrounds.pixel_garden,
	// Write a historical disclaimer
	player:{
		x:50,y:340,
		width:16,height:45,
		speed:3,velX:0,velY:0,
		jumping:false
		,grounded:false,
		hasCube:-1
	},
	bodies:[],
	spawn:{
		x:50,y:340,width:50,height:50
	},
	critters:[],bugs:[],
	boxes:[
		{
			x: 730,
			y: 370,
			width: 270,
			height: 30,
		},
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
	],noJumps:[],neurotoxin:[],
	spikes:[],cubes:[],plates:[],fields:[],
	keys:[],doors:[],
	interactables: [
		{
			// Final bed :) gg
			x: 310,
			y: 220,
			width: 50,
			height: 20,
			data: {},
			image: images.bed,
			onHit: (interactable) => {
				newLevel = gg_scene;
			}
		},
	],
	reset:function(){
		world[level].player.x=world[level].spawn.x;
		world[level].player.y=world[level].spawn.y;
		resetLevel(true);
	}
};

const gg_scene = 20;
world[gg_scene] = {
	name: "Thanks for playing!",
	body: "",
	background: images.backgrounds.gg,
	player:{
		x: 500,
		y: 340,
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
	spawn: {
		x: 500,
		y: 340,
		width: 50,
		height: 50,
	},
	boxes: [
		{x:10,y:90,width:60,height:10},
		{x:120,y:150,width:30,height:30},
		{x:10,y:300,width:60,height:10},
		{x:930,y:80,width:60,height:10},
		{x:830,y:150,width:40,height:30},
		{x:930,y:300,width:60,height:10}
	],
	noJumps: [],
	interactables: [],
}