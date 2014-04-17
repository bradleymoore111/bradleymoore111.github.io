var key;var combo;var message
function toChar(num){
	return String.fromCharCode(96+num);
}
function toNum(char){
	return char.charCodeAt(0) - 96
}
function makeKey () {
	var size=document.getElementById("encryptMessage").value.length
	var key = ""
	for (i=0;i<size;i++){
		var tempDig = Math.floor(Math.random()*26+1);
		tempDig=toChar(tempDig);
		key+=tempDig;
	}
	return key
}
var key
function encrypt (input,inputKey) {
	var message	=input;
	var size	=input.length;
	var inputA 	=input.split("");
	/*var*/key	=inputKey||makeKey();
	var keyA 	=key.split("");

	// setting them equal to numbers
	for(i=0;i<size;i++){
		inputA[i]=toNum(inputA[i]);
		keyA[i]	 =toNum(keyA[i]);
	}
	// End converting them into numbers

	// Adding them together
	var combined=[];
	for(i=0;i<size;i++){
		combined[i]=keyA[i]+inputA[i];
	}

	// Set back to new encrypted output
	for(i=0;i<size;i++){
		if(combined[i]>26){combined[i]-=26;}
		combined[i] = toChar(combined[i]);
	}

	// Turning into string for niceness
	var combo = ""
	for(i=0;i<size;i++){
		combo+=combined[i]
	}
	//document.writeln("<p>Your input is "+input+", your output is "+combo+", and the key is "+key+"</p>")
	return combo;
}

function decrypt (output,keyInput){
	var size	=output.length;
	var combo	=output;
	var key		=keyInput
	var outputA	=output.split("");
	var keyA	=key.split("");
	var outputB =[];
	var keyB 	=[];

	// Turning output into numbers
	for(i=0;i<size;i++){
		outputB[i] = toNum(outputA[i]);
		keyB[i] = toNum(keyA[i]);
	}

	// Add 26 to the ouput
	for(i=0;i<size;i++){
		outputB[i]+=26
	}

	var input=[];
	// Find final
	for(i=0;i<size;i++){
		input[i]=outputB[i]-keyB[i];
		if(input[i]>26){input[i]-=26}
	}

	var inputA=[];
	// Tranform into letters
	for(i=0;i<size;i++){
		inputA[i]=toChar(input[i]);
	}

	var message="";
	// Change to string
	for(i=0;i<size;i++){
		message+=inputA[i];
	}
	//document.writeln("<p>Your original message was "+message+"</p>");
	return message;
}
function encryptInput(){
	return encrypt(document.getElementById("encryptMessage").value,document.getElementById("encryptKey").value);
}
function decryptInput(){
	return decrypt(document.getElementById("decryptCombo").value,document.getElementById("decryptKey").value);
}