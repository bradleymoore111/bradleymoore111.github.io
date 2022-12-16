var world_items = {
	newspaper: {
		// Stuff.
		dialogue: {
			"start": {
				title: "The news",
				text: `~~~HELP WANTED~~~<br>
experienced<br>
COOK, HOSTESS, and BARTENDER positions available<br>
APPLY TODAY<br>
Look for the double wooden doors at 937 Cole Street, Haight-Ashbury District<br>
Ask for Rikki Streicher`,
				leftIcon: images.newspaper,
			}
		},
		image: images.newspaper,
		onClick: (item) => {
			if (!inDialogue) 
				startDialogue(item.dialogue);
		},
	},
	the_ladder_august: {
		dialogue: {
			"start": {
				title: "The Ladder (August)",
				text: `<img src="./resources/theladder_1.png">
				<br><br><img src="./resources/theladder_2.png"><br><br>The edition continues, and can be read <a href="./resources/1968_Ladder_Vol12_No10_Aug.pdf">here</a>`,
			}
		},
		image: images.theladder_3,
		onClick: (item) => {
			if (!inDialogue) {
				console.log("Not in dialogue so it's okay.");
				startDialogue(item.dialogue);
			}
		},
	},
	liberation_flyer: {
		dialogue: {
			"start": {
				title: "Liberation for All",
				text: `Liberation for All<br>
Strike for Everyone and Peace<br>
Equality for All<br>
Peace in the World <br>
Real Americans stand for freedom for all, where do you stand?<br>
Which future are you a part of?
`,
			}
		},
		image: images.flyer,
		onClick: (item) => {
			if (!inDialogue) 
				startDialogue(item.dialogue);
		},
	},

};

var current_inventory = [];
var old_inventory_size = -1;
function updateInventory() {
	if (old_inventory_size == current_inventory.length) {
		return;
	}
	old_inventory_size = current_inventory.length;

	itx.clearRect(0, 0, 200, height);
	itx.fillStyle = "white";
	itx.fillRect(0, 0, 200, height);

	itx.fillStyle = "black";
	// Draw the word "inventory"
	itx.font = "30px Comic Sans";
	itx.fillText("Inventory", 30, 30);

	// Draw the items
	for (let i=0; i<current_inventory.length; i++) {
		const item = current_inventory[i];

		// if i is even, x = 10, height = i / 2 * 50
		// if i is odd, x = 110

		itx.drawImage(item.image, (i%2)*100 + 10, 50 + ((i / 2) | 0) * 100, 50, 50);
	}
}

function addToInventory(item) {
	current_inventory.push(item);
}

inventory_canvas.addEventListener('mousedown', (e) => {
	const rect = inventory_canvas.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;

	if (x < 10 || x > 160) {
		// out of bounds
		return;
	}

	if (x > 60 && x < 110) {
		// out of bounds
		return;
	}

	// Possible y's to check: must be in 50-100 or 150-200 or 250-300 etc
	if (y % 100 < 50) { 
		// out of bounds
		return;
	}

	// Convert from coords to index
	let i = 0;
	while (y > 110) {
		y -= 110;
		i += 2;
	}

	if (x > 100) {
		// Odd index
		i++;
	}

	if (current_inventory[i] && current_inventory[i].onClick) {
		current_inventory[i].onClick(current_inventory[i]);
	} 
});