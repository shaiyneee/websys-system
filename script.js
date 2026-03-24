// Sample movie data
const movies = [
  {
    id: 1,
    title: "Inception",
    rating: "8.8",
    poster: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    rating: "8.6",
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: "9.0",
    poster: "https://m.media-amazon.com/images/I/51EbJjlL9EL._AC_.jpg"
  },
  {
    id: 4,
    title: "Parasite",
    rating: "8.6",
    poster: "https://m.media-amazon.com/images/I/81nqgqipFaL._SL1500_.jpg"
  }
];

// Select container
const movieList = document.getElementById("movieList");

// Function to display movies
function displayMovies() {
  movieList.innerHTML = ""; // Clear existing content

  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="info">
        <h2>${movie.title}</h2>
        <p>Rating: ${movie.rating}</p>
      </div>
    `;

    movieList.appendChild(movieCard);
  });
}

// Initial render
displayMovies();