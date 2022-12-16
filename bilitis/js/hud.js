function updateHud(){
	currentTime = ((new Date).getTime() - startingTime);

	var s = level+""+itemKeys+""+bread+""+((currentTime/1000)|0)+""+deaths;

	if(s==oldHud){
		// console.log("It's working");
		return 0;
	}

	// console.log("Redrawing hud");
	htx.clearRect(0, 0, width, 40);
	
	// Level
	htx.drawImage(images.level_large, 5, 5);
	htx.drawImage(images.equals, 95, 10);

	// Calculate each digit of level. If <10, make first digit 0. 
	var firstDigit = level/10 | 0;
	var secondDigit = level%10;
	htx.drawImage(images.nums_large[firstDigit], 120, 5); // first digit
	htx.drawImage(images.nums_large[secondDigit], 140, 5);
	
	// Keys
	htx.drawImage(images.key_large, 200, 5);
	htx.drawImage(images.x_large, 275, 20);
	htx.drawImage(images.nums_large[itemKeys], 293, 5);

	// Bread
	htx.drawImage(images.bread_large, 400, 5);
	htx.drawImage(images.x_large, 435, 20);

	firstDigit = bread/10 | 0;
	secondDigit = bread%10;
	htx.drawImage(images.nums_large[firstDigit], 453, 5);
	htx.drawImage(images.nums_large[secondDigit], 473, 5);

	// Time
	htx.drawImage(images.hourglass, 575, 5);

	var mins = (currentTime/60000) | 0;

	firstDigit = ((mins%100)/10) | 0;
	secondDigit = mins%10;

	htx.drawImage(images.nums_large[firstDigit], 600, 5);
	htx.drawImage(images.nums_large[secondDigit], 620, 5);

	htx.drawImage(images.colon_large, 635, 5);

	var seconds = ((currentTime/1000)|0)%60;

	firstDigit = (seconds/10)|0;
	secondDigit = seconds%10;

	htx.drawImage(images.nums_large[firstDigit], 651, 5);
	htx.drawImage(images.nums_large[secondDigit], 671, 5);

	// Skull
	htx.drawImage(images.skull_large, 775, 5);
	htx.drawImage(images.x_large, 803, 20)

	deaths = parseInt(deaths);
	if(isNaN(deaths)){
		deaths = 0;
	}

	firstDigit = ((deaths%1000)/100)|0;
	secondDigit = ((deaths%100)/10)|0;
	var thirdDigit = deaths%10;

	htx.drawImage(images.nums_large[firstDigit], 821, 5);
	htx.drawImage(images.nums_large[secondDigit], 841, 5);
	// console.log(thirdDigit);
	htx.drawImage(images.nums_large[thirdDigit], 861, 5);

	oldHud = level+""+itemKeys+""+bread+""+((currentTime/1000)|0);
}
