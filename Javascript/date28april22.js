//Comparison
// there are 3 comparison operators

=  //assignment
== //Comparison operator comapre only data
=== // compare data and datatype

var k=100
var l="100"
undefined
k==l
true
k===l
false
var k="jhon"
undefined
var l="John"
undefined
k==l
false
k===l
false

console.log()
alert() //notification
prompt() //taking input
confirm() //yes or no

var first=prompt("enter first value")
var second=prompt("enter second value")
first+second
'1223'

var first=prompt("enter first value")
var second=prompt("enter second value")
parseFloat(first)+parseFloat(second)
46.11

function add(a,b){
    return a+b
} //es5

var add=function(a,b){
    return a+b
} //elaborated es5

var add=()=>{
    return a+b
} ///es6