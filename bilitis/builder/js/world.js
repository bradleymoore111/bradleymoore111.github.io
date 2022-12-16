function updateWorld(){

	ctx.beginPath(); // This is where map rendering goes

	// Drawing world
	
	ctx.fillStyle = "black";

	// If there's a background image, draw it
	if(document.getElementById("possible-background").value){
		ctx.drawImage(images.backgrounds[document.getElementById("possible-background").value], 0, 0, width, height);
	}

	// Drawing borders
	for (var i=0; i < worldBorder.length; i++) {
		makeRect(worldBorder[i]);
	}

	// Drawing boxes
	for(var i=0;i<world.boxes.length; i++){
		for(var j=0;j<world.boxes[i].width/10;j++){
			for(var k=0;k<world.boxes[i].height/10;k++){
				ctx.drawImage(images.block, world.boxes[i].x + j*10, world.boxes[i].y + k*10);
			}
		}
		// makeRect(world.boxes[i]);
	}	

	ctx.fill(); // Filling in all the borders, both border style and fill style should be black.
	ctx.closePath();
	

	ctx.beginPath();
	ctx.fillStyle = "cyan";
	makeRect(world.spawn);
	ctx.fill();
	ctx.closePath();

	for(var i=0;i<world.noJumps.length;i++){
		for(var j=0;j<world.noJumps[i].width/10;j++){
			for(var k=0;k<world.noJumps[i].height/10;k++){
				ctx.drawImage(images.ice_block, world.noJumps[i].x + j*10, world.noJumps[i].y + k*10);
			}
		}
		// ctx.rect(world.noJumps[i].x, world.noJumps[i].y, world.noJumps[i].width, world.noJumps[i].height);
		// makeRect(world.noJumps[i]);
	}

	// Drawing neurotoxin
	ctx.beginPath();
	ctx.fillStyle = "#00ffff";
	for(var i=0;i<world.neurotoxin.length;i++){
		var n = world.neurotoxin[i];
		ctx.strokeRect(n.x, n.y, n.width, n.height);
		// ctx.fill();

		for(var j=0;j<n.clouds.length;j++){
			ctx.fillRect(n.clouds[j].x, n.clouds[j].y, 20, 20);
		}
	}
	ctx.closePath();

	// Drawing spikes
	for(var i=0;i<world.spikes.length;i++){
		var s = world.spikes[i];
		ctx.drawImage(images.spikes, s.x, s.y);
	}


	// Drawing plates
	for(var i=0;i<world.plates.length;i++){
		ctx.drawImage(images.plates[0], world.plates[i].x, world.plates[i].y);
	}

	// Drawing fields
	for(var i=0;i<world.fields.length;i++){
		var field = world.fields[i];

		ctx.drawImage(images.field_open, field.x, field.y);
		ctx.drawImage(images.field_beam, field.x+6, field.y+11, 8, field.height-11);
	}

	// Drawing doors
	for(var i=0;i<world.doors.length;i++){
		if(!world.doors[i].opened){
			ctx.drawImage(images.door, world.doors[i].x, world.doors[i].y);
		}
	}
	
	// Drawing cubes
	for(var i=0;i<world.cubes.length;i++){
		var cube = world.cubes[i];
		ctx.drawImage(images.cube, cube.x, cube.y);
	}
 
	// Drawing keys
	for(var i=0;i<world.keys.length;i++){
		ctx.drawImage(images.key, world.keys[i].x, world.keys[i].y);
	}

	// Drawing critters
	ctx.beginPath();
	for(var i=0;i<world.critters.length;i++){
		var c = world.critters[i];
		ctx.fillStyle = "rgba(0,255,0,0.5)";
		ctx.fillRect(c.xMin, c.y, c.xMax - c.xMin, 15);
		ctx.fill();
		ctx.drawImage(images.trumpet, c.x, c.y);
		ctx.fillStyle = "orange";
		if(c.velX > 0){
			ctx.fillRect(c.x + 22, c.y+2, 10, 10);
		}else{
			ctx.fillRect(c.x - 10, c.y+2, 10, 10);
		}
	}

	// Drawing bugs
	for(var i=0;i<world.bugs.length;i++){
		var b = world.bugs[i];
		ctx.fillStyle = "rgba(0,255,0,0.5);";
		ctx.fillRect(b.x, b.yMin, 20, b.yMax - b.yMin);
		ctx.fill();
		ctx.drawImage(images.flute, b.x, b.y);
		ctx.fillStyle = "orange";
		if(b.velY > 0){
			ctx.fillRect(b.x+5, b.y+20, 10, 10);
		}else{
			ctx.fillRect(b.x+5, b.y-10, 10, 10);
		}
	}

	// Drawing square on selected element
	if(selectedElement){
		ctx.fillStyle = "red";
		ctx.fillRect(selectedElement.x, selectedElement.y, 10, 10);
	}
	ctx.closePath();
};