const movieCard = document.getElementById('movie-card');

const movieData = [
  {
    name: 'Avengers: Endgame',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH',
    releaseDate: '2019-04-26',
    inRelease: true,
    launchDate: '2019-04-24',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'A Fantástica Fábrica de Chocolate',
    image: 'https://lh4.googleusercontent.com/xbryw1wWK0SAxsKaNRX7QnMcaTWTZg9s24y_g-XtpPtOTNE6I5MWN_6rLrBgokcPYawGYMR8QMGurel-E4k5sn2qnjiV7Ru9ulQuBowuC3aUhbc0Y8FOzrnQGZRA-94wYr44ja1XH6M2306IDg',
    releaseDate: '2019-04-26',
    inRelease: true,
    launchDate: '2019-04-24',
    ticketPrice: 20,
    ticketsAvailable: 50
},
];

function createMovieCard(movieData) {
  movieData.forEach(item => {
    const movie_image = document.createElement("img");
    const movie_info = document.createElement("div");
    const movie_title = document.createElement("h2");
    const movie_release_date = document.createElement("p");
    const movie_ticket_available = document.createElement("p");
    const movie_ticket_price = document.createElement("p")
    movie_image.src = item.image
    movie_image.alt = item.name
    movie_image.className = "movie-image"

    movie_info.className = "movie-info"
    movie_title.innerText = item.name
    movie_title.className = "movie-title"

    movie_release_date.innerText = item.releaseDate
    movie_release_date.className = "movie-release-date"

    movie_ticket_available.className = "movie-ticket-available"
    movie_ticket_available.innerText = item.inRelease ? `Tickets: ${item.ticketsAvailable}` : "Not Yet Released"

    movie_ticket_price.innerText = `$ ${item.ticketPrice}`
    movie_ticket_price.className = "movie-ticket-price"
    
    movie_info.append(movie_title, movie_release_date, movie_ticket_available, movie_ticket_price);
    if(item.inRelease){
      movieCard.append(movie_image, movie_info)
    }
  })
}

createMovieCard(movieData);

