const mainContent = document.querySelector("main")



 function showIndex() {

  const homeContent = content[0].html;

  mainContent.innerHTML = homeContent;


 }


 function showDirectorsIndex() {

  const directorsContent = content[1]['html'];

  mainContent.innerHTML = directorsContent;

  content[1].methods.getDirectorsIndex();

 }


 function showDirectorMovies(director) {

  const directorsContent = content[1]['html'];

  mainContent.innerHTML = directorsContent;

  content[1].methods.getDirectorMovies(director);

  content[1].methods.getMoviesAverage(director);

 }






// function showDirectors() { 
  
//   mainContent.innerHTML = "";

//   arrayDirectors = getAllDirectors();

//   mainContent.innerHTML = "<div id='content' style='grid-template-columns: auto;'><div id='directors'><h2>Directores</h2><div><ul id='directorsList'></ul></div></div>"

//   const directorsList = document.getElementById("directorsList")


//   arrayDirectors.forEach(director => {

//     directorsList.innerHTML += '<li><a href="#" onclick="getMoviesFromDirector(\'' + director + '\')">' + director + '</li></a>';

//   });


// }

// function getAllDirectors() {

//   const arrayDirectors = movies.map(movie => movie.director);

//   return arrayDirectors;

// }

// function getMoviesFromDirector(director) {

//  const directorMovies = movies.filter(( movie => movie.director == director ));
 
//  mainContent.innerHTML = "";

//  mainContent.innerHTML = "<div id='content' style='grid-template-columns: auto;'><div id='directors'><h2>Peliculas dirigidas por " + director + " </h2><div><ul id='directorsList'></ul></div></div>"

//  directorMovies.forEach(movie => {

//    directorsList.innerHTML += '<li> ' + movie.title +'</li>';

//  });

//  moviesAverage(directorMovies);


// }

function moviesAverage(directorMovies) {

  const directors = document.querySelector("#directors");

  var moviesAverage = 0;

  directorMovies.forEach(movie => {

    moviesAverage += movie.score;
 
  });

  const heading = document.createElement("h3");

  heading.textContent = "Puntacion media de las peliculas";

  const paragraph = document.createElement("p");

  paragraph.textContent = moviesAverage;

  const div = document.createElement("div");
  
  div.appendChild(heading);
  div.appendChild(paragraph);

  directors.appendChild(div);

}