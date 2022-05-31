//if else -- conditional statements

if(condition){

}else{

}

if(condition){
    
}else if(condition){

}else {

}

//simple if-else
var a=21
if (a%2==0){
    console.log(`${a} is even`)
}else {
    console.log(`${a} is odd`)
}
21 is odd

var a=20
if (a%2==0){
    console.log(`${a} is even`)
}else {
    console.log(`${a} is odd`)
}

20 is even

//nested if-else for comparison
var name="John"
if(name=="Ankit"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="John"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

Hi John you are user

var name="Ankit"
if(name=="Ankit"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="John"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
3 Hi Ankit you are admin

var name="rahul"
if(name=="Ankit"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="John"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
 Hi rahul you are unknown

//ternery operator
//single line if-else operator

ccondition? if condition is true : if condition is false 

var j=10
j>10 ? "HII" : "Bye"


var city="Delhi"

//here any condition match

if(city=="Delhi" || city=="Mumbai"){
    console.log(`You have to pay 400Rs.`)
}else if(city=="Noida" || city=="Pune"){
    console.log(`You have to pay 500Rs.`)
}else {
    console.log(`You have to pay 100Rs.`)
}

var city="Delhi"
var age=40
//here both condition match
if(city=="Delhi" && age<40){
    console.log(`You have to pay 100Rs.`)
}else {
    console.log(`You have to pay 600Rs.`)
}

You have to pay 600Rs.

var city="Delhi"
var age=39
//here both condition match
if(city=="Delhi" && age<40){
    console.log(`You have to pay 100Rs.`)
}else {
    console.log(`You have to pay 600Rs.`)
}
 You have to pay 100Rs.

 //if inside if

 var city="Mumbai"
 var age=26
 if(city=="Delhi"){
     if(age<40){
         console.log(`You have to pay Rs. 300/-`)
     }else if(age<60){
         console.log(`You have to pay Rs.90/-`)
     }else if(city=="Mumbai"){
         if(age<40){
             console.log(`You have to pay nothing`)
         }else if(age<60){
             console.log(`You have to pay Rs. 1000Rs`)
         }else{
             console.log(`You have to pay Rs. 15% tax`)
         }
     }else{
         console.log(`You have to pay Rs. 10% tax`)
     }
 }else{
    console.log(`You have to pay Rs. 20% tax`)
 }