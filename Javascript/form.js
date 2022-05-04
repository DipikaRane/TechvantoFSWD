// Math.floor(Math.random()*1000)

function empId(){
    var eid=`TVA${Math.floor(Math.random()*1000)}`;
    document.getElementById('eid').value=eid;
}