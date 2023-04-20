const content = 

[
    
    {
        name: "Index",
        title: "Homepage index",
        html: `<div id="index-container">
                <div id="hot">
                    <h2>Novedades</h2>
                    <div>Nuevas peliculas</div>
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
            </div>`
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

                    
                    arrayDirectors = content[1].methods.getAllDirectors();
                
                    const directorsList = document.getElementById("directorsList")

                    arrayDirectors.forEach(director => {

                        directorsList.innerHTML += '<li><a href="#" onclick="showDirectorMovies(\'' + director + '\')">' + director + '</li></a>';

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
            
        }

    }

];