
$("#btn").click(function() {
	var total = 0;

	if($("#large").is(":checked")) {
		total = total + 13.99;
	$("#items").append("large - 13.99 <br>");
	}

	if($("#medium").is(":checked")) {
		total = total + 11.99;
	$("#items").append("medium - 11.99 <br>");
	}
	if($("#small").is(":checked")) {
		total = total + 9.99;
	$("#items").append("small - 9.99 <br>");
	}