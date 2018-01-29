


$(document).ready(function() { // do this when the document is loaded
	$("#addcontact").show(); // show the element with ID "element"
	$("#dialer").hide(); // hide the element with ID "otherElement"
	$("#contactlist").hide();
});

$("#dialerbutton").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show element
	$("#contactlist").hide();	// hide other element
	$("#addcontact").hide();
});