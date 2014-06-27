function loadLinks () {
	document.getElementById("links").innerHTML = '<div id="linksContent"><a href="../index.html">Home</a><br><a href="../math/index.html">Math</a><br><a id="msuicLink" href="../msuic/index.html"></a><br><a href="../encryption/index.html">Encryption</a><br><a href="../love/index.html">Love</a><br></div>'
	if(Math.random()<.5){
		document.getElementById("msuicLink").innerText = "Msuic";
	}else{
		document.getElementById("msuicLink").innerText = "Music";
	}
}