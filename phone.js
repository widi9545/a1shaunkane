


$(document).ready(function() { // do this when the document is loaded
	$("#addcontact").show(); // show the element with ID "element"
	$("#dialer").hide(); // hide the element with ID "otherElement"
	$("#contactlist").hide();
});

$("#button_id").click(function() { // when "button_id" is clicked
	$("#element").show(); // show element
	$("#other_element").hide();	// hide other element
});