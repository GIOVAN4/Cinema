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
    releaseDate: '2014-08-12',
    inRelease: true,
    launchDate: '2014-07-15',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'Velozes e furiosos:10',
    image: 'https://cinema10.com.br/upload/filmes/filmes_11149_velozes-e-furiosos-10-poster-nacional.jpg',
    releaseDate: '2023-05-10',
    inRelease: true,
    launchDate: '2023-05-20',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'Avatar',
    image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg',
    releaseDate: '2023-04-26',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'A freira',
    image: 'https://www.parkshopping.com.br/sites/pks/files/styles/cine261x385/public/filme_11330.jpg?itok=NtA0tw-7',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'O lar das crianças peculires',
    image: 'https://cinepop.com.br/wp-content/uploads/2016/05/lardascriancaspeculiares_2.jpg',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'Homem-aranha',
    image: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/09/16/1265018637-filmes-homem-aranha.jpg',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'Elementos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jUGaMOZYpzglnkgzKafMGslvIVMwZyk71w&usqp=CAU',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'BATMAN: O CAVALEIRO DAS TREVAS RESSURGE',
    image: 'https://www.papodecinema.com.br/wp-content/uploads/2012/07/20190103-capa-do-dvd-batman-ressurge-1.jpg',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
    ticketPrice: 20,
    ticketsAvailable: 50
},
{
    name: 'HARRY POTTER E A PEDRA FILOSOFAL',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPI07kKrJx4zG0u8fc2Rup5Jyim2wQL4SReZUbH8xhJWy5GZ8bbXwJHDcU9XC9f1ZSKGg&usqp=CAU',
    releaseDate: '2023-09-16',
    inRelease: true,
    launchDate: '2019-04-26',
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



