function updateEntities(){
	var timeNow = new Date().getTime();
    if (lastTime != 0) {
        var elapsed = timeNow - lastTime;
        elapsed = Math.min(30, elapsed);

		// Interactables
		for (let interactable of world[level].interactables) {
			if (simpleColCheck(world[level].player, interactable) &&interactable.onHit) {
				if (!interactable.recentlyHit) {
					interactable.recentlyHit = true;
					interactable.onHit(interactable);
				}
			} else {
				interactable.recentlyHit = false;
			}

			if (interactable.maxX) {
				interactable.x += interactable.currentSpeed * elapsed;

				if (interactable.x > interactable.maxX) {
					interactable.currentSpeed = -1 * Math.abs(interactable.currentSpeed);
				} else if (interactable.x < interactable.minX) {
					interactable.currentSpeed = Math.abs(interactable.currentSpeed);
				}
			}

			if (interactable.maxY) {
				interactable.y += interactable.currentSpeed * elapsed;

				if (interactable.y > interactable.maxY) {
					interactable.currentSpeed = -1 * Math.abs(interactable.currentSpeed);
				} else if (interactable.y < interactable.minY) {
					interactable.currentSpeed = Math.abs(interactable.currentSpeed);
				}
			}
		}


		// Check Keyboard Input
		if(stillPressingSpace){
			if(!(keyboard[38]||keyboard[32]||keyboard[87])){
				stillPressingSpace = false;
			}
		}else if((keyboard[38]||keyboard[32]||keyboard[87])&&!dead){
			// up arrow or space

			if (!world[level].player.jumping&&world[level].player.grounded) {
				stillPressingSpace = true;	
				world[level].player.jumping = true;
				world[level].player.grounded = false;
				world[level].player.velY = -world[level].player.speed*2;
				world[level].player.doubled = false;
			}else if(!world[level].player.doubled){
				stillPressingSpace = true;	
				world[level].player.doubled = true;

				var tempDir = "";
				for(var i=0;i<worldBorder.length;i++){
					tempDir = tempDir || colCheck(world[level].player, worldBorder[i]);
				}if(tempDir == "l"){
					world[level].player.velX = world[level].player.speed;
					world[level].player.doubled = false;
				}else if(tempDir == "r"){
					world[level].player.velX = -1 * world[level].player.speed;
					world[level].player.doubled = false;
				}
				for(var i=0;i<world[level].boxes.length;i++){
					tempDir = tempDir || colCheck(world[level].player, world[level].boxes[i]);
				}if(tempDir == "l"){
					world[level].player.velX = 4;
					world[level].player.doubled = false;
				}else if(tempDir == "r"){
					world[level].player.velX = -4;
					world[level].player.doubled = false;
				}

				world[level].player.velY = -world[level].player.speed * 2;
			}
		}
		if ((keyboard[39]||keyboard[68])&&!dead) { // right arrow
			if(!world[level].player.grounded && world[level].player.velX < world[level].player.speed){
				world[level].player.velX+=.4*elapsed/18;
			}else if (world[level].player.velX < world[level].player.speed) {             
				world[level].player.velX+=1*elapsed/18;         
			}
		}if ((keyboard[37]||keyboard[65])&&!dead) { // left arrow 
			if(!world[level].player.grounded && world[level].player.velX > -world[level].player.speed){
				world[level].player.velX-=.4*elapsed/18;
			}        
			else if(world[level].player.velX > -world[level].player.speed) {
				world[level].player.velX-=1*elapsed/18;
			}
		}
 
		if(world[level].player.x > 1000 || world[level].player.x+world[level].player.width < 0 || world[level].player.y > 400 || world[level].player.y+world[level].player.height < 0){
			if(level != 18){
				world[level].reset(false);
			}else{
				world[level].reset(true);
				world[18].bread[0].pickedUp = true;
				bread++;
			}
		}

 		// Horizontal friction
	 	if(world[level].player.grounded){
			world[level].player.velX *= friction;
		}
		if(Math.abs(world[level].player.velX)<0.01){
			world[level].player.velX = 0;
		}

		// Since canvases are upside down, making the value positive works.
		if(!world[level].player.grounded){
			world[level].player.velY += gravity*elapsed/18;
		}
		if(Math.abs(world[level].player.velY)<0.01){
			world[level].player.velY = 0;
		}
	 	
	 	// Commented out, makes it so goal is activated whenever you bump it, as opposed to having to jump
		// if(simpleColCheck(world[level].player, world[level].goal)){
		// 	world[level].goal.action();
		// }

		if(world[level].player.grounded){
			world[level].player.velY = 0;
		}
	 
		// world[level].player.x += world[level].player.velX;
		// world[level].player.y += world[level].player.velY;
		// animate(world[level].player);
        var add = (world[level].player.velX * elapsed)/18;
        world[level].player.x += add;
        add = (world[level].player.velY * elapsed)/18;
        world[level].player.y += add;
    }
    lastTime = timeNow;
}

function death(){
	if(!dead){
		deaths++;
		dead = true;
		var levelRightNow = level;
		setTimeout(function(){
			world[levelRightNow].bodies.push({x:world[levelRightNow].player.x,y:world[levelRightNow].player.y,life:1});
			if(world[level].bodies.length > 8){
				world[level].bodies.splice(0,1);
			}
			for(var i=0;i<world[level].bodies.length-1;i++){
				world[level].bodies[i].life-=0.125;
			}
		},1000);
		setTimeout(world[levelRightNow].reset, 1000);
		setTimeout(hideBanner, 1000);
	}
}

function resetLevel(hardReset){
	dead = false;

	world[level].player.velX = 0;
	world[level].player.velY = 0;
	world[level].player.hasCube = -1;

	if(hardReset){
		// Reset Bread

		// Reset Keys
		for(var i=0;i<world[level].keys.length;i++){
			if(world[level].keys[i].taken){
				world[level].keys[i].taken = false;
				itemKeys--;
			}
		}

		// Reset Doors
		for(var i=0;i<world[level].doors.length;i++){
			if(world[level].doors[i].opened){
				world[level].doors[i].opened = false;
				itemKeys++;
			}
		}
	}

	// Reset cubes
	for(var i=0;i<world[level].cubes.length;i++){
		world[level].cubes[i].pickedUp = false;
		world[level].cubes[i].placed = -1;
	}

	// Reset plates
	for(var i=0;i<world[level].plates.length;i++){
		world[level].plates[i].activated = false;
		world[level].plates[i].playerStillIn = false;
		world[level].plates[i].cube = -1;
	}

	// Reset fields
	for(var i=0;i<world[level].fields.length;i++){
		world[level].plates[i].opened = false;
	}
}