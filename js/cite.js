var currentStyle = "none";
function pickStyle(){
	currentStyle = document.getElementById("styleSelect").value;
	if(currentStyle == "none"){
		document.getElementById("forms").innerHTML = "<p>Please select a style</p>";
	}else{
		document.getElementById("forms").innerHTML = "";
		addForm(currentStyle);
	}
}

function addForm(style){
	if(style=="MLA"){
		document.getElementById('forms').innerHTML = "<div id=\"MLAform\" style=\"width:800px;float:left\"><p>	All right! Modern American Language WHOOOOOOOOOOOOOOOOOOOOO<br>	Information taken from <a href=\"https://owl.english.purdue.edu/owl/resource/747/12/\">Purdue's site</a><br>	<select id=\"TypeSelect\" onchange=\"loadInfo('info')\">		<option value=\"none\">Please select one...</option>		<option value=\"print\">Book</option>		<option value=\"online\">Website</option>	</select>	<div id=\"info\">		<form id=\"contributors\">			<p>				How many contributors were there? 				<input id=\"numContributors\" onchange=\"loadContributors('contributorsInput','numContributors')\"><br>				(Authors or editors)			</p>			<div id=\"contributorsInput\">							</div>		</form>		<form id=\"bookInfo\">			<p>Book title: <input id=\"bookTitle\" type=\"text\" style=\"width:500px\"></p>			<p>				Volume: <input id=\"bookVolume\" type=\"text\" style=\"width:50px\">				Edition: <input id=\"bookEdition\" type=\"text\" style=\"width:50px\">				Chapter Title: <input id=\"bookChapter\" type=\"text\" style=\"width:100px\">				Pages: <input id=\"bookPages\" type=\"text\" style=\"width:50px\">			</p>		</form>		<form id=\"publisherInfo\">			<p>City: <input id=\"publisherCity\" type=\"text\" style=\"width:250px\"></p>			<p>				State: <input id=\"publisherState\" type=\"text\" style=\"width:250px\"><br>				(If non-US, put country here)			</p>			<p>Publisher: <input id=\"publisher\" type=\"text\" style=\"width:250px\"></p>			<p>Year Published: <input id=\"publisherYear\" type=\"text\" style=\"width:50px\"></p>			<input id=\"makeCitationButton\" value=\"Click Me When Done\" type=\"button\" style=\"width:200px\" onClick=\"makeCitation('MLA','completedCite')\">		</form>			</div></p></div>";
	}
}
// MLA

// <p>Contributors:</p>
// <p>
// 	<select id='ContributorType'>
// 		<option value='author'>Author</option>
// 		<option value='editor'>Editor</option>
// 	</select>
// 	First name: <input id='ContributorFirstName' type='text'>
// 	Last name: <input id='ContributorLastName' type='text'>
// </p>
contrib = [
	"<p>Contributors:</p><p><select id='ContributorType",
	"'><option value='author'>Author</option><option value='editor'>Editor</option></select>First name: <input id='ContributorFirstName",
	"' type='text'>Last name: <input id='ContributorLastName",
	"' type='text'></p>",
]
var totalContributors = 0;
function loadContributors(divToWrite,divToRead){
	var s = "";
	totalContributors = parseInt(document.getElementById(divToRead).value);
	for(var i=0;i<totalContributors;i++){
		s+=contrib[0]+i;
		s+=contrib[1]+i;
		s+=contrib[2]+i;
		s+=contrib[3];
	}
	document.getElementById(divToWrite).innerHTML = s;
}

// AUTHL, AUTHF, and AUTH2F AUTH2L. "CHAPTER." <i>BOOKTITLE</i>. Ed. EDITF EDITL and EDIT2F EDIT2L. EDITION ed. Vol. VOL. CITY: PUBLISHER, YEAR. PAGENUMBERS. Print.
var contributors = []
function makeCitation(type,divToWrite){
	if(type=="MLA"){
		makeMLACitation(divToWrite);
	}
}
function makeMLACitation(divToWrite){
	var s="";
	var c = totalContributors;
	var e="";//editors
	var contributors = [];
	for(var i=0;i<c;i++){
		contributors[i]={};
		contributors[i].type = document.getElementById('ContributorType'+i).value;
		contributors[i].firstName = document.getElementById('ContributorFirstName'+i).value;
		contributors[i].lastName = document.getElementById('ContributorLastName'+i).value;
		console.log("here");
	}
	var chapter = document.getElementById("bookChapter").value;
	var title = document.getElementById('bookTitle').value;
	var edition = document.getElementById('bookEdition').value;
	var volume = document.getElementById('bookVolume').value;
	var chapter = document.getElementById('bookChapter').value;
	var pages = document.getElementById('bookPages').value;
	var city = document.getElementById('publisherCity').value;
	var publisher = document.getElementById('publisher').value;
	var year = document.getElementById('publisherYear').value;

	var authors = [];
	var editors = [];

	for(var i=0;i<c;i++){
		if(contributors[i].type == "author"){
			authors.push(contributors[i]);
		}else{
			editors.push(contributors[i]);
		}
	}

	if(typeof authors[0] != "undefined"){
		s+= authors[0].lastName+", "+authors[0].firstName;
		for(var i=1;i<authors.length;i++){
			if(i+1==authors.length){
				s+=", and "+authors[i].firstName+" "+authors[i].lastName;
			}else{
				s+=", "+authors[i].firstName+" "+authors[i].lastName;
			}
		}
		s+=". ";
	}

	if(chapter.length>0){
		s+="\""+chapter+"\" ";
	}
	if(title.length>0){
		s+="<i>"+title+"</i>. ";
	}
	

	if(typeof editors[0] != "undefined"){
		s+="Ed. "+editors[0].firstName+" "+editors[0].lastName;
		if(editors.length==2){
			s+=" and "+editors[1].firstName+" "+editors[1].lastName;
		}else{
			for(var i=1;i<editors.length;i++){
				if(i+1==editors.length){
					s+=", and "+editors[i].firstName+" "+editors[i].lastName;
				}else{
					s+=", "+authors[i].firstName+" "+authors[i].lastName
				}
			}
		}
		s+=". ";
	}

	if(edition.length>0){
		s+=edition+"ed. ";
	}
	if(volume.length>0){
		s+="Vol. "+volume+". "
	}

	if(city.length>0){
		s+=city;
		if(publisher.length>0){
			s+=": "+publisher;
		}
		if(year.length>0){
			s+=", "+year;
		}
		s+=". ";	
	}
	if(city.length==0){
		if(publisher.length>0){
			s+=publisher;
			if(year.length>0){
				s+=", "+year;
			}
			s+=". ";
		}else{
			if(year.length>0){
				s+=year+". ";
			}
		}
	}

	if(pages.length>0){
		s+=pages+". ";
	}

	s+="Print.";
	document.getElementById(divToWrite).innerHTML = s;
}