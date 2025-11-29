(function() {


const movies = [
  {
    id: 1,
    title: "Inception",
    originalTitle: "Inception",
    year: 2010,
    durationMin: 148,
    genres: ["sci-fi", "action", "thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    language: "English",
    country: ["USA", "UK"],
    imdbRating: 8.8,
    myRating: null,
    isWatched: true,
    isFavorite: true,
    ageRating: "PG-13",
    boxOfficeUSD: 829895144,
    tags: ["mind-bending"],
    notes: "",
    addedAt: "2024-01-10T20:15:00Z"
  },
  {
    id: 2,
    title: "The Godfather",
    originalTitle: "The Godfather",
    year: 1972,
    durationMin: 175,
    genres: ["crime", "drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino"],
    language: "English",
    country: ["USA"],
    imdbRating: 9.2,
    myRating: null,
    isWatched: true,
    isFavorite: true,
    ageRating: "R",
    boxOfficeUSD: 246120974,
    tags: ["classic"],
    notes: "",
    addedAt: "2023-11-02T18:00:00Z"
  },
  {
    id: 3,
    title: "Interstellar",
    originalTitle: "Interstellar",
    year: 2014,
    durationMin: 169,
    genres: ["sci-fi", "adventure", "drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    language: "English",
    country: ["USA"],
    imdbRating: 8.7,
    myRating: null,
    isWatched: true,
    isFavorite: false,
    ageRating: "PG-13",
    boxOfficeUSD: 701729206,
    tags: ["space"],
    notes: "",
    addedAt: "2025-01-05T11:00:00Z"
  },
  {
    id: 4,
    title: "Spirited Away",
    originalTitle: "Sen to Chihiro no kamikakushi",
    year: 2001,
    durationMin: 125,
    genres: ["animation", "fantasy", "adventure"],
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino"],
    language: "Japanese",
    country: ["Japan"],
    imdbRating: 8.6,
    myRating: null,
    isWatched: false,
    isFavorite: false,
    ageRating: "PG",
    boxOfficeUSD: 395580000,
    tags: ["anime", "studio ghibli"],
    notes: "",
    addedAt: "2025-02-15T10:30:00Z"
  },
  {
    id: 5,
    title: "The Dark Knight",
    originalTitle: "The Dark Knight",
    year: 2008,
    durationMin: 152,
    genres: ["action", "crime", "drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger"],
    language: "English",
    country: ["USA", "UK"],
    imdbRating: 9.0,
    myRating: null,
    isWatched: true,
    isFavorite: true,
    ageRating: "PG-13",
    boxOfficeUSD: 1004558444,
    tags: ["batman"],
    notes: "",
    addedAt: "2024-06-10T12:00:00Z"
  },
  {
    id: 6,
    title: "Pulp Fiction",
    originalTitle: "Pulp Fiction",
    year: 1994,
    durationMin: 154,
    genres: ["crime", "drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    language: "English",
    country: ["USA"],
    imdbRating: 8.9,
    myRating: null,
    isWatched: true,
    isFavorite: false,
    ageRating: "R",
    boxOfficeUSD: 213928762,
    tags: ["tarantino"],
    notes: "",
    addedAt: "2024-08-12T19:20:00Z"
  },
  {
    id: 7,
    title: "The Matrix",
    originalTitle: "The Matrix",
    year: 1999,
    durationMin: 136,
    genres: ["sci-fi", "action"],
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne"],
    language: "English",
    country: ["USA"],
    imdbRating: 8.7,
    myRating: null,
    isWatched: true,
    isFavorite: true,
    ageRating: "R",
    boxOfficeUSD: 467222728,
    tags: ["cyberpunk"],
    notes: "",
    addedAt: "2024-03-01T09:00:00Z"
  },
  {
    id: 8,
    title: "Fight Club",
    originalTitle: "Fight Club",
    year: 1999,
    durationMin: 139,
    genres: ["drama"],
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton"],
    language: "English",
    country: ["USA"],
    imdbRating: 8.8,
    myRating: null,
    isWatched: false,
    isFavorite: false,
    ageRating: "R",
    boxOfficeUSD: 101209702,
    tags: ["psychological"],
    notes: "",
    addedAt: "2025-02-20T21:10:00Z"
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    originalTitle: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    durationMin: 178,
    genres: ["fantasy", "adventure"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    language: "English",
    country: ["New Zealand", "USA"],
    imdbRating: 8.8,
    myRating: null,
    isWatched: true,
    isFavorite: true,
    ageRating: "PG-13",
    boxOfficeUSD: 897690072,
    tags: ["lotr"],
    notes: "",
    addedAt: "2024-02-25T14:30:00Z"
  },
  {
    id: 10,
    title: "Parasite",
    originalTitle: "Gisaengchung",
    year: 2019,
    durationMin: 132,
    genres: ["thriller", "drama"],
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun"],
    language: "Korean",
    country: ["South Korea"],
    imdbRating: 8.5,
    myRating: null,
    isWatched: true,
    isFavorite: false,
    ageRating: "R",
    boxOfficeUSD: 263000000,
    tags: ["oscar"],
    notes: "",
    addedAt: "2024-10-17T16:45:00Z"
  }
];


/*const sum = function (a, b, fn){
    fn()
    return a + b
}
console.log(sum(a:12, b:23, fn: function():void{
    console.log("Labas")
}))


const sum = (a,b) => a+ b; 
const syHello */




/*const showMovies = () => {
    const movies = "Labai geri filmai"
    const movieTitle = "Matrix"
    console.log(MovieTitle)
    console.log(movies);
};*/

/*for(let i=0; i<100; i++){
    for(let i=0; j<100; j++){

    }
}

console.log(movieTitle)

showMovies()*/

/*const studnts= ["Ieva" , "Karolis", "Karolina","Aurimas"];
const studentsResults = [9.2, 7.5, 5.8]
//foreach
students.forEach(student=> console.log(student))

//map 
const incareaseResults = studentsRezults.map(grade =>grade * 1.10);
console.log("studentu rezultatai: "+studentsResults)
console.log("Padidinti studentu rezultatai:"+incareaseResults)

//filter 
const topStudents= studentsResults.filter(grade=>grade > 7);
console.log(topStudents)

//sort 
console.log("Before sort: "+students)
console.log("after sort"+students.sort())

//min
console.log(Math.min(...studentsResults))

//max
console.log(Math.max(...studentsResults))

 //Reduse
const prices = [12.56, 45.56, 67.12, 120.56, 167.45];
const initiolValue=0;
const total=prices.reduce(
    (accumulattor,currentValue) => accumulator+currentValue)

console.log("Prekiu suma:"+ total)*/

//ISVEDAMAS VISUS FILMUS 
const printAllMovies = (data) =>{
    data.forEach((movue,index) => {console.log(
        `${index +1}. ${movie.title} (${movie.year}) - IIMDB: ${movie.imdbRating}`
    )
    }) 

}
printAllMovies(movies)

//SUMAZINTI FILMU REITINGUS 10%

const reduceRating =(data) =>{
    return data.map((movie)=>{
        const newRating = movie.imdbRating *0.9;
        return{
            ...movie,
            imdbRating: Number(newRating.toFixed(1))
        }
    })
}
console.log("Su pakeistu reitingu:")
printAllMovies(reduceRating(movies))

//Filtravimas pagal rezisieriu

const filterByDirector = (data,diectorName) =>{
    return data.filter(movie => movie.director === directorName)
}
console.log("Filtruota pagal rezisieriu:")
printAllMovies(filterByDirector(movies,"Francis Ford Coppola"))

//Rikiuoja pagal reitingus 
const sortByImdb = (data)=>{
    return [...data].sort((a,b)=>b.imdbRating - a.imdbRating);
}
console.log("Surikiuot pagal reitinga: ");
printAllMovies(sortByImdb(moviess))

//Rikiuoja pagal pavadinimus
const sortByTitle =(data) =>{
    return[...data].sort((a,b)=>{
        a.title.localeCompare(b.title,"en",{sensitiviti:"base"})
    })

}
console.log("Surikiuota pagal pavadinima;")
printAllMovies(sortByTitle(movies))

//Rasti filma su maziausiu reitingu
const findByLowestRated = (data)=>{
    if(data.length === 0) return null

    return data.reduce((lowest,movie)=>{
        return movie.imdbRating < lowest.imdbRating ? movie:lowest;
    },data[0])
}
console.log("Filmas su zemiausiu reitingu: ")
printAllMovies(findByLowestRated(movies))


//Rasti filma su didziausiu IMDB reitingu galima naudoti ir su min lygiai taip pat 
const findHighestRated =(data) =>{
    if(data.length ===0)return null;
    const maxRating=Math.max(...data.map(m =>m.imdbRating));
    return data.filter(m=>m.imdbRating ===maxRating)
}
console.log("Filamas su didziausiu reitingu:")
printAllMovies(findHighestRated(movies))
})();


