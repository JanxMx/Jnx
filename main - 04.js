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
				$("#teCollection").append("<div class='NodeDiv'>" + data.teCollection[z] + "</div>");
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
			
		}else if(keysArray[i]=="peCollection2") {
			
			//$("#peCollection2").empty();
			//$("#peDiv").empty();
			$("#peCollection2").append(
				"<tr><th>" + data.peTitleCompany + "</th>" + 
				"<th>" + data.peTitlePosition + "</th>" + 
				"<th colspan=2>" + data.peTitleDuration + "</th>" + 
				"<th>" + data.peTitleDetail + "</th></tr>"
			);
				
				
			var tsLen2 = data[keysArray[i]].length; 
			for(k2=0; k2<tsLen2; k2++) {
				$("#peCollection2").append(
					"<tr><td>" + data.peCollection2[k2].company + 
					"</td><td>" + data.peCollection2[k2].position + 
					"</td><td>" + data.peCollection2[k2].years + 
					"</td><td>" + data.peCollection2[k2].date + 
					"</td><td onclick='displayJobDetail3(" + data.peCollection2[k2].id + ")'>" + data.peCollection2[k2].id + "</td></tr>"
				);
				
//				"<table id='job_" + data.peCollection2[k2].id + "_" + data.peCollection2[k2].positions[k22].id + "' class='TableStyle' style='width:80%;'>" +
				
				var pePosLen = data.peCollection2[k2].positions.length;
				for(k22=0; k22<pePosLen; k22++) {
					$("#peDiv").append(
						"<table jobId='job_" + data.peCollection2[k2].id + "' class='TableStyle' style='width:80%;'>" + 
						"<tr><th width='16%'>Compañia</th>" +
						"<td>" + data.peCollection2[k2].company + "</td>" + 
						"<tr><th>Position</th>" +
						"<td>" + data.peCollection2[k2].positions[k22].position + "</td>" + 
						"<tr><th>Project</th>" +
						"<td>" + data.peCollection2[k2].positions[k22].project + "</td>" + 	
						"<tr><th>Usuario</th>" +
						"<td>" + data.peCollection2[k2].positions[k22].businessUnit + "</td>" + 
						"<tr><th>Description</th>" +
						"<td>" + data.peCollection2[k2].positions[k22].description + "</td>" + 
						"<tr><th>Objetivo</th>" +
						"<td>" + data.peCollection2[k2].positions[k22].objective + "</td>" + 						
						"<tr><th>Actividades</th>" +
						"<td><ul id='ulResp_" + data.peCollection2[k2].id + "_" +
						data.peCollection2[k2].positions[k22].id + "'></ul></td>" + 
						"<tr><th>Tecnologías utilizadas</th>" + 
						"<td><div id='divTools_" + data.peCollection2[k2].id + "_" +
						data.peCollection2[k2].positions[k22].id + "' class='RootDiv'></div></td>" + 						
						"</tr></table></brjobId='job_" + data.peCollection2[k2].id + ">");
						
					var peResLen = data.peCollection2[k2].positions[k22].responsibilities.length;
					for(k222=0; k222<peResLen; k222++) {
						$("#ulResp_" + data.peCollection2[k2].id + "_" + 
							data.peCollection2[k2].positions[k22].id).append(
								"<li>" + data.peCollection2[k2].positions[k22].responsibilities[k222] + "</li>"
					)};		

					var peToolsLen = data.peCollection2[k2].positions[k22].usedTools.length;
					for(k223=0; k223<peToolsLen; k223++) {
						$("#divTools_" + data.peCollection2[k2].id + "_" + 
							data.peCollection2[k2].positions[k22].id).append(
								"<div class='NodeDiv'>" + data.peCollection2[k2].positions[k22].usedTools[k223] + "</div>"
					)};						
				}
		
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

function displayJobDetail3(jobId) {
	//$("#job_" + jobId).toggle();
	$("table[jobId=job_" + jobId + "]").toggle();
}

function displayJobDetail() {
	$("tr[rowParent=job_1]").toggle();
}


function displayJobDetail2() {
	$("#job2").toggle();
}