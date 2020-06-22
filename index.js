
function DisplayValue(val){
    var res=document.getElementById('res');
    res.value +=val;
    
}
function Clear(){
    var display=document.getElementById('res');
    display.value ="";
    var enterRes=document.getElementById('enterRes').value="";
}

function Equally(){
    var x=document.getElementById('res').value;
    var y= eval(x);
    var enterRes=document.getElementById('enterRes').value=y;
    
    
    
    
    
}

function Sqrt(val){
    var x=document.getElementById('res').value;
    var y =eval(Math.sqrt(x)) ;
    var enterRes=document.getElementById('enterRes').value=y;
}

function theSquareOftheNumber(){
    var x=document.getElementById('res').value;
    var y= eval(x*x);
    var enterRes=document.getElementById('enterRes').value=y;

}









