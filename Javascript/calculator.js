function calc(opt){
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var output=document.getElementsByClassName('output')[0];
    var out;
    if(a.trim().length>0 || b.trim().length>0){
        a=a.replace(/ /g,'');
        b=b.replace(/ /g,'');
        if(isNaN(a) || isNaN(b))
        {
            out=`Please Enter valid value`
        }else{
            if(opt=="Add"){
                out=Number(a)+Number(b);
                out=`Sum of numbers is ${out}`
            }else{
                out=Number(a)-Number(b);
                out=`Subtraction of numbers is ${out}`
            }
        }
        
    }else{
        out=`Please Enter value`;
    }
    output.innerText=out;
}

function backspace(){
    var a=document.getElementById('first').value;
    a=a.replace(/ /g,'')
    a=a.slice(0,-1);
    document.getElementById('first').value=a;
}



// function Add(){
//     var a=document.getElementById('first').value;
//     var b=document.getElementById('second').value;
//     var out=Number(a)+Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Sum of numbers is ${out}`
// }
// var Sub=()=>{
//     var a=document.getElementById('first').value;
//     var b=document.getElementById('second').value;
//     var out=Number(a)-Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Subtraction of numbers is ${out}`
// }
// function clearAll()
// {
//     var c="Output";
//     document.getElementById('first').value="";
//     document.getElementById('second').value="";
//     document.getElementsByClassName('output')[0].innerText=`${c}`
// }
// var Showdiv=()=>{
// var mydiv=document.getElementById('coupon');
// mydiv.style.display="block";
// }//arrow function

// var Hidediv=()=>{
//     var mydiv=document.getElementById('coupon');
//     mydiv.style.display="none";
//     }
   
    

