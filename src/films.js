const mainContent = document.querySelector("main")


 function showIndex() {

  const homeContent = content[0].html;

  mainContent.innerHTML = homeContent;

  content[0].methods.showLastestMovies();


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