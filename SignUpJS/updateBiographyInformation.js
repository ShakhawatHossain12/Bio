function createFormElements(actionLink){
	var buttonString=actionLink.split('?')[1];
	console.log(buttonString);
	var data='';
	var form="<form method='post' action='"+actionLink+"=true' style='margin:5% auto'>";
	for(var property in contentsGlobal[0]){
		if(contentsGlobal[0].hasOwnProperty(property)){
			data += formMaker(property);
		}
	}
	data += "<button type='submit' class='btn btn-info submit-btn'>"+buttonString[0].toUpperCase()+buttonString.substr(1,buttonString.length-1)+"</button>";
	var targetDiv=document.getElementById("updateInformationDiv");
	targetDiv.innerHTML=form+"<input type='hidden' id='hiddenField' name='hiddenField'>"+data+"</form>";
	if(buttonString==='delete'){
		var inputTags=document.getElementsByTagName('input');
		for(var i=0;i<inputTags.length;i++){
			inputTags[i].setAttribute("readonly","readonly");
		}
	}
}


var contentsGlobal=false;
var searchInputFocus=false;

function updateAllInformation(jsonFile,targetPage,info){
	var httpRequest=false;
	if(window.XMLHttpRequest){
		httpRequest=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		httpRequest=new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(httpRequest){
		httpRequest.overrideMimeType("application/json");
		jsonFile="jsons/"+jsonFile;
		httpRequest.open("GET",jsonFile,true);

		httpRequest.onreadystatechange=function(){
			if(httpRequest.status==200 && httpRequest.readyState==4){
				var targetDiv=document.getElementById("updateInformationDiv");
				var showInformationDiv=document.getElementById("showInformationDiv");
				var targetNav=document.getElementById("crud");
				content=httpRequest.responseText;
				var contents=JSON.parse(content);
				contentsGlobal=contents;

				targetDiv.innerHTML='';
				showInformationDiv.innerHTML='';
				targetNav.innerHTML='';
				targetNav.innerHTML=`<div class='crud-nav'>
										<table class='crud-table'>
											<tr>
												<td class='create-3' onclick='createFormElements("${targetPage}?create")'>Create</td>
												<td class='update-3' onclick='createFormElements("${targetPage}?update")'>Update</td>
												<td class='delete-3' onclick='createFormElements("${targetPage}?delete")'>Delete</td>
											</tr>
										</table>
									</div>`;
				// targetDiv.innerHTML=createFormElements('create');

				showInformationDiv.innerHTML='';
				if(jsonFile.includes("publications")){
					var data = createPublicationTable(contents);
				}else {
					var data="<h4>Current Status</h4><table class='table'><tr>";
					for (var key in contents[0]) {
						data += "<td>" + makeTableHeading(key) + "</td>";
					}
					var index = 0;
					data += "</tr>";
					for (var i = 0; i < contents.length; i++) {
						data += "<tr onclick='populateInputField(event)'>";
						for (var values in contents[i]) {
							if (contents[i].hasOwnProperty(values)) {
								data += "<td>" + contents[i][values] + "</td>";
							}
						}

						data += "</tr>";
					}
					data +="</table>";
				}
				

				showInformationDiv.innerHTML=data;
			}
		}
	}
	httpRequest.send(null);
}

function makeTableHeading(key){
	var s=key.split('');
	console.log(s);
	var containsTwoWords=false;
	for(var i=0;i<s.length;i++){
		if(s[i].charCodeAt(0)<97){
			containsTwoWords=true;
			break;
		}
	}
	if(containsTwoWords===false){
		return key[0].toUpperCase()+key.substr(1,key.length-1);
	}else if(containsTwoWords===true)
	{
		console.log("Two words");
		var a=s.sort();
		var index=key.indexOf(a[0]);
		return key[0].toUpperCase()+key.substr(1,index-1)+" "+key.substr(index,key.length-1);
	}
}

function createPublicationTable(contents){
	console.log("Hello publications");
	var data = "<input placeholder='Search by title or year' id='searchPublication' type='text' class='form-control' onfocus='searchInputFocus=true;' onblur='searchInputFocus=false'/><table class='table' id='publicationTable'>";
	data += "<tr><th style='text-align: center'>Publications</th></tr>";
	var index=0;
	for(var i=0;i<contents.length;i++){
		    var modifiedAuthors=contents[i].authors.replace("M. A. Alim","<b>M. A. Alim</b>");
			index++;
			data += "<tr onclick='populatePublicationFields(event)'><td>"+index+"&nbsp;)&nbsp;&nbsp;<b>Year:</b><i class='year'>"+contents[i].year+"</i>&nbsp;&nbsp;&nbsp;<span class='authors'>"+modifiedAuthors+" </span>";
			data += ",<a href='"+contents[i].link+"' target='_blank' onclick='return false;'>"+contents[i].title;
			data += "</a>,<b><span class='conference'>"+contents[i].conference+"</span></b>";
			data += "<span class='source'>"+contents[i].source+"</span></td></tr>";

	}
	data += "</table>";
	return data;

}

function populatePublicationFields(event,contents) {
	var targetedElement=event.target.parentNode;
	if(targetedElement.nodeName==="TD"){
		targetedElement=targetedElement.parentNode;
	}else if(targetedElement.nodeName==='SPAN'){
		targetedElement=targetedElement.parentNode.parentNode;
	}
	console.log(targetedElement);
	var elements=[];
	var allInputField=document.getElementsByTagName('input');
	for(var j=0;j<allInputField.length;j++){
		if(allInputField[j].id.includes('_')){
			var elementSelected=allInputField[j];
			elements.push(elementSelected);
		}
	}
	elements[0].value=targetedElement.querySelector(".year").innerHTML;
	elements[1].value=targetedElement.querySelector(".authors").innerHTML.replace("<b>M. A. Alim</b>","M. A. Alim");
	elements[2].value=targetedElement.querySelector("a").innerHTML;
	elements[3].value=targetedElement.querySelector("a").getAttribute("href");
	elements[4].value=targetedElement.querySelector(".conference").innerHTML;
	elements[5].value=targetedElement.querySelector(".source").innerHTML;
	var hiddentInput=document.getElementById('hiddenField');
	hiddentInput.value=targetedElement.querySelector("a").innerHTML;

}





function populateInputField(event){
	var targetedElement=event.target.parentNode;
	console.log(targetedElement);
	var elements=[];
	var allInputField=document.getElementsByTagName('input');
	for(var j=0;j<allInputField.length;j++){
		if(allInputField[j].id.includes('_')){
			var elementSelected=allInputField[j];
			elements.push(elementSelected);
		}
	}
	var hiddentInput=document.getElementById('hiddenField');
	for(var i=0;i<targetedElement.childNodes.length;i++){
		elements[i].value=targetedElement.childNodes[i].innerHTML;
	}
	var s=document.getElementsByTagName("li");
	var selectedElement=false;
	for(var i=0;i<s.length;i++){
		if(s[i].getAttribute("style")==="background-color: white; color: black;"){
			selectedElement=s[i].innerHTML;
		}
	}
	// if(selectedElement==="Awards And Grants"){
	// 	hiddentInput.value=
	// }
	hiddentInput.value=targetedElement.childNodes[0].innerHTML;
}

window.addEventListener('keyup',updatePublicationList,false);

function updatePublicationList() {
	if(searchInputFocus=true){
		var searchKeyword=document.getElementById("searchPublication").value;
		var contents=contentsGlobal;

		var data = "<tr><th style='text-align: center'>Publications</th></tr>";
		var index=0;
		for(var i=0;i<contents.length;i++){
			if(contents[i].title.includes(searchKeyword) || contents[i].year.includes(searchKeyword)) {
				var modifiedAuthors = contents[i].authors.replace("M. A. Alim", "<b>M. A. Alim</b>");
				index++;
				data += "<tr onclick='populatePublicationFields(event)'><td>" + index + "&nbsp;)&nbsp;&nbsp;<b>Year:</b><i class='year'>" + contents[i].year + "</i>&nbsp;&nbsp;&nbsp;<span class='authors'>" + modifiedAuthors + " </span>";
				data += ",<a href='" + contents[i].link + "' target='_blank' onclick='return false;'>\"" + contents[i].title;
				data += "\"</a>,<b><span class='conference'>" + contents[i].conference + "</span></b>";
				data += "<span class='source'>" + contents[i].source + "</span></td></tr>";
			}
		}
		document.getElementById("publicationTable").innerHTML=data;
	}
}