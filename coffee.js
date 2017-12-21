

var btn = document.getElementById('btn');
btn.onclick = function() {
	var cups = document.getElementById('cups').value;
	var retire = document.getElementById('retire').value;
	var age = document.getElementById('age').value;
	console.log(cups);
	console.log(retire);
	console.log(age);
	var Totalcups = parseInt(age) + parseInt(cups);

	document.getElementById('total').innerHTML = Totalcups;

}
    
