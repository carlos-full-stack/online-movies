const mainContent = document.querySelector("main")

function getAllDirectors() {

  const arrayDirectors = movies.map(movie => movie.director);

  return arrayDirectors;

}

function showDirectors() { 
  
  mainContent.innerHTML = "";

  arrayDirectors = getAllDirectors();

  mainContent.innerHTML = "<div id='content' style='grid-template-columns: auto;'><div id='hot'><h2>Directores</h2><div><ul id='directorsList'></ul></div></div>"

  const directorsList = document.getElementById("directorsList")


  arrayDirectors.forEach(director => {

    directorsList.innerHTML += '<li><a href="#" onclick="getMoviesFromDirector(\'' + director + '\')">' + director + '</li></a>';

  });


}

function getMoviesFromDirector(director) {

 const directorMovies = movies.filter(( movie => movie.director == director ));
 
 mainContent.innerHTML = "";

 mainContent.innerHTML = "<div id='content' style='grid-template-columns: auto;'><div id='hot'><h2>Peliculas dirigidas por " + director + " </h2><div><ul id='directorsList'></ul></div></div>"

 directorMovies.forEach(movie => {

   directorsList.innerHTML += '<li> ' + movie.title +'</li>';

 });


}