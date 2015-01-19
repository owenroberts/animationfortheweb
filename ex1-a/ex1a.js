window.onload = function() {
	var svgdoc = null;
	var embed = document.getElementsByTagName('embed');
	for (var h = 0; h < embed.length; h++) {
		console.log(embed[h]);
		var id = embed[h].id;
		try {
			svgdoc = embed[h].getSVGDocument();
			for (var i = 0; i < svgdoc.childNodes.length; i++)
				if (svgdoc.childNodes[i].tagName == "svg")
					svgdoc.childNodes[i].setAttribute("class", id);	
		}
		catch(ex) {
	    	console.log(ex);
	  	}
	}	
}