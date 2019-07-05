function getMovies() {

	fetch('http://localhost:3000/movies')
		.then((response) => {
			//console.log(response);
			if (response.status == 200) {
				return response.json();
			}
		})
		.then((movie) => {
			let body = document.getElementById("moviesList");
			let body_html = "";
			movie.forEach(element => {
				body_html += `
				<div class="col-lg-6">
				<div class="card card-space">
				<img src='${ element.posterPath}' class='card-img-top' alt='${element.title}' height='400px'>
				<div class="card-body">
				<h5 class="card-title">${ element.title}</h5>
				<h6 class="card-title">${ element.genre}</h6>
				<button onclick='addFavourite(${ element.id})' class='btn btn-primary'>Add to favourites</button>
				</div>
				</div>
				</div>`
			});

			body.innerHTML = body_html;

		})
		.catch((error) => {
			console.log(error);
		})

}

function getFavourites() {

	fetch('http://localhost:3000/favourites')
		.then((response) => {
			//console.log(response);
			if (response.status == 200) {
				return response.json();
			}
		})
		.then((favourite) => {
			let body = document.getElementById("favouritesList");
			let body_html = "";
			favourite.forEach(element => {
				body_html += `
				<div class="col-lg-6">
				<div class="card card-space">
				<img src='${ element.posterPath}' class='card-img-top' alt='${element.title}' height='400px'>
				<div class="card-body">
				<h5 class="card-title">${ element.title}</h5>
				<h6 class="card-title">${ element.genre}</h6>
				</div>
				</div>
				</div>`
			});

			body.innerHTML = body_html;

		})
		.catch((error) => {
			console.log(error);
		})

}

function addFavourite(id) {

	let favourite_movie;

	var url = "http://localhost:3000/movies/" + id;
	fetch(url, {
		"method": "get",
		"Content-Type": {
			"headers": "application/json"
		}
	})
		.then((response) => {
			if (response.status == 200) {
				return response.json();
			}
		})
		.then((favourite) => {
			//console.log(favourite);
			favourite_movie = favourite;
			fetch('http://localhost:3000/favourites', {
				"method": "post",
				"body": JSON.stringify(favourite_movie),
				"headers": {
					"Content-Type": "application/json"
				}
			})
				.then((response) => {
					if (response.status == 201) {
						console.log("Record added successfully.");
						getFavourites();
					}
				})
				.catch((error) => {
					console.log(error);
				})
		})
		.catch((error) => {
			console.log(error);
		})

}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


