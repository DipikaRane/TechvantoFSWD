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