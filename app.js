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
]

/*MAP užduotys
a) Naudodami map, sukurkite naują masyvą su visų knygų pavadinimais (be pasikartojimų kategorijose).
b) Naudodami map, sukurkite masyvą objektų, kuriuose būtų:
{
  kategorija: "...",
  pavadinimas: "...",
  pilnasPavadinimas: "Kategorija – Knygos pavadinimas"
}
c) Naudodami map, kiekvienai knygai apskaičiuokite bendrą vertę sandėlyje (kiekis * kaina) ir grąžinkite masyvą su tokiais objektais:
{
  ISBN: "...",
  pavadinimas: "...",
  verte: 123
}*/

let visiPavadinimai = movies.map(x => x.title);
console.log("1. Visi pavadinimai:", visiPavadinimai);

let pavadinimuObj = movies.map(x => {
    return {
        pavadinimas: x.title,
        metai: x.year,
        pilnas: x.title + " (" + x.year + ")"
    };
});
console.log("2. Objektai su pilnu pavadinimu:", pavadinimuObj);

let suBoxOffice = movies.map(x => {
    return {
        id: x.id,
        pavadinimas: x.title,
        pelnas: x.boxOfficeUSD
    }
});
console.log("3. Filmų pelnas:", suBoxOffice);

/*FILTER užduotys
a) Naudodami filter, išrinkite naujas knygas – tas, kurių leidimoMetai yra lygūs einamiesiems metams.
b) Naudodami filter, išrinkite brangias knygas, kurių kaina didesnė už, pavyzdžiui, 30 EUR.
c) Naudodami filter, sukurkite naują kategorijų masyvą, kuriame liktų tik tos kategorijos, kurių bent viena knyga turi daugiau nei 300 puslapių*/
// FILTER užduotys
let naujiFilmai = movies.filter(x => x.year == 2025); 
console.log("4. Nauji filmai 2025:", naujiFilmai);

let geraiVertinti = movies.filter(x => x.imdbRating > 8.8);
console.log("5. Filmai su IMDb > 8.8:", geraiVertinti);

let animeFilmai = movies.filter(x => x.language == "Japanese");
console.log("6. Anime filmai:", animeFilmai);

/*REDUCE užduotys
a) Naudodami reduce, suskaičiuokite bendrą visų knygų kiekį kataloge (visose kategorijose).
b) Naudodami reduce, suskaičiuokite bendrą katalogo vertę eurais, t. y. visų knygų (kiekis * kaina) sumą.
c) Naudodami reduce, suskaičiuokite, kiek iš viso puslapių turėtų visos knygos, jei jas visas sudėtume (suma puslapiuSkaicius * kiekis).
let visuTrukme = movies.reduce((sum, x) => sum + x.durationMin, 0);
console.log("7. Visų filmų trukmė min:", visuTrukme);*/

let bendraKasa = movies.reduce((sum, x) => sum + x.boxOfficeUSD, 0);
console.log("8. Visų filmų bendra kasa:", bendraKasa);

/* SORT užduoys
 a) Naudodami sort, išrikiuokite vienos pasirinktos kategorijos knygas pagal leidimo metus didėjančia tvarka.
b) Naudodami sort, išrikiuokite visas katalogo knygas pagal kainą mažėjančia tvarka.
c) Naudodami sort, išrikiuokite kategorijų masyvą pagal kategorijos pavadinimą abėcėlės tvarka.
let pagalMetus = movies.slice().sort((a,b)=> a.year - b.year);
console.log("9. Filmai pagal metus (seniausi → naujausi):", pagalMetus);*/

let pagalRating = movies.slice().sort((a,b)=> b.imdbRating - a.imdbRating);
console.log("10. Filmai pagal IMDb reitingą (didžiausias → mažiausias):", pagalRating);

let abecele = movies.slice().sort((a,b)=> a.title.localeCompare(b.title));
console.log("11. Filmai pagal abėcėlę:", abecele);

/* MIN / MAX užduotys
a) Raskite pigiausią knygą kataloge (mažiausia kaina) ir išveskite jos kategoriją, pavadinimą ir kainą.
b) Raskite brangiausią knygą kataloge (didžiausia kaina).
c) Raskite seniausią ir naujausią knygą pagal leidimoMetai.
d) Raskite, kurios kategorijos knygų bendras kiekis (viso egzempliorių) yra didžiausias ir mažiausias (čia galite derinti reduce su Math.max / Math.min arba papildomu sort).
let pigiausias = movies.reduce((a,b)=> a.boxOfficeUSD < b.boxOfficeUSD ? a : b);
console.log("12. Pigiausias filmas (pagal boxOfficeUSD):", pigiausias);*/

let brangiausias = movies.reduce((a,b)=> a.boxOfficeUSD > b.boxOfficeUSD ? a : b);
console.log("13. Brangiausias filmas (pagal boxOfficeUSD):", brangiausias);

let seniausias = movies.reduce((a,b)=> a.year < b.year ? a : b);
console.log("14. Seniausias filmas:", seniausias);

let naujausias = movies.reduce((a,b)=> a.year > b.year ? a : b);
console.log("15. Naujausias filmas:", naujausias);
