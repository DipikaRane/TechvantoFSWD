//to print the series
//to iterate over data

for(i=0;i<5;i++){
    console.log(i)
}

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
for(i=0;i<city.length;i++){
    console.log(city[i]);
}
Delhi
Mumbai
Pune
Amritsar
Bathinda
Patiala

var movie=[
    {
        name:'Bhuj',
        rating:4.3,
        Type:'HistoryDrama'
    },
    {
        name:'Runway 34',
        rating:4.1,
        Type:'Action'
    }
]

for(i=0;i<movie.length;i++){
    console.log(movie[i].name)
}
Bhuj
Runway 34


var movie=[
    {
        name:'Bhuj',
        rating:4.3,
        Type:'HistoryDrama'
    },
    {
        name:'Runway 34',
        rating:4.1,
        Type:'Action'
    },
    {
        name:'Runway 34',
        rating:4.1,
        Type:'Action'
    }
]

for(i=0;i<movie.length;i++){
    console.log(movie[i].rating)
}
15 4.3
15 4.1

var city=["Delhi", "Mumbai", "Pune", "Amritsar", "Bathinda", "Patiala"]
city.map((data)=>{console.log(data)})

Delhi
Mumbai
Pune
Amritsar
Bathinda
Patiala

var a=[1,2,3,4,5]
a.map((data)=>{return data*2})
(5)[2, 4, 6, 8, 10]

var a=[5,6,7,8,9,10,3,2]
a.filter((data)=>{return data>5})
(5)[6, 7, 8, 9, 10]