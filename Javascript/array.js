// array is a collection of homogenius data/datatype.

//but here in Js little change
 var a=['a','b','c','d','e','f'] //array of string 
 var b=[1,2,3,4,5,6] //array of numbers
 var c=[true, true, false, true] //array of boolean

 //JS array 

 var d=[1,3,4,'ab',"c",'d',true, false]

 //array operations

 var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
 city.length
 6
typeof(city)
'object'
city[0]
'Delhi'
city[5]
'Patiala'
city[city.length-1]
'Patiala'
city[city.length-2]
'Bathinda'
city[city.length-5]
'Mumbai'

city.push("Ludhiana")
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Amritsar', 'Bathinda', 'Patiala', 'Ludhiana']

city.pop()
'Ludhiana'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Amritsar', 'Bathinda', 'Patiala']

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.unshift("Nagpur")
7
city
(7) ['Nagpur', 'Delhi', 'Mumbai', 'Pune', 'Amritsar', 'Bathinda', 'Patiala']0: "Nagpur"1: "Delhi"2: "Mumbai"3: "Pune"4: "Amritsar"5: "Bathinda"6: "Patiala"length: 7[[Prototype]]: Array(0)
city.shift()
'Nagpur'

//push - add the value at end of Array
//unshift -add the value at start of array
//pop - remove the value from end of array
//shift - remove the value from start of array

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.slice(1)
(5) ['Mumbai', 'Pune', 'Amritsar', 'Bathinda', 'Patiala']
var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.slice(4)
(2) ['Bathinda', 'Patiala']0: "Bathinda"1: "Patiala"length: 2[[Prototype]]: Array(0)
city.slice(3)
(3) ['Amritsar', 'Bathinda', 'Patiala']

city.slice(2,5)

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.push("Nagpur")
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Amritsar', 'Bathinda', 'Patiala', 'Nagpur']
city.slice(2,5)
(3) ['Pune', 'Amritsar', 'Bathinda']

city.splice('start','deletecount',array)

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.splice(3,0,"Shimla","Manali")
city.splice(3,0,"Shimla")
[]length: 0[[Prototype]]: Array(0)
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Shimla', 'Amritsar', 'Bathinda', 'Patiala']
city.splice(6,0,"Manali","Kullu")
[]
city
(9) ['Delhi', 'Mumbai', 'Pune', 'Shimla', 'Amritsar', 'Bathinda', 'Manali', 'Kullu', 'Patiala']

city.splice(4,1)
['Amritsar']0: "Amritsar"length: 1[[Prototype]]: Array(0)
city
(8) ['Delhi', 'Mumbai', 'Pune', 'Shimla', 'Bathinda', 'Manali', 'Kullu', 'Patiala']
city.splice(2,1,"Surat")
['Pune']
city
(8) ['Delhi', 'Mumbai', 'Surat', 'Shimla', 'Bathinda', 'Manali', 'Kullu', 'Patiala']

var a=[1,2,3,4,5,'a']
var b=[1,5,3,5]
a+b
'1,2,3,4,5,a1,5,3,5'
a.concat(b)
(10) [1, 2, 3, 4, 5, 'a', 1, 5, 3, 5]

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.sort()
(6) ['Amritsar', 'Bathinda', 'Delhi', 'Mumbai', 'Patiala', 'Pune']

var a=[10]
var b=10
typeof(b)
'number'
typeof(a)
'object'
Array.isArray(b)
false
Array.isArray(a)
true