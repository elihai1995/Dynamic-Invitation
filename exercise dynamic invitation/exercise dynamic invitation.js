function dynamicInvitation () {
	hostInput = document.getElementById("hostname").value;
	guestInput = document.getElementById("guestname").value;
	placeInput = document.getElementById("placeIP").value;
	timeInput = document.getElementById("timeIP").value;
	if (hostInput != "" && guestInput != "" && placeInput != "" && timeInput != "") {
		document.getElementById("guest").innerHTML = "Dear " + guestInput + ",";
		document.getElementById("place&time").innerHTML = "You are invited to a meeting in " + placeInput + " at " + timeInput + ".";
		document.getElementById("host").innerHTML = "See you there, " + hostInput + ".";
		document.getElementById("empty place").innerHTML = "";
		document.getElementById("empty time").innerHTML = "";
		document.getElementById("place&time").style.textAlign = "left";
		document.getElementById("host").style.textAlign = "left";
		document.getElementById("place").style.display = "none"; 
		document.getElementById("time").style.display = "none";
		document.getElementById("invite").innerHTML = "";
		document.getElementById("guest").onmouseover = function() {mouseOverGuest()};
		document.getElementById("guest").onmouseout = function() {mouseOutGuest()};
		document.getElementById("place&time").onmouseover = function() {mouseOverPlaceTime()};
		document.getElementById("place&time").onmouseout = function() {mouseOutPlaceTime()};
		document.getElementById("host").onmouseover = function() {mouseOverHost()};
		document.getElementById("host").onmouseout = function() {mouseOutHost()};
	}
	else {
		if (hostInput == "") {
		document.getElementById("empty hostname").style.color = "red";
		document.getElementById("empty hostname").innerHTML = "Please enter an hostname";
		}
		else
			document.getElementById("empty hostname").innerHTML = "";
		if (guestInput == "") {
			document.getElementById("empty guestname").style.color = "red";
			document.getElementById("empty guestname").innerHTML = "Please enter a guestname";
		}
		else
			document.getElementById("empty guestname").innerHTML = "";
		if (placeInput == "") {
			document.getElementById("empty place").style.color = "red";
			document.getElementById("empty place").innerHTML = "Please enter a place";
		}
		else
			document.getElementById("empty place").innerHTML = "";
		if (timeInput == "") {
			document.getElementById("empty time").style.color = "red";
			document.getElementById("empty time").innerHTML = "Please enter a time";
		}
		else
			document.getElementById("empty time").innerHTML = "";
	}
}

function mouseOverGuest () {
	document.getElementById("guest").innerHTML = "This line includs the guestname.";
	document.getElementById("guest").style.color = "red";
}

function mouseOverPlaceTime () {
	document.getElementById("place&time").innerHTML = "This line includs the place meeting and the time meeting.";
	document.getElementById("place&time").style.color = "red";	
}

function mouseOverHost () {	
	document.getElementById("host").innerHTML = "This line includs the hostname.";
	document.getElementById("host").style.color = "red";	
}

function mouseOutGuest() {
	document.getElementById("guest").innerHTML = "Dear " + guestInput + ",";
	document.getElementById("guest").style.color = "black";
}

function mouseOutPlaceTime() {
	document.getElementById("place&time").innerHTML = "You are invited to a meeting in " + placeInput + " at " + timeInput + ".";
	document.getElementById("place&time").style.color = "black";
}

function mouseOutHost() {
	document.getElementById("host").innerHTML = "See you there, " + hostInput + ".";
	document.getElementById("host").style.color = "black";
}