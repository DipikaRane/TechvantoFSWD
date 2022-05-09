var url="https://lovehandicrafts.herokuapp.com/hcproducts";


function getProduct(){
    fetch(url,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>{
        for(i=0; i<data.length; i++){
            console.log(data[i]);
            var element=document.createElement('p')  //<p></p> is created.
            var TextNode=document.createTextNode(data[i].product_name)
            element.appendChild(TextNode)  //<p></p>
            document.getElementById('output').appendChild(element)
        }
    })
}







// function getLocation(){
//     fetch(url,{method:"GET"})
//     .then((res)=>res.json())
//     .then((data)=>{
//         for(i=0; i<data.length; i++){
//             // console.log(data[i])
//             document.getElementById('output').innerText=data[i].product_name;
//         }
//     })
// }





