var math = {
	PI:3.141592653589793,
	Pi:3.141592653589793,
	pi:3.141592653589793,
	LN2:0.6931471805599453,
	Ln2:0.6931471805599453,
	ln2:0.6931471805599453,
	toDecimal:function(givenArray){
		givenArray[2] = givenArray[0]/givenArray[1];
		return givenArray[2];
	},
	toFraction:function(givenDecimal){
		var number1=givenDecimal;
		var timesTen=0;
		while(number1%1!==0){
			number1*=10;
			timesTen++;
		}

		console.log(number1);
		console.log(timesTen);
	},
	simplify:function(givenArray){
		var topFactors = math.factor(givenArray[0]);
		var botFactors = math.factor(givenArray[1]);
		var returnArray= givenArray;
		for(topInteger=0;topInteger<topFactors.length;topInteger++){
			var topFactor = topFactors[topInteger];
			for(botInteger=0;botInteger<botFactors.length;botInteger++){
				var botFactor = botFactors[botInteger];
				if((topFactors[topInteger]==botFactors[botInteger])&&(topFactors[topInteger]!=1)){
					returnArray[0]/=topFactors[topInteger];
					returnArray[1]/=botFactors[botInteger];

					topFactors[topInteger] =1;
					botFactors[botInteger] =1;
				}
			}
		}
		return returnArray;
	},
	arithMean:function(number1,number2){
		return ((number1+number2)/2);
	},
	geoMean:function(number1,number2){
		return (math.sqrt(number1*number2));
	},
	geoArithMean:function(number1,number2){
		return arithGeoMean(number1,number2)
	},
	// I have to use an array for this, realistically. I could get away with not, but it's not needed
	arithGeoMean:function(number1,number2){
		var arithBound=[math.arithMean(number1,number2)];
		var geoBound=[math.geoMean(number1,number2)];
		var meanInteger=0
		while(arithBound[arithBound.length-1]!==geoBound[geoBound.length-1]){
			arithBound[meanInteger+1]=math.arithMean(arithBound[meanInteger],geoBound[meanInteger]);
			geoBound[meanInteger+1]=math.geoMean(arithBound[meanInteger],geoBound[meanInteger]);
			meanInteger+=1;
		}
		return geoBound[geoBound.length-1]
	},
	factorial:function(number){
		if(number%1==0){
			return math.intFactorial(number);
		}
	},
	intFactorial:function(number){
		var factorialSum = 1;
		for(factorialInteger=0;factorialInteger<number;factorialInteger++){
			factorialSum*= number-factorialInteger;
		}
		return factorialSum
	},
	synthetic:function(system,number){
		var top=system;var mid=[];var bot=[];
		mid[0]=0;
		for(syntheticInteger=0;syntheticInteger<system.length;syntheticInteger++){
			bot[syntheticInteger]=(top[syntheticInteger]+mid[syntheticInteger]);
			mid[syntheticInteger+1]=(bot[syntheticInteger]*number);
		}
		var remainder=bot[system.length-1]
		return remainder;
	},
	// I should redo this to make more sense, but for now it works
	factor:function(number){
		var factored=new Array();
		var temp;
		if(number>=0){
			for(factorInteger=0;factorInteger<number/2+1;factorInteger++){
				temp=(number/factorInteger);
				if(temp%1==0){
					factored[factored.length]=factorInteger;
				}
			}
		}
		if(number<0){
			for(factorInteger=0;factorInteger<math.abs(number);factorInteger++){
				temp=(math.abs(number)/factorInteger);
				if(temp%1==0){
					factored[factored.length]=-factorInteger
				}
			}
		}
		factored[factored.length]=number;
		return factored;
	},
	// Almost works
	primeFactor:function(number){
		var factored=new Array();
		var temp;
		for(primeFactorInteger=2;primeFactorInteger<number;primeFactorInteger++){
			if(number%primeFactorInteger==0){
				factored[factored.length]=primeFactorInteger;
				number/=primeFactorInteger;
			}
		}
		factored[factored.length]=number;
		return factored;
	},
	abs:function(number){
		if(number<0){
			return (number*-1);
		}return number;
	},
	floor:function(number){
		var finalEnd=(number-(number%1))
		return finalEnd
	},
	ceiling:function(number){
		var finalEnd=((number-(number%1))+1)
		return finalEnd
	},
	max:function(array){
	},
	pow:function(number,exponent){
		if(exponent%1==0){
			return math.intPow(number,exponent);
		}

		var expandedExponent = exponent; // remaking the variable so we can modify it later
		var timesToTen = 1; // Setting the base for the bottom of the fraction
		var aftrDecStrng = exponent.toString(); // Changing the after decimal to a string
		var splitAfterDec = aftrDecStrng.split("."); // Spliting up the string in order to acquire the part after the decimal
		var onlyAfterDec = splitAfterDec[1].split("");
		for(powInt=0;powInt<onlyAfterDec.length;powInt++){
			onlyAfterDec[powInt]=parseInt(onlyAfterDec[powInt]);
		}
		var beforeDecInit = math.intPow(number,parseInt(splitAfterDec[0]))
		var newEnd=[];
		for(powInt=0;powInt<onlyAfterDec.length;powInt++){
			var newNum = math.intPow(number,onlyAfterDec[powInt])
			newEnd[powInt]=math.intRad(newNum,math.intPow(10,powInt+1))
		}

		for(powInt=0;powInt<newEnd.length;powInt++){
			beforeDecInit*=newEnd[powInt]
		}
		return beforeDecInit;
	},
	// exponent must be a positive integer. FOR NOW
	intPow:function(number,exponent){
		var finalEnd=1;
		if(exponent==0){
			return 1;
		} 
		for(powerInteger=0;powerInteger<math.abs(exponent);powerInteger++){
			finalEnd*=number;
		}
		if(exponent<0){
			return (1/finalEnd);
		}
		return finalEnd;		
	},
	// Has optional specs. You don't really need it. 
	// I should make it math.log(number) as soon as I figure out math.log

	//sqrt:function(number,specs){
	/*
		Condensed version of Newton's Method, or the nth root alorithm for where n=2
		The nth algorithm 1/n ( (n-1)x_k + A/X_k^n-1 )
		Condensed, 1/2 ( (2-1)x_k + A/x_k^2-1)
		1/2 (x_k + a/x_k)
		That's all this does
	*/
	sqrt:function(number){ 
		if(number<0){
			return -Infinity;
		}
		if(number==0){
			return 0;
		}
		if(number>0){
			var lowerBound = 1;
			var upperBound = number;
			var averageBounds;
			var specs = number+1000
			for(sqrtInteger=0;sqrtInteger<specs;sqrtInteger++){
				averageBounds=(lowerBound+upperBound)/2;
				lowerBound=averageBounds;
				upperBound=number/lowerBound;
			}
			return averageBounds;
		}
		else{
			return NaN
		}
	},
	rad:function(number,index){
		//this method determines the nth root, if n is a positive integer (fixed if power works, nonintegers work)
		
		if(number<0) {
			return "cannot exist";
		}
		if(number%1==0){
			return math.intRad(number,index);
		}
		
		var final = 2; //this is just our most current answer
		var guess = 5; //this number starts off the process
		var time = new Date();
		var runTime = 0;
		var startTime = time.getTime();
		
		while((final !== guess) && (runTime < 20000)) {
			guess = final;
			final = guess - (math.pow(guess,index) - number) / (index * math.pow(guess,index - 1));
			var time2 = new Date();
			var endTime = time2.getTime();
			runTime = endTime - startTime;
		}

		return final;
	},
	// Doesn't work with massive numbers :(
		/* 	
			A function to return the formula found on http://en.wikipedia.org/wiki/Nth_root_algorithm
			Left is the inside left of the bracket
			Right is the inside right of the bracket
			the final return of it all being over root is the outside fraction 1/n simplified
			(n-1)x_k = leftInsideIntRad
			A / x_k ^ (n-1) = rightInsideIntRad
			n = root
			x_k = number, or the current number
			x_k+1 = the returned number, or the next number in the series
			A = number1, or the original number to be rooted
		*/	
	intRad:function(number1,root){
		var initGuess = [1];
		var inside = function (number){ /* 	A function to return the formula found on http://en.wikipedia.org/wiki/Nth_root_algorithm
											Left is the inside left of the bracket
											Right is the inside right of the bracket
											the final return of it all being over root is the outside fraction 1/n simplified

											(n-1)x_k = leftInsideIntRad
										*/	
			var leftInsideIntRad = (root-1)*number;
			var rightInsideIntRad = number1/math.intPow(number,root-1);
			return (leftInsideIntRad+rightInsideIntRad)/root;
		}
		for(i=0;i<10000;i++){
			initGuess=inside(initGuess);
		}
		return initGuess;
	},
	// Currently only works with clean numbers
	// Will work on even numbers
	log:function(number,base){

	},
	// It's broken
	ln:function(number,specs){
		
	},
	// Accepts it in degrees
	sin:function(numberRadian){
		var number = (numberRadian*math.PI)/180
		var numberFinal = ( number - (math.intPow(number,3)/6) + (math.intPow(number,5)/120) - (math.intPow(number,7)/5040) + (math.intPow(number,9)/362880) - (math.intPow(number,11)/39916800) )
 		return numberFinal
	},
	cosine:function(number){

	},
	rrt:function(first,last){
		var lastFactors =math.factor(last);
		var firstFactors=math.factor(first);
		var totalFactors=[];
		
		for(rrtFirstInteger=0;rrtFirstInteger<firstFactors.length;rrtFirstInteger++){
			for(rrtSecndInteger=0;rrtSecndInteger<lastFactors.length;rrtSecndInteger++){
				totalFactors[totalFactors.length]=math.abs(lastFactors[rrtFirstInteger]/firstFactors[rrtSecndInteger]);
				totalFactors[totalFactors.length]=-math.abs(lastFactors[rrtFirstInteger]/firstFactors[rrtSecndInteger]);
			}
		}

		totalFactors = sort(totalFactors);
	
		//Deletes all duplicates
		
		var runs = 0;
		
		while(runs<totalFactors.length-2){ // Why isn't this a for loop?
			if(totalFactors[runs]===totalFactors[runs+1]){
				totalFactors.splice(runs,1);
			} else {
				runs++;
			}
		}		
		
		return totalFactors;
	},
	sort:function(array){ // Delete this, unless you have a reason not to.
		    
	    var length = array.length-1; 
	    
	    for(sortInteger=0;sortInteger<array.length;sortInteger++) {
	        
	        var sorted = true;
	        
	        for(sortJnteger=0;sortJnteger<length;sortJnteger++) {
	            if(array[sortJnteger]>array[sortJnteger+1]) {
	                array.splice(sortJnteger,2,array[sortJneteger+1],array[sortJnteger]);
	                sorted = false;
	            }
	        }
	        
	        if(sorted) {
	            return array;
	        }
	        
	        length--;
	        
		}
	    
	    return array;
	},
	solvePolynomials:function(a){
		var zeros = [];
		// Defining length for later for loops
		var length = a.length;
		// Redefines length for end zeros, as if factoring x out of x^3+4x, since there's a zero it removes it
		var origZeros = 0;
		for(i=0;i<length;i++){
			if(a[length-1]==0){
				origZeros++;
				length-=1;
				zeros[zeros.length]=0;
			}
		}	
		var beginFactors = math.factor(a[0])
		var endFactors = math.factor(a[length-1])
		// Checking the factors with synthetic division
		var toSend
		var tempLength
		// First sends it twice, once for positive once for negative
		// Has a problem with sending the same number in 2 different ways
		// Eg. Sending -2/1 and -4/2
		// Is effectively rational roots. What ever
		for(y=0;y<=beginFactors.length;y++){
			for(n=0;n<=endFactors.length;n++){
				toSend=endFactors[n]/beginFactors[y];
				if(0==math.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}
		for(y=0;y<beginFactors.length;y++){
			for(n=0;n<endFactors.length;n++){
				toSend=-1*endFactors[n]/beginFactors[y];
				if(0==math.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}
		return zeros
		// Would be a good idea to add a repeat checker, but again
		// What ever
	},
};