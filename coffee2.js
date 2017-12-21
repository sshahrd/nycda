

var btn = document.getElementById('btn');
btn.onclick = function() {
	var cups = document.getElementById('cups').value;
	var retire = document.getElementById('retire').value;
	var age = document.getElementById('age').value;
	
	var Totalcups = (parseInt(retire) - parseInt(age)) * parseInt(cups) * 365;

	document.getElementById('total').innerHTML = Totalcups;

}