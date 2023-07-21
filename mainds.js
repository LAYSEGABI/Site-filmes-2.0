const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjI4MmYxYWYyOGQ2NmNhMjgzMDFhOGVkYjQ0OWEyMiIsInN1YiI6IjY0YWRkMzcyNmEzNDQ4MDBlYThlNGFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fjl8RFIGGkyCuDYXgiELp2LOh0zOsRkOJ6876sA9NEU'
  }
};


fetch(`https://api.themoviedb.org/3/movie/popular`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


let filmesContainer = document.querySelector('.filmes')

const pegaLivro = async () => {
  const filmes = await fetch("https://api.themoviedb.org/3/movie/popular");
  const response = await filmes.json();
  console.log(response.results)
  filmesContainer.innerHTML = ''
  response.results.forEach(filme => {

    const titulo = filme.title;
    const poster = filme.poster_path;
    //const descricao = filme.overview;
    //const nota = filme.vote_average;
    //const lancamento = filme.release_date;
    //const back = filme.backdrop_path;



    filmesContainer.innerHTML += `<div class="filme">
              <img class="poster-filme" src="https://image.tmdb.org/t/p/original/${poster}" alt="falhou">
               <h4 class="filme-titulo">
                ${titulo}
              </h4>
            </div>`
  })
}

pegaLivro()

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


