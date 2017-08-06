function getPublications(event){
	var id=event.target.id;
	var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/publications.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						publications.innerHTML="";
						var data="";
						data += "<h2 style='text-align: center;'>Publications ("+id+")</h2>";
						data += "<table class='table'>";
						data += "<tr><th>Publication</th></tr>";
						var index=0;
						for(var i=0;i<contents.length;i++){
							if(contents[i].year===id){
								var modifiedAuthors=contents[i].authors.replace("M. A. Alim","<b>M. A. Alim</b>");
								index++;
								data += "<tr><td>"+index+"&nbsp;)&nbsp;&nbsp;"+modifiedAuthors;
								data += ",<a href='"+contents[i].link+"' target='_blank'>\""+contents[i].title;
								data += "\"</a>,<span class='publication-title'>"+contents[i].conference+"</span>";
								data += contents[i].source+"</td></tr>";
							}
							
						}
						data += "</table>";
						publications.innerHTML += data;
	
					}
				}
				httpRequest.send(null);
			}
}

function getBiography(){
	var httpRequest=false;
	var httpRequest2=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
				httpRequest2=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
				httpRequest2=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/biography.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						publications.innerHTML="";
						var data="";
						data += "<h2 style='text-align: center;'>Biography</h2>";
						data += "<table class='table'>";
						data += "<tr><th>Date</th><th>Academic Rank</th><th>Institute</th></tr>";
						for(var i=0;i<contents.length;i++){
								data +="<tr>";
								data +="<td>"+contents[i].date+"</td>";
								data +="<td>"+contents[i].academicRank+"</td>";
								data +="<td>"+contents[i].department+","+contents[i].institute+"</td></tr>";
				
						}
						data += "</table><br /><br />";
						publications.innerHTML += data;
	
					}
				}
				httpRequest.send(null);
			}

			if(httpRequest2){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest2.overrideMimeType("application/json");
				httpRequest2.open("GET","jsons/education.json",true);

				httpRequest2.onreadystatechange=function(){
					if(httpRequest2.status==200 && httpRequest2.readyState==4){
						content=httpRequest2.responseText;
						var contents=JSON.parse(content);
						var data="";
						data += "<h2 style='text-align: center;'>Education</h2>";
						data += "<table class='table'>";
						data += "<tr><th>Date</th><th>Degree</th><th>Institute</th></tr>";
						for(var i=0;i<contents.length;i++){
								data +="<tr>";
								data +="<td>"+contents[i].date+"</td>";
								data +="<td>"+contents[i].degree+"</td>";
								data +="<td>"+contents[i].institute+"</td></tr>";
				
						}
						data += "</table><br /><br />";
						publications.innerHTML += data;
	
					}
				}
				httpRequest2.send(null);
			}

}

function getAwards(){
	var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/awardsAndGrants.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						publications.innerHTML="";
						var data="";
						data += "<h2 style='text-align: center;'>Awards And Grants</h2>";
						data += "<table class='table'>";
						data += "<tr><th>Date</th><th>Awards And Grants</th></tr>";
						for(var i=0;i<contents.length;i++){
								data +="<tr>";
								data +="<td>"+contents[i].date+"</td>";
								data +="<td>"+contents[i].awards+"</td></tr>";
						}
						data += "</table>";
						publications.innerHTML += data;
	
					}
				}
				httpRequest.send(null);
			}
}
function getCoursesTaught(){
	var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/coursesTaught.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						publications.innerHTML="";
						var data="";
						data += "<h2 style='text-align: center;'>Courses Taught</h2>";
						data += "<table class='table'>";
						data += "<tr><th>Title</th><th>Course Code</th><th>Year</th><th>Institution</th></tr>";
						for(var i=0;i<contents.length;i++){
								data +="<tr>";
								data +="<td>"+contents[i].title+"</td>";
								data +="<td>"+contents[i].courseCode+"</td>";
								data +="<td>"+contents[i].year+"</td>";
								data +="<td>"+contents[i].institution+"</td></tr>";
						}
						data += "</table>";
						publications.innerHTML += data;
	
					}
				}
				httpRequest.send(null);
			}
}
function getResearches(){
	var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publications=document.getElementById('information-holder');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/currentResearch.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						publications.innerHTML="";
						var data="<section>";
						data += "<h2 style='text-align: center;'>Current Research Work</h2>";
						data += "<ul class='research-work'>";
						for(var i=0;i<contents.length;i++){
								data += "<li>"+contents[i].title+"</li>";
						}
						data += "</ul></section>";
						publications.innerHTML += data;
	
					}
				}
				httpRequest.send(null);
			}
}












