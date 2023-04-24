import { apiKey } from './apidata.js';
import { content } from './content.js';

const homeLink = document.querySelector("#home-link");
const directorsLink = document.querySelector("#directors-link");
const mainContent = document.querySelector("main")


window.onload = showIndex();

homeLink.addEventListener( 'click', showIndex);
directorsLink.addEventListener( 'click', showDirectorsIndex);


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

 export {showDirectorMovies, mainContent};

 console.log(apiKey);