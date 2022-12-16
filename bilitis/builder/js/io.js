function worldObject(){
	var s = "{name: '"+world.name+"',background:images.backgrounds."+world.background+",player:{x:"+world.spawn.x+",y:"+world.spawn.y+",width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},bodies:[],";

	// Spawn for easier reloading of custom levels
	s += "spawn:{x:"+world.spawn.x+",y:"+world.spawn.y+",width:50,height:50},";

	// Critters
	s += "critters:[";
	for(var i=0;i<world.critters.length;i++){
		var c = world.critters[i];
		s+="{xMin:"+c.xMin+",xMax:"+c.xMax+",x:"+c.x+",y:"+c.y+",height:10,width:22,speed:1,velX:"+c.velX+"},";
	}

	// Bugs
	s += "],bugs:[";
	for(var i=0;i<world.bugs.length;i++){
		var b = world.bugs[i];
		s+="{yMin:"+b.yMin+",yMax:"+b.yMax+",x:"+b.x+",y:"+b.y+",height:20,width:20,speed:1,velY:"+b.velY+"},";
	}

	// Bread
	s += "],bread:[";
	for(var i=0;i<world.bread.length;i++){
		var b = world.bread[i];
		s += "{x:"+b.x+",y:"+b.y+",width:11,height:11,pickedUp:false,quote:'"+b.quote+"',subQuote:'"+b.subQuote+"'},";
	}

	// Boxes
	s += "],boxes:[";
	for(var i=0;i<world.boxes.length;i++){
		var b = world.boxes[i];
		s += "{x:"+b.x+",y:"+b.y+",width:"+b.width+",height:"+b.height+"},";
	}

	// Icy Walls
	s += "],noJumps:[";
	for(var i=0;i<world.noJumps.length;i++){
		var n = world.noJumps[i];
		s += "{x:"+n.x+",y:"+n.y+",width:"+n.width+",height:"+n.height+"},";
	}

	// Neurotoxin
	s += "],neurotoxin:[";
	for(var i=0;i<world.neurotoxin.length;i++){
		var n = world.neurotoxin[i];
		s += "{x:"+n.x+",y:"+n.y+",width:"+n.width+",height:"+n.height+",clouds:[";
		for(var j=0;j<n.clouds.length;j++){
			var c = n.clouds[j];
			s += "{x:"+c.x+",y:"+c.y+"},";
		}
		s+="]},";
	}

	// Spikes
	s += "],spikes:[";
	for(var i=0;i<world.spikes.length;i++){
		var n = world.spikes[i];
		s += "{x:"+n.x+",y:"+n.y+",width:"+n.width+",height:"+n.height+"},";
	}

	// Cubes
	s += "],cubes:[";
	for(var i=0;i<world.cubes.length;i++){
		var c = world.cubes[i];
		s += "{x:"+c.x+",y:"+c.y+",width:20,height:20,pickedUp:false,placed:-1,id:"+i+"},";
	}

	// Plates
	s += "],plates:[";
	for(var i=0;i<world.plates.length;i++){
		var p = world.plates[i];
		s += "{x:"+p.x+",y:"+p.y+",width:20,height:5,activated:false,cube:-1,playerStillIn:false,id:"+i+"},";
	}

	// Fields
	s += "],fields:[";
	for(var i=0;i<world.fields.length;i++){
		var f = world.fields[i];
		s += "{x:"+f.x+",y:"+f.y+",width: 20,height:"+f.height+",targets:["+f.targets+"],opened:false},";
	}

	// Keys
	s += "],keys:[";
	for(var i=0;i<world.keys.length;i++){
		var k = world.keys[i];
		s += "{x:"+k.x+",y:"+k.y+",width:24,height:10,taken:false},";
	}

	// Doors
	s += "],doors:[";
	for(var i=0;i<world.doors.length;i++){
		var d = world.doors[i];
		s += "{x:"+d.x+",y:"+d.y+",width:30,height:70,opened:false},";
	}

	// Goal
	var g = world.goal;
	s += "],goal:{x:"+g.x+",y:"+g.y+",width:51,height:50,action:function(){world[level].player.x="+world.spawn.x+";world[level].player.y="+world.spawn.y+";resetLevel(false);newLevel++;}},";

	// Reset function
	s += "reset:function(){world[level].player.x="+world.spawn.x+";world[level].player.y="+world.spawn.y+";resetLevel(true);}"

	s+="}";
	return s;
}

function updateCustomInput(){
	var container = document.getElementById('customInput');
	var newElement = document.getElementById('addsomething-dropdown').value;

	if(newElement!=oldElementAdd){
		oldElementAdd = newElement;
	}else{
		return;
	}

	container.innerHTML = "x: <input id='xInput-add' type='text' name='xInput' style='width: 50px'> y: <input id='yInput-add' type='text' name='yInput' style='width: 50px'><br>"
	// x: <input id='xInput-add' type='text' name='xInput' style='width: 50px'>
	// y: <input id='yInput-add' type='text' name='yInput' style='width: 50px'><br>
	if(newElement=="boxes"||newElement=="noJumps"||newElement == "neurotoxin"){
		container.innerHTML += "width: <input id='widthInput-add' type='text' name='widthInput' style='width: 50px'> height: <input id='heightInput-add' type='text' name='heightInput' style='width: 50px'><br>" 
		// width: <input id='widthInput-add' type='text' name='widthInput' style='width: 50px'>
		// height: <input id='heightInput-add' type='text' name='heightInput' style='width: 50px'><br>
	}else if(newElement == "critters"){
		container.innerHTML += "xMin: <input id='xMinInput-add' type='text' name='xMinInput' style='width: 50px'> xMax: <input id='xMaxInput-add' type='text' name='xMaxInput' style='width: 50px'><br>velX: <input id='velXInput-add' type='text' name='velXInput' style='width: 50px'><br>"
		// xMin: <input id='xMinInput-add' type='text' name='xMinInput' style='width: 50px'>
		// xMax: <input id='xMaxInput-add' type='text' name='xMaxInput' style='width: 50px'><br>
		// velX: <input id='velXInput-add' type='text' name='velXInput' style='width: 50px'><br>
	}else if(newElement == "bugs"){
		container.innerHTML += "yMin: <input id='yMinInput-add' type='text' name='yMinInput' style='width: 50px'> yMax: <input id='yMaxInput-add' type='text' name='yMaxInput' style='width: 50px'><br>velY: <input id='velYInput-add' type='text' name='velYInput' style='width: 50px'><br>"
		// yMin: <input id='yMinInput-add' type='text' name='yMinInput' style='width: 50px'>
		// yMax: <input id='yMaxInput-add' type='text' name='yMaxInput' style='width: 50px'><br>
		// velY: <input id='velYInput-add' type='text' name='velYInput' style='width: 50px'><br>
	}else if(newElement=="fields"){
		container.innerHTML += "targets: <input id='targetInput-add' type='text' name='targetInput' style='width: 50px'> height: <input id='heightInput-add' type='text' name='heightInput' style='width: 50px'><br>";
		// targets: <input id='targetInput-add' type='text' name='targetInput' style='width: 50px'>
		// height: <input id='heightInput-add' type='text' name='heightInput' style='width: 50px'><br>
	}else if(newElement=="bread"){
		container.innerHTML += "major quote: <input id='majorInput-add' type='text' name='majorInput' style='width: 200px'><br> minor quote: <input id='minorInput-add' type='text' name='minorInput' style='width: 200px'>"
		// major quote: <input id='majorInput-add' type='text' name='majorInput' style='width: 200px'><br>
		// minor quote: <input id='minorInput-add' type='text' name='minorInput' style='width: 200px'>
	}
}

function updateCustomModify(){
	var container = document.getElementById('customModding');
	var newElement = document.getElementById('modify-dropdown').value;
	var newID = parseFloat(document.getElementById('element-id').value);

	if(newElement!=oldElementMod ){
		oldElementMod = newElement;
		todo = true;
	}

	if((newID!=oldID) && !isNaN(newID)){
		oldID = newID;
		todo = true;
	}

	if(!todo || isNaN(newID)){
		return;
	}

	if(newElement != "background"&&newElement != "name"){ // it means background
		selectedElement = world[newElement][newID];
	}else{ // background
		selectedElement = world[newElement];
	}

	if(!selectedElement){
		selectedElement = world[newElement];
	}

	todo = false;

	container.innerHTML = "x: <input id='xInput-mod' type='text' name='xInput' style='width: 50px'> y: <input id='yInput-mod' type='text' name='yInput' style='width: 50px'><br>";
	if(newElement=="boxes"||newElement=="noJumps"||newElement == "neurotoxin"){
		var shape = world[newElement][newID];
		if(shape){
			container.innerHTML += "width: <input id='widthInput-mod' type='text' name='widthInput' style='width: 50px'> height: <input id='heightInput-mod' type='text' name='heightInput' style='width: 50px'><br>";
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
			document.getElementById("widthInput-mod").value = shape.width;
			document.getElementById("heightInput-mod").value = shape.height;
			if(newElement == "neurotoxin"){
				container.innerHTML += "<input class='button' id='addEntityButton' value='Re-randomize Clouds' type='button' onClick='randomizeClouds("+newID+")'>";
			}
		}
	}else if(newElement == "critters"){
		var shape = world.critters[newID];
		if(shape){
			container.innerHTML += "xMin: <input id='xMinInput-mod' type='text' name='xMinInput' style='width: 50px'> xMax: <input id='xMaxInput-mod' type='text' name='xMaxInput' style='width: 50px'><br>velX: <input id='velXInput-mod' type='text' name='velXInput' style='width: 50px'><br>";
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
			document.getElementById("xMinInput-mod").value = shape.xMin;
			document.getElementById("xMaxInput-mod").value = shape.xMax;
			document.getElementById("velXInput-mod").value = shape.velX;
		}
	}else if(newElement == "bugs"){
		var shape = world.bugs[newID];
		if(shape){
			container.innerHTML += "yMin: <input id='yMinInput-mod' type='text' name='yMinInput' style='width: 50px'> yMax: <input id='yMaxInput-mod' type='text' name='yMaxInput' style='width: 50px'><br>velY: <input id='velYInput-mod' type='text' name='velYInput' style='width: 50px'><br>";
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
			document.getElementById("yMinInput-mod").value = shape.yMin;
			document.getElementById("yMaxInput-mod").value = shape.yMax;
			document.getElementById('velYInput-mod').value = shape.velY;
		}
	}else if(newElement=="fields"){
		var shape = world.fields[newID];
		if(shape){
			container.innerHTML += "targets: <input id='targetInput-mod' type='text' name='targetInput' style='width: 50px'> height: <input id='heightInput-mod' type='text' name='heightInput' style='width: 50px'><br>";
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;

			document.getElementById("heightInput-mod").value = shape.height;

			document.getElementById("targetInput-mod").value = shape.targets;
		}
	}else if(newElement=="bread"){
		var shape = world.bread[newID];
		if(shape){
			container.innerHTML += "major quote: <input id='majorInput-mod' type='text' name='majorInput' style='width: 200px'><br> minor quote: <input id='minorInput-mod' type='text' name='minorInput' style='width: 200px'>";
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
			document.getElementById("majorInput-mod").value = shape.quote;
			document.getElementById("minorInput-mod").value = shape.subQuote;
		}
	}else if(newElement=="background"||newElement=="name"){
		var shape = world[newElement];
		if(shape){
			container.innerHTML = newElement+":  <input id='valueInput-mod' type='text' name='valueInput' style='width: 200px'>";
			document.getElementById("valueInput-mod").value = shape;
		}
	}else if(newElement=="cubes"||newElement=="plates"||newElement=="doors"||newElement=="keys"||newElement=="spikes"){
		var shape = world[newElement][newID];
		if(shape){
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
		}
	}else{ // (new Element=="spawn"||goal){
		var shape = world[newElement];
		if(shape){
			document.getElementById("xInput-mod").value = shape.x;
			document.getElementById("yInput-mod").value = shape.y;
		}
	}
}

function updateIO(){
	var t="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	"
	var t2 = t+t;
	var t3 = t+t+t;
	var nl = "<br>";

	var nameInf = document.getElementById("name");
	nameInf.innerHTML = "Name: "+world.name;

	var backInf = document.getElementById("background");
	backInf.innerHTML = "Background: images.backgrounds."+world.background;

	var spawnInf = document.getElementById("spawn");
	spawnInf.innerHTML = "Spawn"+nl+t+"x: "+world.spawn.x+nl+t+"y: "+world.spawn.y;

	var critterInf = document.getElementById("critters");
	critterInf.innerHTML = "Critters ("+world.critters.length+")";
	for(var i=0;i<world.critters.length;i++){
		critterInf.innerHTML += nl+t+i;
		critterInf.innerHTML += nl + t2 + "velX: "+world.critters[i].velX;
		critterInf.innerHTML += nl + t2 + getXY(world.critters[i]);
		critterInf.innerHTML += nl + t2 + "xMin: "+world.critters[i].xMin + nl + t2 + "xMax: "+world.critters[i].xMax;
	}

	var bugInf = document.getElementById("bugs");
	bugInf.innerHTML = "Bugs ("+world.bugs.length+")";
	for(var i=0;i<world.bugs.length;i++){
		bugInf.innerHTML += nl+t+i;
		bugInf.innerHTML += nl + t2 + "velY: "+world.bugs[i].velY;
		bugInf.innerHTML += nl + t2 + getXY(world.bugs[i]);
		bugInf.innerHTML += nl + t2 + "yMin: "+world.bugs[i].yMin + nl + t2 + "yMax: "+world.bugs[i].yMax;
	}

	var breadInf = document.getElementById("bread");
	breadInf.innerHTML = "Bread ("+world.bread.length+")";
	for(var i=0;i<world.bread.length;i++){
		breadInf.innerHTML += nl+t+i;
		breadInf.innerHTML += nl + t2 + getXY(world.bread[i]);
	}

	var boxInf = document.getElementById("boxes");
	boxInf.innerHTML = "Boxes ("+world.boxes.length+")";
	for(var i=0;i<world.boxes.length;i++){
		boxInf.innerHTML += nl+t+i;
		boxInf.innerHTML += nl + t2 + getXY(world.boxes[i]);
		boxInf.innerHTML += nl + t2 + "width: "+world.boxes[i].width + nl + t2 + "height: "+world.boxes[i].height;
	}

	var noJumpInf = document.getElementById("noJumps");
	noJumpInf.innerHTML = "Icy Walls ("+world.noJumps.length+")";
	for(var i=0;i<world.noJumps.length;i++){
		noJumpInf.innerHTML += nl+t+i;
		noJumpInf.innerHTML += nl + t2 + getXY(world.noJumps[i]);
		noJumpInf.innerHTML += nl + t2 + "width: "+world.noJumps[i].width + nl + t2 + "height: "+world.noJumps[i].height;
	}

	var neuroInf = document.getElementById("neurotoxin");
	neuroInf.innerHTML = "Neurotoxin ("+world.neurotoxin.length+")";
	for(var i=0;i<world.neurotoxin.length;i++){
		neuroInf.innerHTML += nl+t+i;
		neuroInf.innerHTML += nl + t2 + getXY(world.neurotoxin[i]);
		neuroInf.innerHTML += nl + t2 + "width: "+world.neurotoxin[i].width + nl + t2 + "height: "+world.neurotoxin[i].height;
	}

	var spikeInf = document.getElementById("spikes");
	spikeInf.innerHTML = "Spikes ("+world.spikes.length+")";
	for(var i=0;i<world.spikes.length;i++){
		spikeInf.innerHTML += nl+t+i;
		spikeInf.innerHTML += nl + t2 + getXY(world.spikes-[i]);
	}

	var cubeInf = document.getElementById("cubes");
	cubeInf.innerHTML = "Cubes ("+world.cubes.length+")";
	for(var i=0;i<world.cubes.length;i++){
		cubeInf.innerHTML += nl+t+i;
		cubeInf.innerHTML += nl+t2+getXY(world.cubes[i]);
	}

	var plateInf = document.getElementById("plates");
	plateInf.innerHTML = "Plates ("+world.plates.length+")";
	for(var i=0;i<world.plates.length;i++){
		plateInf.innerHTML += nl+t+i;
		plateInf.innerHTML += nl+t2+getXY(world.plates[i]);
	}

	var fieldInf = document.getElementById("fields");
	fieldInf.innerHTML = "Fields ("+world.fields.length+")";
	for(var i=0;i<world.fields.length;i++){
		fieldInf.innerHTML += nl+t+i;
		fieldInf.innerHTML += nl+t2+getXY(world.fields[i]);

		fieldInf.innerHTML += nl+t2+"targets: [";
		for(var j=0;j<world.fields[i].targets.length;j++){
			fieldInf.innerHTML += world.fields[i].targets[j]+",";
		}
		fieldInf.innerHTML += "]";
	}

	var keyInf = document.getElementById("keys");
	keyInf.innerHTML = "Keys ("+world.keys.length+")";
	for(var i=0;i<world.keys.length;i++){
		keyInf.innerHTML += nl+t+i;
		keyInf.innerHTML += nl+t2+getXY(world.keys[i]);
	}

	var doorInf = document.getElementById("doors");
	doorInf.innerHTML = "Doors ("+world.doors.length+")";
	for(var i=0;i<world.doors.length;i++){
		doorInf.innerHTML += nl+t+i;
		doorInf.innerHTML += nl+t2+getXY(world.doors[i]);
	}

	var goalInf = document.getElementById("goal");
	goalInf.innerHTML = "Goal"+nl+t+getXY(world.goal);
}

function addElement(){
	var elementType = document.getElementById('addsomething-dropdown').value;

	var newx = parseFloat(document.getElementById("xInput-add").value);
	var newy = parseFloat(document.getElementById("yInput-add").value);

	if(elementType=="boxes"||elementType=="noJumps"||elementType=="neurotoxin"){
		newx/= 10;
		newx = newx|0;
		newx*= 10;

		newy/= 10;
		newy = newy|0;
		newy*= 10;

		var newWidth = parseFloat(document.getElementById("widthInput-add").value);
		var newHeight = parseFloat(document.getElementById("heightInput-add").value);

		newWidth/= 10;
		newWidth = newWidth|0;
		newWidth*= 10;

		newHeight/= 10;
		newHeight = newHeight|0;
		newHeight*= 10;

		if(elementType != "neurotoxin"){
			world[elementType].push({x:newx, y:newy, width:newWidth, height:newHeight});
		}else{
			world[elementType].push({x:newx, y:newy, width:newWidth, height:newHeight, clouds:[]});
			randomizeClouds(world.neurotoxin.length-1);
		}
	}else if(elementType=="critters"){
		var newxMin = parseFloat(document.getElementById("xMinInput-add").value);
		var newxMax = parseFloat(document.getElementById("xMaxInput-add").value);

		var newvelX = parseFloat(document.getElementById('velXInput-add').value);

		world.critters.push({x:newx, y:newy, xMin:newxMin, xMax:newxMax, velX:newvelX, width:22});
	}else if(elementType=="bugs"){
		var newyMin = parseFloat(document.getElementById("yMinInput-add").value);
		var newyMax = parseFloat(document.getElementById("yMaxInput-add").value);

		var newvelY = parseFloat(document.getElementById('velYInput-add').value);

		world.bugs.push({x:newx, y:newy, yMin:newyMin, yMax:newyMax, velY:newvelY, height:20});
	}else if(elementType=="fields"){
		var newHeight = parseFloat(document.getElementById('heightInput-add').value);

		var newTargets = document.getElementById("targetInput-add").value.split(",");
		for(var i=0;i<newTargets.length;i++){
			newTargets[i] = parseInt(newTargets[i]);
			if(typeof newTargets[i] != "number"){
				newTargets.splice(0, 1);
				i--;
			}
		};

		world.fields.push({x:newx, y:newy, height:newHeight ,targets:newTargets, activated:false});
	}else if(elementType=="bread"){
		var majorQuote = document.getElementById("majorInput-add").value;
		var minorQuote = document.getElementById("minorInput-add").value;

		world.bread.push({x:newx, y:newy, quote:majorQuote, subQuote:minorQuote});
	}else if(elementType=="spawn"||elementType=="goal"){
		world[elementType] = {x:newx, y:newy, width:50, height:50};
	}else{
		world[elementType].push({x:newx, y:newy});
	}
}

function modElement(){
	var elementType = document.getElementById("modify-dropdown").value;
	var id = parseFloat(document.getElementById('element-id').value);

	if(elementType!="name"&&elementType!="background"){
		var newx = parseFloat(document.getElementById("xInput-mod").value);
		var newy = parseFloat(document.getElementById("yInput-mod").value);
	}

	if(elementType=="boxes"||elementType=="noJumps"||elementType=="neurotoxin"){
		newx/= 10;
		newx = newx|0;
		newx*= 10;

		newy/= 10;
		newy = newy|0;
		newy*= 10;

		var newWidth = parseFloat(document.getElementById("widthInput-mod").value);
		var newHeight = parseFloat(document.getElementById("heightInput-mod").value);

		newWidth/= 10;
		newWidth = newWidth|0;
		newWidth*= 10;

		newHeight/= 10;
		newHeight = newHeight|0;
		newHeight*= 10;

		world[elementType][id]={x:newx, y:newy, width:newWidth, height:newHeight};
		if(elementType == "neurotoxin"){
			// world.neurotoxin[world.neurotoxin.length-1].clouds = [];
			randomizeClouds(world.neurotoxin.length-1);
		}
	}else if(elementType=="critters"){
		var newxMin = parseFloat(document.getElementById("xMinInput-mod").value);
		var newxMax = parseFloat(document.getElementById("xMaxInput-mod").value);

		var newvelX = parseFloat(document.getElementById('velXInput-mod').value);

		world.critters[id]={x:newx, y:newy, xMin:newxMin, xMax:newxMax, velX:newvelX, height:10, width:22};
	}else if(elementType=="bugs"){
		var newyMin = parseFloat(document.getElementById("yMinInput-mod").value);
		var newyMax = parseFloat(document.getElementById("yMaxInput-mod").value);

		var newvelY = parseFloat(document.getElementById('velYInput-mod').value);

		world.bugs[id] = ({x:newx, y:newy, yMin:newyMin, yMax:newyMax, velY:newvelY, height:20});
	}else if(elementType=="fields"){
		var newHeight = parseFloat(document.getElementById('heightInput-mod').value);

		var newTargets = document.getElementById("targetInput-mod").value.split(",");
		for(var i=0;i<newTargets.length;i++){
			newTargets[i] = parseInt(newTargets[i]);
			if(typeof newTargets[i] != "number"){
				newTargets.splice(0, 1);
				i--;
			}
		};

		world.fields[id] = ({x:newx, y:newy, height:newHeight, targets:newTargets});
	}else if(elementType=="bread"){
		var majorQuote = document.getElementById("majorInput-mod").value;
		var minorQuote = document.getElementById("minorInput-mod").value;

		world.bread[id] = ({x:newx, y:newy, quote:majorQuote, subQuote:minorQuote});
	}else if(elementType=="spawn"||elementType=="goal"){
		world[elementType] = {x:newx, y:newy, width:50, height:50};
	}else if(elementType=="name"||elementType=="background"){
		world[elementType] = document.getElementById("valueInput-mod").value;
	}else{
		world[elementType][id] = ({x:newx, y:newy});
	}
}

function delElement(){
	var elementType = document.getElementById("modify-dropdown").value;
	var id = parseFloat(document.getElementById('element-id').value);

	if(elementType == "spawn"||elementType=="goal"){
		console.log("NOPE, SORRY");
	}else{
		world[elementType].splice(id,1);
	}
	oldID = -1;
}

function clearWorld(){
	var really = prompt("Are you sure? (y/n)");
	if(really != "y"){
		return;
	}else{
		for(element in world){
			console.log(element);
			if(element == "spawn"||element=="goal"||element=="name"||element=="background"){
				console.log("NOPE, SORRY");
			}else{
				if(element=="nojumps"){
					for(var i=0;i<world.noJumps.length;i++){
						world.noJumps.splice(i,1);
						i--;
					}					
				}else{
					for(var i=0;i<world[element].length;i++){
						world[element].splice(i,1);
						i--;
					}
				}
			}
		}
	}
}

function getXY(obj){
	return "XY: ("+obj.x+", "+obj.y+")";
}

var clickedX;
var clickedY;

var drawingBox = false;

function updateMouse(){
	if(!drawingBox){
		return;
	}

	lastMouseX = ((lastMouseX/10)|0)*10;
	lastMouseY = ((lastMouseY/10)|0)*10;

	ctx.beginPath();
	ctx.fillStyle = "rgba(100,0,0,0.25)"
	if(clickedX < lastMouseX){ // moving right
		if(clickedY < lastMouseY){ // moving down
			ctx.fillRect(clickedX, clickedY, lastMouseX - clickedX+10, lastMouseY - clickedY+10);
		}else{ // moving up
			ctx.fillRect(clickedX, lastMouseY, lastMouseX - clickedX+10, clickedY - lastMouseY+10);
		}
	}else{ // moving left
		if(clickedY < lastMouseY){ // moving down
			ctx.fillRect(lastMouseX, clickedY, clickedX - lastMouseX+10, lastMouseY - clickedY+10);
		}else{ // moving up
			ctx.fillRect(lastMouseX, lastMouseY, clickedX - lastMouseX+10, clickedY - lastMouseY+10);
		}
	}
}

function whenMouseDown(){
	clickedX = ((lastMouseX/10)|0)*10;
	clickedY = ((lastMouseY/10)|0)*10;
	drawingBox = true;
}

var lastElementTouched = null;

function whenMouseUp(){
	var elementType = document.getElementById('addsomething-dropdown').value;

	lastMouseX = ((lastMouseX/10)|0)*10;
	lastMouseY = ((lastMouseY/10)|0)*10;

	if(elementType == "boxes"||elementType == "noJumps"||elementType == "neurotoxin"){
		if(clickedX < lastMouseX){ // moving right
			if(clickedY < lastMouseY){ // moving down
				world[elementType].push({x:clickedX, y:clickedY, width:lastMouseX - clickedX+10, height:lastMouseY - clickedY+10});
			}else{ // moving up
				world[elementType].push({x:clickedX, y:lastMouseY, width:lastMouseX - clickedX+10, height:clickedY - lastMouseY+10});
			}
		}else{ // moving left
			if(clickedY < lastMouseY){ // moving down
				world[elementType].push({x:lastMouseX, y:clickedY, width:clickedX - lastMouseX+10, height:lastMouseY - clickedY+10});
			}else{ // moving up
				world[elementType].push({x:lastMouseX, y:lastMouseY, width:clickedX - lastMouseX+10, height:clickedY - lastMouseY+10});
			}
		}	
		if(elementType == "neurotoxin"){
			// world.neurotoxin[world.neurotoxin.length-1].clouds = [];
			randomizeClouds(world.neurotoxin.length-1);
		}
	}

	lastElementTouched = elementType;

	drawingBox = false;
}

function undoMouseInput(){
	if(lastElementTouched){
		world[lastElementTouched].pop();
	};

	lastElementTouched = null;
}

// Initial stuff.
for (const background of backgrounds) {
	let opt = document.createElement("option");
	opt.value = background;
	opt.innerHTML = background;
	document.getElementById("possible-background").appendChild(opt);
}

canvas.addEventListener("mousedown", whenMouseDown, false);
canvas.addEventListener("mouseup", whenMouseUp, false);	