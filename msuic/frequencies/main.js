function makeScale(pitch,range){
	var scale="";
	function newNote (interval) {
		var temp = pitch*Math.pow(2,interval/12);
		return temp;
	}
	for(i=0;i<(12*range);i++){
		scale+=(newNote(i)+"<br>");
	}
	//document.getElementById("right").innerHTML = scale
	return scale
}
/*function scaleLoad(){
	return makeScale(document.getElementById("pitch").value,document.getElementById("range").value);
}*/