import { movies } from './data.js'
import { showDirectorMovies, mainContent } from './films.js';

export const content = 

[
    
    {
        name: "Index",
        title: "Homepage index",
        html: `<div id="index-container">
                <div id="latest">
                    <h2>Ultimas subidas</h2>
                    <div></div>
                </div>
                <div id="ramdom">
                    <h2>Aleatorio</h2>
                    <div>Peliculas aleatorias</div>
                </div>
                <div id="gender">
                    <h2>Generos</h2>
                    <div>Etiquetas generos</div>
                </div>
                <div id="popular">
                    <h2>Populares</h2>
                    <div>Peliculas populares</div>
                </div>
            </div>`,
        methods: {
            showLastestMovies: 
            
                function() {

                    //show lastest movies content
                
                }
        }
    },

    {
        name: "Directors index",
        title: "Directors index",
        html: `<div id="directors-container" style='grid-template-columns: auto;'>
                <div>
                    <h2>Directores</h2>
                <div>
                    <ul id='directorsList'></ul>
                </div>
                </div>"`,
        methods: {

            getAllDirectors: 

                function() 
                {

                    const arrayDirectors = movies.map(movie => movie.director);
                
                    return arrayDirectors;
                
                },

            getDirectorsIndex:

                function() {

                    
                    const arrayDirectors = content[1].methods.getAllDirectors();
                
                    const directorsList = document.getElementById("directorsList")

                    arrayDirectors.forEach(director => {

                    directorsList.innerHTML += '<li><a href="#" class="directorMoviesLink"</a>'+ director +'</li>';

                    });

                    const directorMoviesLink = document.querySelectorAll(".directorMoviesLink")

                    directorMoviesLink.forEach(link => {
                        link.addEventListener("click", () => {
                            showDirectorMovies(link.textContent)
                        } )
                    });

                },
            
            getDirectorMovies:

                function(director) {

                    const directorMovies = movies.filter(( movie => movie.director == director ));
                    
                    mainContent.innerHTML = "";
                   
                    mainContent.innerHTML = "<div id='directorMoviesContainer' style='grid-template-columns: auto;'><div><h2>Peliculas dirigidas por " + director + " </h2><div><ul id='directorsList'></ul></div></div>"
                   
                    directorMovies.forEach(movie => {
                   
                    directorsList.innerHTML += '<li> ' + movie.title +'</li>';
                   
                    });
                   
                },

            getMoviesAverage: 
                
                function(director) {

                    const directorMovies = movies.filter(( movie => movie.director == director ));

                    const directorMoviesContainer = document.querySelector("#directorMoviesContainer");
                  
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
                  
                    directorMoviesContainer.appendChild(div);
                  
                  }
            
        }

    }

];