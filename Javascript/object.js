var movieName="Bhuj"
var movieRating=4.3
var movieType="HistoryDrama"

var movieName1="Runway 34"
var movieRating1=4.1
var movieType1="Action"

//object

var movies={} //curly backet is an object

var movie = {
    name:'Bhuj',
    rating:4.3,
    Type:'HistoryDrama'
}

movie.industry="Boolywood"
'Boolywood'
movie
{name: 'Bhuj', rating: 4.3, Type: 'HistoryDrama', industry: 'Boolywood'}Type: "HistoryDrama"industry: "Boolywood"name: "Bhuj"rating: 4.3[[Prototype]]: Object
movie.year=2022
2022
movie
{name: 'Bhuj', rating: 4.3, Type: 'HistoryDrama', industry: 'Boolywood', year: 2022}Type: "HistoryDrama"industry: "Boolywood"name: "Bhuj"rating: 4.3year: 2022[[Prototype]]: Object
delete movie.year
true
movie
{name: 'Bhuj', rating: 4.3, Type: 'HistoryDrama', industry: 'Boolywood'}

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

movie[1].name
'Runway 34'
movie[0].name
'Bhuj'
movie[0].Type
'HistoryDrama'
delete movie[0].Type
true
movie[0].name
'Bhuj'
movie[0]
{name: 'Bhuj', rating: 4.3}