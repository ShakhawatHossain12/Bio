function updateAddress(){
	var httpRequest=false;
	if(window.XMLHttpRequest){
		httpRequest=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(httpRequest){
		httpRequest.overrideMimeType("application/json");
		httpRequest.open("GET","jsons/address.json",true);

		httpRequest.onreadystatechange=function(){
					if(httpRequest.status==200 && httpRequest.readyState==4){
						var targetDiv=document.getElementById("updateInformationDiv");
						var showInformationDiv=document.getElementById("showInformationDiv");
						var targetNav=document.getElementById("crud");
						content=httpRequest.responseText;
						var contents=JSON.parse(content);
						
						targetDiv.innerHTML='';
						targetNav.innerHTML='';
						targetNav.innerHTML="<div class='crud-nav'>Update</div>";
						var data='';
						var form="<form method='post' action='update.php'>";
						for(var property in contents[0]){
							if(contents[0].hasOwnProperty(property)){
								data += formMaker(property);
							}
						}
						data += "<button type='submit' class='btn btn-info submit-btn'>Submit</button>";
						targetDiv.innerHTML=form+data+"</form>";
						for(var values in contents[0]){
							if(contents[0].hasOwnProperty(values)){
								var targetInput=document.getElementById('_'+values);
								targetInput.value=contents[0][values];							
							}
						}
						var currentInformation="<h2>Current Status</h2>";
						for(var info in contents[0]){
							if(contents[0].hasOwnProperty(info)){
								currentInformation += "<h4>"+info[0].toUpperCase()+info.substr(1,info.length-1)+"</h4>"+contents[0][info]+"<br>";
							}
						}
						showInformationDiv.innerHTML='';
						showInformationDiv.innerHTML=currentInformation;




					}
				}
				httpRequest.send(null);
}
}

function formMaker(target){
	data="<div class='form-group'><label for='"+target+"'>"+target[0].toUpperCase()+target.substr(1, target.length-1)+"</label><input class='form-control' type='text' name='"+target+"' placeholder='"+target+"' id='_"+target+"' /></div>";
	return data;
}