function updateWorld(){
	if(world[level].background){
		ctx.drawImage(world[level].background, 0, 0, width, height);
	}else{
		ctx.drawImage(images.backgrounds.hello_world, 0, 0);
	}

	ctx.beginPath(); // This is where map rendering goes

	// Drawing world
	ctx.fillStyle = "black";
	var tempDir = "";
	for(var i=0;i<worldBorder.length;i++){
		tempDir = colCheck(world[level].player, worldBorder[i]);
	}
	for(var i=0;i<world[level].boxes.length;i++){
		tempDir = tempDir || colCheck(world[level].player, world[level].boxes[i]);
	}
	if(tempDir != "b"){
		world[level].player.grounded = false;
	}

	// world[level].player.grounded = false;

	// Drawing borders
	for (var i=0; i < worldBorder.length; i++) {
		makeRect(worldBorder[i]);
 
 		// Halting player movement through worldBorder, this will be useful stuff for Drawing maps
		var dir = colCheck(world[level].player, worldBorder[i]);
		if (dir === "l" || dir === "r") {
			world[level].player.doubled = false;
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY = 0;
		}
	}
	
	// Drawing boxes
	for(var i=0;i<world[level].boxes.length; i++){
		for(var j=0;j<world[level].boxes[i].width/10;j++){
			for(var k=0;k<world[level].boxes[i].height/10;k++){
				ctx.drawImage(images.block, world[level].boxes[i].x + j*10, world[level].boxes[i].y + k*10);
			}
		}
		// makeRect(world[level].boxes[i]);
 
 		// Halting player movement through world[level].boxes, this will be useful stuff for Drawing maps
		var dir = colCheck(world[level].player, world[level].boxes[i]);
 		
		if (dir === "l" || dir === "r") {
			world[level].player.doubled = false;
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY = 0;
		}
	}

	// Making border render over boxes
	ctx.fill();
	ctx.closePath();
	
	// noJumps
	for(var i=0;i<world[level].noJumps.length;i++){
		for(var j=0;j<world[level].noJumps[i].width/10;j++){
			for(var k=0;k<world[level].noJumps[i].height/10;k++){
				ctx.drawImage(images.ice_block, world[level].noJumps[i].x + j*10, world[level].noJumps[i].y + k*10);
			}
		}
		// ctx.rect(world[level].noJumps[i].x, world[level].noJumps[i].y, world[level].noJumps[i].width, world[level].noJumps[i].height);
		// makeRect(world[level].noJumps[i]);

		var dir = colCheck(world[level].player, world[level].noJumps[i]);
 		
		if (dir === "l" || dir === "r") {
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY = 0;
		}
	}

	// Drawing interactables
	for (const interactable of world[level].interactables) {
		if (!interactable.hidden && interactable.image) {

			if (interactable.currentSpeed) {
				const currentSpeed = interactable.currentSpeed;
				// Attempt to animate them.
				if (interactable.maxX && currentSpeed > 0 && interactable.rightImage) {
					// Draw them to the right
					ctx.drawImage(interactable.rightImage, interactable.x, interactable.y, interactable.width, interactable.height);
				} else if (interactable.minX && currentSpeed < 0 && interactable.leftImage) {
					// Dram them to the left
					ctx.drawImage(interactable.leftImage, interactable.x, interactable.y, interactable.width, interactable.height);
				} else if (interactable.maxY && currentSpeed > 0 && interactable.downImage) {
					// Draw them facing front
					ctx.drawImage(interactable.downImage, interactable.x, interactable.y, interactable.width, interactable.height);

				} else if (interactable.minY && currentSpeed < 0 && interactable.upImage) {
					// Draw them facing back
					ctx.drawImage(interactable.upImage, interactable.x, interactable.y, interactable.width, interactable.height);
				} else {
					// The default
					ctx.drawImage(interactable.image, interactable.x, interactable.y, interactable.width, interactable.height);
				}
			} else {
				ctx.drawImage(interactable.image, interactable.x, interactable.y, interactable.width, interactable.height);
			}
		}
	}

	// Drawing the player
	if (!world[level].player.hidden) {
		const player = world[level].player;
		if(!dead){
			if(player.velX > 0){
				recentDirection = true;
			}else if(player.velX < 0){
				recentDirection = false;
			}

			if (Math.abs(player.velX) + Math.abs(player.velY) < 1) {
				ctx.drawImage(images.player_static, player.x, player.y, player.width, player.height);
			} else if (recentDirection) {
				// Facing right
				ctx.drawImage(images.player_right, player.x, player.y, player.width, player.height);
			} else {
				// Facing left
				ctx.drawImage(images.player_left, player.x, player.y, player.width, player.height);
			}
		}else{
			ctx.drawImage(images.player_dead, world[level].player.x, world[level].player.y);
		}
	}
};