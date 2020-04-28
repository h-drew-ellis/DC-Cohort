let filmList = document.getElementById("movies")

let film = movies.map(function(movies) {
    return `<li>
        <img src="${movies.Poster}"></img>  
        <label> ${movies.Title}</label> 
        <label> ${movies.Year}</label> 
        </li>`
})

moviesList.innerHTML = film.join(" ")