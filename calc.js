var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var Resultfield = document.getElementById('Resultfield');
var form = document.getElementById('XiswhatPercentofy');

form.addEventListener('submit',function(freeze) {
    
    if(!numfield1.value || !numfield2.value){
        alert("please enter values in the fields");
    }
    else{
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);
         
        var result = x / y;
        var percent = result * 100; 
        
        
        Resultfield.innerText = "result: " + percent + "%";
        freeze.preventDefault();
        
    }
});