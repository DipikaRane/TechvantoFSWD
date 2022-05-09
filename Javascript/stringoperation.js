var name="KaNIka"
name.toLowerCase()
'kanika'
var name="KaNIka"
name.toUpperCase()
'KANIKA'

var city="Amsterdam"
city.length
9

city[0]
'A'
city[1]
'm'
var city="Amsterdam"
city[city.length-1]
'm'
var city="AmsterdaM"
city[city.length-1]
'M'

var city="    Paris  "
city.length
11
city.trim()
'Paris'

city.trim().length

var city="    Bathinda  . "
city.trim().length
Bathinda  .

//JS is case sensitive
var name="Aditi"
var name1="Rahul"

name==name1
false
var name="Aditi"
var name1="aditi"

name==name1
false
name.toLowerCase()==name1.toLowerCase()
true

var city="amSTerDam"
city.charAt(0)

city.slice(1)
'mSTerDam'
city.slice(1,4)
'mST'

var city="amSTerDam"
city.charAt(0).toUpperCase()
'A'

city.slice(1)
'mSTerDam'

city.slice(1).toLowerCase()
'msterdam'

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

var a="I am learning Javasript"
a.replace(/Javasript/,'JS')
'I am learning JS'

var a="Javascript I am learning Javascript"
a.replace(/Javascript/,'JS')
'JS I am learning Javascript' /// replace only first occurance

var a="Javascript I am learning Javascript"
a.replace(/Javascript/g,'JS') //g is global

var city="   Gujrat . "
city.replace(/ /g,'')

var url="https://github.com/DipikaRane/TechvantoFSWD"
url.split('/')
(5) ['https:', '', 'github.com', 'DipikaRane', 'TechvantoFSWD']0: "https:"1: ""2: "github.com"3: "DipikaRane"4: "TechvantoFSWD"length: 5[[Prototype]]: Array(0)
var url="https://github.com/DipikaRane/TechvantoFSWD"
url.split('.')
(2) ['https://github', 'com/DipikaRane/TechvantoFSWD']

var out=url.split('/')
out
out[3]
'DipikaRane'
out[4]
'TechvantoFSWD'
out[0]
'https:'
out[1]
''
out[2]
'github.com'

var url="https://github.com/DipikaRane/TechvantoFSWD"
var out=url.split('/')
out[out.length - 2]

a.split('')
a.split('')[0]

var name="Javascript"
name.split('')

var name="Javascript"
var out=name.split('')

var n=7652735
n.toString()
'7652735'
n.toString().slice(0,-1)
'765273'
n.toString().slice(0,-3)
'7652'

