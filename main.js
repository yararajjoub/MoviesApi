//TMDB
///discover/movie?sort_by=popularity.desc 

const API_KEY = 'api_key=d9a60d2b9ae4db7ab0ca7aa0ca5a17e7';
const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const genres = [
    {
        "id": 14,
        "name": "Fantasy"

    },
    {
        "id": 27,
        "name": "Horror"

   
    }, 
    {
        "id": 28,
        "name": "Action"

    
    },
   
    {
        "id": 9648,
        "name": "Mystery"
    },
   
    {
        "id": 10752,
        "name": "War"
    },
   
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 18,
      "name": "Drama"
    }
  ]

const main = document.getElementById('main');
const tagsElem = document.getElementById('tags')

//call the function and pass the url
getMovies(API_URL);
setGenres()

var selectedGenre = [] // array to save all the element from the selected genre
function setGenres(){
    tagsElem.innerHTML= '';
    //dynamic crate the tags
    genres.forEach(genre => {
        const t = document.createElement('div'); //genres
        t.classList.add('tag');
        t.id=genre.id;
        t.innerHTML = genre.name;

        //what happend if click on genre-bottun //clickable to change data
        t.addEventListener('click', ()=> {

           if(selectedGenre.length == 0){ //nothing inside = then push the genre.id to the end of array and return the new length of the array
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){ //if the genre.id is alreade inside = if true remove from array
                    selectedGenre.forEach((id, idx) => { //idx is the position of element 
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1); //then remove one elm 
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
           // highlightSelection()
         } )

        tagsElem.append(t); //se the genres 
    })
}


//show the movies we get from data as respons, we fetch the url 
function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
} 

function showMovies(data){
    main.innerHTML='';
  
    data.forEach(movie => {
        const {title, poster_path, vote_average} = movie;
        const movieElem = document.createElement('div');
        movieElem.classList.add('movie');
        movieElem.innerHTML = 
        `
          <img src="${IMG_URL+poster_path}" alt="${title}">

         <div class="movie-info">
            <h3>${title}</h3>
            <span  class="${getcolor(vote_average)}">${vote_average} </span>
             
         </div>
 
        `
        main.appendChild(movieElem);
        })
}


function getcolor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote >= 6){
        return "orange"
    }else if (vote > 1 && vote < 6 ){
        return 'red'
    }
}



/*var genres ="";    
genres.array.forEach(element => {
        if(pokemonType = 'grass' ){
            genres = "Fantasy";
        }else if (pokemonType = 'fire'){
            genres = "Horror";
        }else if (pokemonType = 'electric'){
            genres = "Action";
        }else if (pokemonType = 'water'){
            genres = "Mystery";
          }else if (pokemonType = 'fighting' ){
            genres = "War";
        }else if (pokemonType = 'normal' ){
            genres = "Comedy";
        }

    }); */

document.getElementById("1").innerHTML = localStorage.getItem("pokemonName");
document.getElementById("2").innerHTML = localStorage.getItem("winOrLose");
console.log(localStorage.getItem("winOrLose"));
document.getElementById("3").innerHTML = localStorage.getItem("pokemonType");

document.getElementById("4").innerHTML = localStorage.getItem("totalHealthLeft");

if("LOSE"){

    vote_average <= 5; 

    switch("pokemonTpe"){

        case "grass":
            showmovies(url)
            genre.id = 14;
        break;

        case "fire":
            showmovies(url)
            genre.id = 27;
        break;
        case "electric":
            showmovies(url)
            genre.id = 28;
        break;
        case "water":
            showmovies(url)
            genre.id = 9648;
        break;
        case "fighting":
            showmovies(url)
            genre.id = 10752;
        break;
        case "normal":
            showmovies(url)
            genre.id = 35;
        break;
        case "poison":
            showmovies(url)
            genre.id = 18;
        break;
 }
}