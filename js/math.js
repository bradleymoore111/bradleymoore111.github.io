var m = {
	PI:3.141592653589793,
	Pi:3.141592653589793,
	pi:3.141592653589793,
	LN2:0.6931471805599453,
	Ln2:0.6931471805599453,
	ln2:0.6931471805599453,
	e:2.718281828459045,
	E:2.718281828459045,
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
	VtoXY:function(magnitude,angle){
		var toRe= [];
		toRe[0] = this.cos(angle)*magnitude;
		toRe[1] = this.sin(angle)*magnitude;
		return toRe;
	},
	VtoMA:function(x,y){
		var toRe= [];
		toRe[0] = this.sqrt(this.pow(x,2)+this.pow(y,2));
		toRe[1] = (Math.atan(y/x)*180)/this.pi;
		if(x<0){toRe[1]+=180;}
		if(toRe[1]<0){toRe[1]+=360}
		return toRe;
	},
	simplify:function(givenArray){
		var topFactors = m.factor(givenArray[0]);
		var botFactors = m.factor(givenArray[1]);
		var returnArray= givenArray;
		for(var top=0;top<topFactors.length;top++){
			var topFactor = topFactors[top];
			for(var bot=0;bot<botFactors.length;bot++){
				var botFactor = botFactors[bot];
				if((topFactors[top]==botFactors[bot])&&(topFactors[top]!=1)){
					returnArray[0]/=topFactors[top];
					returnArray[1]/=botFactors[bot];

					topFactors[top] =1;
					botFactors[bot] =1;
				}
			}
		}
		return returnArray;
	},
	arithMean:function(array){
		var total=0;
		for(var i=0;i<array.length;i++){
			total+=array[i];
		}
		return total/array.length;
	},
	geoMean:function(array){
		var total=1;
		for(var i=0;i<array.length;i++){
			total*=array[i];
		}
		return m.rad(total,array.length);
	},
	geoArithMean:function(number1,number2){
		return arithGeoMean(number1,number2)
	},
	// I have to use an array for this, realistically. I could get away with not, but it's not needed
	arithGeoMean:function(number1,number2){
		var arithBound=[m.arithMean([number1,number2])];
		var geoBound=[m.geoMean([number1,number2])];
		var meanInteger=0
		while(arithBound[arithBound.length-1]!==geoBound[geoBound.length-1]){
			arithBound[meanInteger+1]=m.arithMean([arithBound[meanInteger],geoBound[meanInteger]]);
			geoBound[meanInteger+1]=m.geoMean([arithBound[meanInteger],geoBound[meanInteger]]);
			meanInteger+=1;
		}
		return geoBound[geoBound.length-1]
	},
	factorial:function(number){
		if(number%1==0){
			return m.intFactorial(number);
		}
	},
	intFactorial:function(number){
		var factorialSum = 1;
		for(var i=0;i<number;i++){
			factorialSum*= number-i;
		}
		return factorialSum
	},
	synthetic:function(system,number){
		var top=system;var mid=[];var bot=[];
		mid[0]=0;
		for(var i=0;i<system.length;i++){
			bot[i]=(top[i]+mid[i]);
			mid[i+1]=(bot[i]*number);
		}
		var remainder=bot[system.length-1]
		return remainder;
	},
	// I should redo this to make more sense, but for now it works
	factor:function(number){
		var factored=new Array();
		var temp;
		if(number>=0){
			for(var i=0;i<number/2+1;i++){
				temp=(number/i);
				if(temp%1==0){
					factored[factored.length]=i;
				}
			}
		}
		if(number<0){
			for(var i=0;i<m.abs(number);i++){
				temp=(m.abs(number)/i);
				if(temp%1==0){
					factored[factored.length]=-i;
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
		for(var i=2;i<number;i++){
			if(number%i==0){
				factored[factored.length]=i;
				number/=i;
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
		if(exponent==0){
			return 1
		}
		if(exponent%1==0){
			return m.intPow(number,exponent);
		}

		var expandedExponent = exponent; // remaking the variable so we can modify it later
		var timesToTen = 1; // Setting the base for the bottom of the fraction
		var aftrDecStrng = exponent.toString(); // Changing the after decimal to a string
		var splitAfterDec = aftrDecStrng.split("."); // Spliting up the string in order to acquire the part after the decimal
		var onlyAfterDec = splitAfterDec[1].split("");
		for(var i=0;i<onlyAfterDec.length;i++){
			onlyAfterDec[i]=parseInt(onlyAfterDec[i]);
		}
		var beforeDecInit = m.intPow(number,parseInt(splitAfterDec[0]))
		var newEnd=[];
		for(var i=0;i<onlyAfterDec.length;i++){
			var newNum = m.intPow(number,onlyAfterDec[i])
			for(var idk=0;idk<(i+1);idk++){
				newEnd[i]=m.intRad(newNum,10)
				newNum = newEnd[i]
			}
		}

		for(var i=0;i<newEnd.length;i++){
			beforeDecInit*=newEnd[i]
		}
		return beforeDecInit;
	},
	// exponent must be a positive integer. FOR NOW
	intPow:function(number,exponent){
		var finalEnd=1;
		if(exponent==0){
			return 1;
		}
		for(var i=0;i<m.abs(exponent);i++){
			finalEnd*=number;
		}
		if(exponent<0){
			return (1/finalEnd);
		}
		return finalEnd;
	},
	// Has optional specs. You don't really need it.
	// I should make it m.log(number) as soon as I figure out m.log

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
			var sqrtInteger = 0;

			var looper = [lowerBound,upperBound];
			var checker= [lowerBound,upperBound];

			while ((!(looper[0]==looper[1]))||(!(checker[0]==checker[1]))) {
				averageBounds=(lowerBound+upperBound)/2;
				lowerBound=averageBounds;
				upperBound=number/lowerBound;

				looper[sqrtInteger%2] = averageBounds;
				checker[sqrtInteger%2]= upperBound;

				sqrtInteger++;
			}
			return averageBounds;
		}
		else{
			return NaN
		}
	},
	rad:function(number,index){
		if(number<0) {
			return "cannot exist";
		}
		if(index%1==0){
			return m.intRad(number,index);
		}
		return m.pow(number,1/index)
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
		var initGuess = 1;
		var inside = function (number){
			var leftInsideIntRad = (root-1)*number;
			var rightInsideIntRad = number1/m.intPow(number,root-1);
			return (leftInsideIntRad+rightInsideIntRad)/root;
		}
		var checker= [];
		var looper = [];
		checker[0] = 1;
		checker[1] = inside(1);
		looper[0]=1;
		looper[1]=inside(1);
		var intRadInteger=0;
		while((!(checker[0]==checker[1]))&&(!(looper[1]==looper[0]))) {
			intRadInteger+=1;
			initGuess=inside(initGuess);
			checker[intRadInteger%2]=initGuess
			looper[intRadInteger%3] =initGuess
		}
		return initGuess;
	},
	// Currently only works with clean numbers
	// Will work on even numbers
	log:function(number,base){
		if(isNaN(base)){
			base = 10;
		}
		// Otherwise running ln of small numbers is slow
		if(number<1){
			return -1*m.ln(1/number)/m.ln(base)
		}
		return m.ln(number)/m.ln(base);
	},
	// It's broken
	ln:function(number){
		if(number<1){
			return -1*m.logNatural(1/number)
		}
		return m.logNatural(number)
	},
	logNatural:function(numberBegin){
		// I would use m.rad(number,2), except I need a clean number at the end
		var number=numberBegin;
		var totZer=0;
		while(number>=2){
			totZer++;
			number/=2;
		}
		// Taylor series time!
		var	lnInt = 1;
		var total = 0;
		var loops = [1,0]
		while(!(loops[1]==loops[0])){
			total+= (((lnInt+1)%2==0)?1:-1)*m.pow((number-1),lnInt)/lnInt
			loops[lnInt%2]=total;
			lnInt+=1;
		}
		for(var ff=0;ff<totZer;ff++){
			total+=m.LN2;
		}
		return total;
	},
	// Accepts it in degrees
	sin:function(numberDegrees){
		// Conditions
		var number  = numberDegrees%360;
		if(number==0)	{return 0}
		if(number==30)	{return m.intRad(1,2)/2}
		if(number==45)	{return m.intRad(2,2)/2}
		if(number==60)	{return m.intRad(3,2)/2}
		if(number==90)	{return 1}
		if(number==120)	{return m.intRad(3,2)/2}
		if(number==135)	{return m.intRad(2,2)/2}
		if(number==150)	{return m.intRad(1,2)/2}
		if(number==180)	{return 0}
		if(number==210)	{return -m.intRad(1,2)/2}
		if(number==225)	{return -m.intRad(2,2)/2}
		if(number==240)	{return -m.intRad(3,2)/2}
		if(number==270)	{return -1}
		if(number==300)	{return -m.intRad(3,2)/2}
		if(number==315)	{return -m.intRad(2,2)/2}
		if(number==330)	{return -m.intRad(1,2)/2}


			number *= m.PI/180;
		var checker = [];checker[0]=0;checker[1]=1;checker[2]=2;
		var looper  = [];looper[0]=0;looper[1]=1;looper[2]=2;looper[3]=3;
		var top;
		var bot;
		var total=0;
		var negative;
		var sinInt=1;
		while(((!(checker[0]==checker[1]))&&(!(checker[1]==checker[2])))&&((!(looper[0]==looper[1])) && (!(looper[1]==looper[2])) && (!(looper[2]==looper[3])))) {
			if(sinInt%2==1){
				top=m.pow(number,sinInt);
				bot=m.factorial(sinInt);
				if(sinInt%4==1){
					negative=1
				}
				if(sinInt%4==3){
					negative=-1
				}
				total+= negative*top/bot
				checker[sinInt%3]=total;
				looper[sinInt%4]=total;
			}
			sinInt+=1;
		}
		return checker[0]
	},
	sine:function(number){
		return m.sin(number);
	},
	cos:function(numberDegrees){
		// Conditions
		return m.sin(numberDegrees+90);
		/*
		var number = numberDegrees%360;
		if(number==0)	{return 0}
		if(number==30)	{return 1/2}
		if(number==90)	{return 1}
		if(number==150)	{return 1/2}
		if(number==180)	{return 0}
		if(number==210)	{return -1/2}
		if(number==270)	{return -1}
		if(number==330)	{return -1/2}
		var	number  = numberDegrees*m.PI/180;
		var checker = [];checker[0]=0;checker[1]=1;checker[2]=2;
		var looper  = [];looper[0]=0;looper[1]=1;looper[2]=2;looper[3]=3;
		var top;
		var bot;
		var total=0;
		var negative;
		var sinInt=0;
		while(((!(checker[0]==checker[1]))&&(!(checker[1]==checker[2])))&&((!(looper[0]==looper[1])) && (!(looper[1]==looper[2])) && (!(looper[2]==looper[3])))) {
			if(sinInt%2==0){
				top=m.pow(number,sinInt);
				bot=m.factorial(sinInt);
				if(sinInt%4==0){
					negative=1
				}
				if(sinInt%4==2){
					negative=-1
				}
				total+= negative*top/bot
				checker[sinInt%3]=total;
				looper[sinInt%4]=total;
			}
			sinInt+=1;
		}
		return checker[0]*/
	},
	cosine:function(number){
		return m.cos(number);
	},
	tan:function(number){
		return m.sin(number)/m.cos(number);
	},
	tangent:function(number){
		return m.tan(number);
	},
	csc:function(number){
		return 1/m.sin(number);
	},
	cosecant:function(number){
		return m.csc(number);
	},
	sec:function(number){
		return 1/m.cos(number);
	},
	secant:function(number){
		return m.sec(number);
	},
	cot:function(number){
		return 1/m.tan(number);
	},
	cotangent:function(number){
		return m.cot(number);
	},
	factorial:function(number){
		var factorialEnd = 1;
		for(var i=number;i>0;i--){
			factorialEnd*= i;
		}
		return factorialEnd;
	},
	rrt:function(first,last){
		var lastFactors =m.factor(last);
		var firstFactors=m.factor(first);
		var totalFactors=[];

		for(var i=0;i<firstFactors.length;i++){
			for(var j=0;j<lastFactors.length;j++){
				totalFactors[totalFactors.length]=m.abs(lastFactors[i]/firstFactors[j]);
				totalFactors[totalFactors.length]=-m.abs(lastFactors[i]/firstFactors[j]);
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

	    for(var i=0;i<array.length;i++) {

	        var sorted = true;

	        for(var j=0;j<length;j++) {
	            if(array[j]>array[j+1]) {
	                array.splice(j,2,array[j+1],array[j]);
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
		for(var i=0;i<length;i++){
			if(a[length-1]==0){
				origZeros++;
				length-=1;
				zeros[zeros.length]=0;
			}
		}
		var beginFactors = m.factor(a[0])
		var endFactors = m.factor(a[length-1])
		// Checking the factors with synthetic division
		var toSend
		var tempLength
		// First sends it twice, once for positive once for negative
		// Has a problem with sending the same number in 2 different ways
		// Eg. Sending -2/1 and -4/2
		// Is effectively rational roots. What ever
		for(var y=0;y<=beginFactors.length;y++){
			for(var n=0;n<=endFactors.length;n++){
				toSend=endFactors[n]/beginFactors[y];
				if(0==m.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}
		for(var y=0;y<beginFactors.length;y++){
			for(var n=0;n<endFactors.length;n++){
				toSend=-1*endFactors[n]/beginFactors[y];
				if(0==m.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}

		zeros.sort(
			function(a,b){
				return a-b;
			}
		);

		var finalZeros = [];
		if(zeros.length>0){
			finalZeros.push(zeros[0]);
			for(var i=1;i<zeros.length;i++){
				if(zeros[i]!=finalZeros[finalZeros.length-1]){
					finalZeros.push(zeros[i]);
				}
			}
		}

		return finalZeros
		// Would be a good idea to add a repeat checker, but again
		// What ever
	},
	// number theory stuff
	euclidean:function( a, b ){
		if( b == 1 || a == 1 ){
			return 1;
		}

		var s = a + " = ";

		// assuming b is the smaller
		var total = 0;

		while( a > b ){
			a -= b;
			total++;
		}

		s += total + "*" + b + " + " + a;

		console.log( s );

		return m.euclidean(b, a);
	},
	gcd:function( a, b ){
		if( a == 0 ){
			return b;
		}

		if( b == 0 ){
			return a;
		}

		if( b == 1 ){
			return 1;
		}

		return m.gcd( b, a%b );
	},
	extendedEuclidean:function (a, b) {
	    if (a == 0) {
		return [0, 1];
	    }

	    result = m.extendedEuclidean(b % a, a);

	    return [result[1] - ((b/a) | 0) * result[0], result[0]];
	},
	modMultInverse:function(n, m) {
	    if (m.gcd(n, m) != 1) return null;

	    // Extended Euclidean
	    // Find some sn + tm = 1, s is the multiplicative inverse of n mod m.
	    let s = m.extendedEuclid(n, m)[0];

	    while (s < 1) {
		s += m;
	    }

	    return s;
	},
	modpow:function(b, e, m){
	    if( m == 1 ){
	    	return 0;
	    }

	    var c = 1;

	    for( var e_p = 0; e_p < e; e_p++ ){
	    	c = (c*b) % m;
	    }

	    return c;
	},
	repeated_square:function(b,e,m){
		var arr = [1], s = "";
		for(var i=2;arr[arr.length-1]*2 < e; i*= 2){
			arr[arr.length] = i;
		}

		if( arr.length <= 1 ){
			return "";
		}

		var last = (b%m);
		s = b + "^1 = " + (b%m) + " (mod " + m + ")";
		var parts = [];
		for(var i=1;i<arr.length;i++){
			var temp = this.modpow(b,arr[i],m);
			parts[parts.length] = last;
			s += "\n" + b + "^" + arr[i] + " = " + last + "^2 (mod " + m + ") = " + temp;
			last = temp;
		}

		parts[parts.length] = last;

		s += "\n\n" + b + "^" + e + " = " + b + "^( ";

		var needed = [], temp_e = e;
		for(var i=arr.length-1; i >= 0; i-- ){
			if( arr[i] <= temp_e ){
				s += (needed.length? " + " + arr[i]:arr[i]);
				needed[needed.length] = arr[i];
				temp_e -= arr[i];
			}
		}

		s += " ) = " + this.modpow(b,e,m);

		return s;
	},
	ncr:function(n,k){
		if( k > n/2 ){
			k = n-k;
		}

		var final = 1;

		for(var i=1;i<=k;i++){
			final *= (n - k + i);
			final /= i;
		}

		return final;

		// return m.factorial(n) / (m.factorial(n-k) * m.factorial(k)); // alternative but VERY prone to overflow.
	},
	// Builds pascal's triangle basically.
	ncr_no_overflow:function(n,k){
		var array = [1];

		for(var i=0;i<=n;i++){
			for(var j=i;j > 0; j--){
				if( undefined == array[j] ){
					array[j] = 0;
				}
				array[j] += array[j - 1];
			}
		}

		return array[k];
	}
}, math = m;
