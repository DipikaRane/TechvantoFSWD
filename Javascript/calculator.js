function Add(){
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var out=Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText=`Sum of numbers is ${out}`
}
var Sub=()=>{
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var out=Number(a)-Number(b);
    document.getElementsByClassName('output')[0].innerText=`Subtraction of numbers is ${out}`
}
function clearAll()
{
    var c="Output";
    document.getElementById('first').value="";
    document.getElementById('second').value="";
    document.getElementsByClassName('output')[0].innerText=`${c}`
}
var Showdiv=()=>{
var mydiv=document.getElementById('coupon');
mydiv.style.display="block";
}//arrow function

var Hidediv=()=>{
    var mydiv=document.getElementById('coupon');
    mydiv.style.display="none";
    }