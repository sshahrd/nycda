console.log("test1"); 

$("#btn").click(function() {
var total = 0;
$("#items").html("");
console.log("test2"); 

if($("#wholeWheat").is(":checked")) {
	total = total + 3.99;
	$("#items").append("Whole Wheat bread - $3.99 <br>");
}

if($("#whiteBread").is(":checked")) {
	total = total + 3.59;
	$("#items").append("Whole Wheat bread - $3.99 <br>");
}

if($("#potatoBread").is(":checked")) {
	total = total + 2.99;
	$("#items").append("Potato bread - $2.99 <br>");
}

total = total + 2.99;
total = total.totalFixed(2);


$("#totalCost").html("The Total Cost is $" + total);

})