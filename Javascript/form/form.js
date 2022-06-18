// Math.floor(Math.random()*1000)

function empId(){
    var eid=`TVA${Math.floor(Math.random()*1000)}`;
    document.getElementById('eid').value=eid;
}

function validatefname(){
    var fname=document.getElementById('firstname').value;
    if(fname.trim().length==0){
        document.getElementById('fout').innerHTML="Please Enter Name"
    }else{
        document.getElementById('fout').innerHTML=""
        fname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase();
        document.getElementById('firstname').value=fname
    }
}

function validatePwd(){
    var pwd=document.getElementById('pwd').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Minimum length of password is 8";
            document.getElementById('ppout').style.display="block";
            documnet.getElementById('ppout').style.backgroundColor="red";
        }else{
            if(pwd.length<11){
                document.getElementById('pout').innerText="Weak password";
                document.getElementById('ppout').style.backgroundColor="orange";
            }
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green";
        document.getElementById('pout').innerText="Strong Password";
    }
}

function validateCPwd(){
    var cpwd=document.getElementById('cpwd').value;
    var pwd=document.getElementById('pwd').value;
    if(pwd==cpwd){
        document.getElementById('cpout').innerText="Password matches";
    }else{
        document.getElementById('cpout').innerText="Password does not matches";
    }
}

var showPassword=()=>{
    var pwd=document.getElementById('pwd')
    if(pwd.type=="password"){
        pwd.type="text"
    }else{
        pwd.type="password"
    }
}

var changeText=()=>{
    var exp =  document.getElementById('exp').value;
    document.getElementsByClassName('experience')[0].innerText=`Total Year of experience is ${exp}`
}