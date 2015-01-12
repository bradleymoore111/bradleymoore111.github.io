function loadLinks () {
	var s = '<div id="linksContent">';
	var links = {
		home:{
			message:"Home",
			link:"../home/index.html",
		},
		math:{
			message:"Math Library",
			link:"../math/index.html",
		},
		msuic:{
			message:((Math.random()<.5)?"Msuic":"Music"),
			link:"../msuic/index.html",
		},
		encryption:{
			message:"Encryption",
			link:"../encryption/index.html",
		},
		citation:{
			message:"Citations",
			link:"../citation/index.html",
		},
		love:{
			message:"Love",
			link:"../love/index.html",
		},
	}
	for(var i in links){
		s += '<a href="';
		s += links[i].link + '">';
		s += links[i].message + '</a><br>'; 
	}
	s += '</div>'
	document.getElementById("links").innerHTML = s;
}