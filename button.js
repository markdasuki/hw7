

var xmlhttp = new XMLHttpRequest();
var url = "locations.txt";
var arr;
var mapcell;

var image = "";
var cell = "";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        arr = JSON.parse(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function closeDiv(td, img) {
	var parent = document.getElementById(td);
	var child = document.getElementById(img);
	parent.removeChild(child);
	image = "";
}


function initialize(index) {
	
		var coordinates = new google.maps.LatLng(parseFloat(arr[index].lat), parseFloat(arr[index].long));
		var div = document.createElement("div");
        var mapOptions = {
          center: coordinates,
          zoom: 15
        };
        
        var map = new google.maps.Map(div, mapOptions);
        div.style.position = "absolute";
        div.style.width = "500px";
        div.style.height = "500px";
        div.style.top = "28%";
        div.style.left = "38%";
        setTimeout(function(){
        	var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);},1);
       
        
        
        var marker = new google.maps.Marker({
    	position: mapOptions.center,
        map: map
  		});
        
        return div;
        
    	}
      

function findChipotle(){
	var element = document.getElementById("ChipotleLocation");
	
	if(mapcell == "" || mapcell != "mapChipotle"){
		var div = initialize(0);
		
		div.setAttribute("id", "mapChipotle");
		element.appendChild(div);
		mapcell = "mapChipotle";
		
		setTimeout(function(){
		var olddiv = document.getElementById("mapChipotle");
		element.removeChild(olddiv);
		mapcell = "";
		},15000);
	}
	else{
		var olddiv = document.getElementById("mapChipotle");
		element.removeChild(olddiv);
		mapcell = "";
		
	}
	
}

function findFiveGuys(){
	var element = document.getElementById("FiveGuysLocation");
	
	if(mapcell == "" || mapcell != "mapFiveGuys"){
		var div = initialize(1);
		
		div.setAttribute("id", "mapFiveGuys");
		element.appendChild(div);
		mapcell = "mapFiveGuys";
		
		setTimeout(function(){
		var olddiv = document.getElementById("mapFiveGuys");
		element.removeChild(olddiv);
		mapcell = "";
		},15000);
	}
	else{
		var olddiv = document.getElementById("mapFiveGuys");
		element.removeChild(olddiv);
		mapcell = "";
		
	}
	
}

function findKowloon(){
	var element = document.getElementById("KowloonLocation");
	
	if(mapcell == "" || mapcell != "mapKowloon"){
		var div = initialize(2);
		
		div.setAttribute("id", "mapKowloon");
		element.appendChild(div);
		mapcell = "mapKowloon";
		
		setTimeout(function(){
		var olddiv = document.getElementById("mapKowloon");
		element.removeChild(olddiv);
		mapcell = "";
		},15000);
	}
	else{
		var olddiv = document.getElementById("mapKowloon");
		element.removeChild(olddiv);
		mapcell = "";
		
	}
	
}

function findBunMi(){
	var element = document.getElementById("BunMiLocation");
	
	if(mapcell == "" || mapcell != "mapBunMi"){
		var div = initialize(3);
		
		div.setAttribute("id", "mapBunMi");
		element.appendChild(div);
		mapcell = "mapBunMi";
		
		setTimeout(function(){
		var olddiv = document.getElementById("mapBunMi");
		element.removeChild(olddiv);
		mapcell = "";
		},15000);
	}
	else{
		var olddiv = document.getElementById("mapBunMi");
		element.removeChild(olddiv);
		mapcell = "";
		
	}
	
}

function findPagoda(){
	var element = document.getElementById("PagodaLocation");
	
	if(mapcell == "" || mapcell != "mapPagoda"){
		var div = initialize(4);
		
		div.setAttribute("id", "mapPagoda");
		element.appendChild(div);
		mapcell = "mapPagoda";
		
		setTimeout(function(){
		var olddiv = document.getElementById("mapPagoda");
		element.removeChild(olddiv);
		mapcell = "";
		},15000);
	}
	else{
		var olddiv = document.getElementById("mapPagoda");
		element.removeChild(olddiv);
		mapcell = "";
		
	}
	
}
	

function displayImage (pic, hint) {
	
		var picture = pic.toLowerCase();
		if ((image == "") || (image != (picture + "image"))) {
			if ((image != "") && (image != (picture + "image"))) {
				closeDiv(cell, image);
			}
			var div = document.createElement("div");
			div.setAttribute("id", picture + "image");
			div.setAttribute("class", "divPic");
			div.setAttribute("title", hint);
			div.setAttribute("onClick", "closeDiv(cell, image)");

			var img = document.createElement("img");
			img.setAttribute("id", picture);
			img.setAttribute("class", "pic");
			img.setAttribute("src", pic + ".jpg");
			img.setAttribute("alt", picture + "image");
			img.setAttribute("onClick", "closeDiv(cell, image)");
			
			div.appendChild(img);
			document.getElementById(pic).appendChild(div);
			
			image = picture + "image";
			cell = pic;
		} 
		else {
			closeDiv(pic, picture + "image");
		}
	 

}


function storeButtonID (pic, hint) {
	displayImage(pic.id, hint.id);
}



