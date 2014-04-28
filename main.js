function viewport()	{
	var e = window
	, a = 'inner';
	if ( !( 'innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { 
		width: e[a+'Width'],
		height: e[a+'Height']
	}
}
function setSizes() {
	var sizes = viewport();
	var container = document.getElementById("container").style;
	var header = document.getElementById("header").style;
	var links = document.getElementById("links").style;
	var main = document.getElementById("main").style;
	var temp = {};
	container.width = (math.floor(sizes.width * 0.9758418740849195)+"px");
	container.height= (math.floor(sizes.height * 0.9758418740849195)+"px");

	header.width = container.width;
	header.height = "50px";

	links.width = "150px";
	temp.height = parseInt(container.height.split("p")[0]);
	temp.height-= 50;
	links.height = (temp.height+"px");

	main.height = links.height;
	temp.width  = parseInt(container.width.split("p")[0]);
	temp.width -= 150;
	if((temp.width+150)==header.width.split("p")[0]){
		main.width  = (temp.width+"px");
	}else{
		if((temp.width+150)<header.width.split("p")[0]){
			main.width = ((temp.width+1)+"px");
		}else{
			main.width = ((temp.width-1)+"px");
		}
	}
}