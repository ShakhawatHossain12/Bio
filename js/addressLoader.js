function getData(){
			
			var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var name=document.getElementById('profile-name');
				var rank=document.getElementById('profile-rank');
				var department=document.getElementById('profile-department');
				var institution=document.getElementById('profile-institution');
				var mobileNumber=document.getElementById('profile-m');
				var email=document.getElementById('profile-email');
				var title=document.getElementById('profile-title');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/address.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						console.log(content);
						var contents=JSON.parse(content);
						console.log(contents);
						name.innerHTML=contents[0].name;
						rank.innerHTML=contents[0].rank;
						department.innerHTML=contents[0].department;
						institution.innerHTML=contents[0].institution;
						mobileNumber.innerHTML += contents[0].mobile;
						var emails=contents[0].email.split(',');
						for(var i=0;i<emails.length;i++){
							email.innerHTML += "<a href='mailto: "+emails[i].trim()+"'>"+emails[i].trim()+"</a>,<br>"
						}
						title.innerHTML=contents[0].title;

					}
				}
				httpRequest.send(null);
			}
	}
	function getYear(){
			
			var httpRequest=false;
			if(window.XMLHttpRequest){
				httpRequest=new XMLHttpRequest();
			}else if(window.ActiveXObject){
				httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(httpRequest){
				var publicationYears=document.getElementById('publications-ul');
				var content;
				httpRequest.overrideMimeType("application/json");
				httpRequest.open("GET","jsons/publicationYear.json",true);

				httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						for(var i=0;i<contents.length;i++){
							publicationYears.innerHTML += "<a href='#'><li class='btn btn-info btn-year' id='"+contents[i].year+"' onclick='getPublications(event)'>"+contents[i].year+"</li></a>";
						}
	
					}
				}
				httpRequest.send(null);
			}
	}
	window.onload=function(){
		// getData();
		// getYear();
	};
	$(document).ready(function() {
		getData();
		getYear();
		getBiography();
	});