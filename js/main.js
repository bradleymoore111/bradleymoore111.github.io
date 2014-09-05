window.onresize=setSizes;
window.addEventListener('resize',setSizes);
function makeScale(pitch,range){
	var scale="";
	function newNote (interval) {
		var temp = pitch*Math.pow(2,interval/12);
		return temp;
	}
	for(i=0;i<(12*range);i++){
		scale+=(newNote(i)+"<br>");
	}
	return scale
}
function viewport()	{
	var e = window
	, a = 'inner';
	if ( !( 'innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { 
		width: e[a+'Width'],
		height: e[a+'Height'],
	}
}
function setSizes() {
	var sizes = viewport();
	var container = document.getElementById("container");
	var header = document.getElementById("header");
	var links = document.getElementById("links");
	var main = document.getElementById("main");
	container.style.width = (math.floor(sizes.width*0.8)+"px");
	container.style.height= (math.floor(sizes.height*0.975)+"px");

	header.style.width = container.style.width;
	header.style.height= "50px";

	//main.height = links.height;
	main.style.width   = (math.floor(sizes.width*0.8)-150+"px");
	if(container.offsetHeight>main.offsetHeight){main.style.height=container.offsetHeight-50+"px"}
	//main.style.height  = (main.offsetHeight>container.offsetHeight)?console.log("main"):main.style.height="90%";

	links.style.width  = "150px";
	links.style.height = main.offsetHeight+"px";

	container.style.height= main.offsetHeight+50+"px";
}