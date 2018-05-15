$( document ).ready(function() {
	//loadLanguageScripts();
	fillTagsWithEnglish();
	//fillTagsWithSpanish();
	//fillTagsWithItalian();
	//fillTagsWithFrench();
});

/*
	$(function(){
		$("#include_html").load("main.html");
	});
	
/*	
function loadLanguageScripts() {
	alert("loadLanguageScripts...");
	$.getScript("data_fr.js", function() {
		alert("Script data_fr.js loaded but not necessarily executed.");
	});
}*/

function fillTagsWithEnglish() {
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
			$("#peDiv").empty();
			$("#peCollection").append(
				"<tr><th>" + data.peTitles.company + "</th>" + 
				"<th>" + data.peTitles.position + "</th>" + 
				"<th colspan=2>" + data.peTitles.duration + "</th>" + 
				"<th" +
						/* -- ONLY FOR PDF --*/
						" style='display:none;'" +
						/* -- - - - -- - - - -- */				
				">" + data.peTitles.details + "</th></tr>"
			);
				
			var tsLen2 = data[keysArray[i]].length; 
			for(k2=0; k2<tsLen2; k2++) {
				$("#peCollection").append(
					"<tr><td>" + data.peCollection[k2].company + 
					"</td><td>" + data.peCollection[k2].position + 
					"</td><td>" + data.peCollection[k2].years + 
					"</td><td>" + data.peCollection[k2].date + 
					"</td><td" +
						/* -- ONLY FOR PDF --*/
						" style='display:none;'" +
						/* -- - - - -- - - - -- */					
					"><img id='img_" + data.peCollection[k2].id + 
						"' src='close_up.jpg' alt='more...' onclick='displayJobDetail3(" + 
						data.peCollection[k2].id + ")'/></td></tr>"
				);
				
				/* width:80%; */
				var pePosLen = data.peCollection[k2].positions.length;
				for(k22=0; k22<pePosLen; k22++) {
					$("#peDiv").append(
						"<table jobId='job_" + data.peCollection[k2].id + "' class='TableStyle'" + 
						/* -- REMOVE FOR PDF -- * /
						" style='display:none' >" +
						/* -- - - - -- - - - -- */	
						+ ">" + 
						"<tr><th width='16%'>" + data.peTitles.positions.company + "</th>" +
						"<td>" + data.peCollection[k2].company + " - "
							+ data.peCollection[k2].positions[k22].businessUnit + "</td>" + 
						"<tr><th>" + data.peTitles.positions.position + "</th>" +
						"<td>" + data.peCollection[k2].positions[k22].position + "</td>" + 
						"<tr><th>" + data.peTitles.positions.duration + "</th>" +
						"<td>" + data.peCollection[k2].positions[k22].duration + "</td>" + 						
						"<tr><th>" + data.peTitles.positions.project + "</th>" +
						"<td>" + data.peCollection[k2].positions[k22].project + "</td>" + 	
						"<tr><th>" + data.peTitles.positions.description + "</th>" +
						"<td>" + data.peCollection[k2].positions[k22].description +
							"<ul id='ulResp_" + data.peCollection[k2].id + "_" +
						data.peCollection[k2].positions[k22].id + "'></ul></td>" + 
						"<tr><th>" + data.peTitles.positions.tools + "</th>" + 
						"<td><div id='divTools_" + data.peCollection[k2].id + "_" +
						data.peCollection[k2].positions[k22].id + "' class='RootDiv' style='text-align:left'></div></td>" + 						
						"</tr></table>" + 
						"<div divId='job_" + data.peCollection[k2].id + "' style='display:none'></div></br>");
						
					var peResLen = data.peCollection[k2].positions[k22].responsibilities.length;
					for(k222=0; k222<peResLen; k222++) {
						$("#ulResp_" + data.peCollection[k2].id + "_" + 
							data.peCollection[k2].positions[k22].id).append(
								"<li>" + data.peCollection[k2].positions[k22].responsibilities[k222] + "</li>"
					)};		

					var peToolsLen = data.peCollection[k2].positions[k22].usedTools.length;

					for(k223=0; k223<peToolsLen; k223++) {
					
						if(k223>0) {
							$("#divTools_" + data.peCollection[k2].id + "_" + 
								data.peCollection[k2].positions[k22].id).append(
									"<a>, " + data.peCollection[k2].positions[k22].usedTools[k223] + "</a>"						
							)
						}else{
							$("#divTools_" + data.peCollection[k2].id + "_" + 
								data.peCollection[k2].positions[k22].id).append(
									"<a>" + data.peCollection[k2].positions[k22].usedTools[k223] + "</a>"						
							)						
						}
					};						
				}
		
			}

		}else if(keysArray[i]=="ccCollection") {
			$("#ccCollection").empty();
			$("#ccCollection").append(
				"<tr><th>" + data.ccTitles.name + "</th>" + 
				"<th>" + data.ccTitles.company + "</th>" + 
				"<th>" + data.ccTitles.place + "</th>" + 
				"<th>" + data.ccTitles.date + "</th></tr>"
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
	$("table[jobId=job_" + jobId + "]").toggle();
	$("div[divId=job_" + jobId + "]").toggle();
	
	if($("#img_" + jobId).attr("src")=="close_up.jpg") {
		$("#img_" + jobId).attr("src","close_out.jpg");
	}else{
		$("#img_" + jobId).attr("src","close_up.jpg");
	};
}

function displayJobDetail() {
	$("tr[rowParent=job_1]").toggle();
}


function displayJobDetail2() {
	$("#job2").toggle();
}