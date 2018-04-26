$( document ).ready(function() {
	fillTagsWithEnglish();
});
		
function fillTagsWithEnglish() {
	//createFlags(data_lang);
	updateTags(data_en);
}

function fillTagsWithSpanish() {
	updateTags(data_es);
}
		
function fillTagsWithItalian() {
	updateTags(data_it);
}
		
function fillTagsWithFrench() {
	updateTags(data_fr);
}		
		
function createFlags(data) {
	$("#langCollection").empty();
	var langLen = data.langCollection.length;
	for(x=0; x<langLen; x++) {
		$("#langCollection").append(
			"<img src='" + data.langCollection[x].src + 
			"' alt='" + data.langCollection[x].language  + 
			"' title='" + data.langCollection[x].language + 
			"' onClick='" + data.langCollection[x].click + "'/> ");
	}			
}
		
function updateTags(data) {
	var keys = Object.keys(data) + ''; 		// es necesario convertir el objeto en texto
	var keysArray = keys.split(','); 
	var keysLen = keysArray.length; 
			
	for(i=0; i<keysLen; i++) {
		if(keysArray[i]=="langCollection") {
			createFlags(data)
		}else if(keysArray[i]=="teCollection") {
			$("#teCollection").empty();
			var tsLen = data[keysArray[i]].length; 
			for(z=0; z<tsLen; z++) {
				$("#teCollection").append("<div class='NodeDiv'>" + data.teCollection[z].name + "</div>");
			}			
		}else if(keysArray[i]=="tsCollection") {
			$("#tsCollection").empty();
			var tsLen = data[keysArray[i]].length; 
			for(j=0; j<tsLen; j++) {
				$("#tsCollection").append("<li>" + data.tsCollection[j] + "</li>");
			}
		}else if(keysArray[i]=="peCollection") {
			$("#peCollection").empty();
			$("#peCollection").append(
				"<tr><th>" + data.peTitleCompany + "</th>" + 
				"<th>" + data.peTitlePosition + "</th>" + 
				"<th colspan=2>" + data.peTitleDuration + "</th></tr>"
			);
				
			var tsLen = data[keysArray[i]].length; 
			for(k=0; k<tsLen; k++) {
				$("#peCollection").append(
					"<tr><td>" + data.peCollection[k].company + 
					"</td><td>" + data.peCollection[k].position + 
					"</td><td>" + data.peCollection[k].years + 
					"</td><td>" + data.peCollection[k].date + "</td></tr>"
				);
			}										
					
		}else if(keysArray[i]=="ccCollection") {
			$("#ccCollection").empty();
			$("#ccCollection").append(
				"<tr><th>" + data.ccTitleName + "</th>" + 
				"<th>" + data.ccTitleCompany + "</th>" + 
				"<th>" + data.ccTitlePlace + "</th>" + 
				"<th>" + data.ccTitleDate + "</th></tr>"
			);
						
			var tsLen = data[keysArray[i]].length; 
			for(l=0; l<tsLen; l++) {
				$("#ccCollection").append(
					"<tr><td>" + data.ccCollection[l].name + 
					"</td><td>" + data.ccCollection[l].company + 
					"</td><td>" + data.ccCollection[l].place + 
					"</td><td>" + data.ccCollection[l].date + "</td></tr>"
				);
			}	

		}else if(keysArray[i]=="achCollection") {
			$("#achCollection").empty();
						
			var achLen = data[keysArray[i]].length; 
			for(n=0; n<achLen; n++) {
				$("#achCollection").append(
					"<li>" + data.achCollection[n] + "</li>"
				);
			}			
		}else{
			$("#" + keysArray[i]).text(data[keysArray[i]] ) ;
		}
	}
}

function displayJobDetail() {
	$("tr[rowParent=job_1]").toggle();
}


function displayJobDetail2() {
	$("#job2").toggle();
}