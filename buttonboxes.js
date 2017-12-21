
var btn = document.getElementById('btn');
btn.onclick = function() {
	var salary = document.getElementById('salary').value;
	var federal = document.getElementById('federal').value;
    var  state =  document.getElementById('state').value;
    console.log(state);
   var afterTax = parseInt(salary) - ((parseInt(salary) * (parseInt(federal) + parseInt(state))/100));
   console.log(afterTax);
   document.getElementById('afterTax').value = afterTax;
    document.getElementById('takeHome').style.backgroundColor="yellow";
 document.getElementById('takeHome').innerHTML = afterTax;

}
