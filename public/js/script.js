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
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
				<div class="card">
				<img src='${ element.posterPath}' class='card-img-top' alt='${element.title}' height='400px'>
				<div class="card-body">
				<h5 class="card-title">${ element.title}</h5>
				<h6 class="card-title">${ element.genre }</h6>
				<p class='card-text'>${ element.description }</p>
				<button onclick='addFavourite()' class='btn btn-primary'>Add to favourites</button>
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
				<div class="col-12 col-sm-6 col-md-4 col-lg-3">
				<div class="card">
				<img src='${ element.posterPath }' class='card-img-top' alt='${element.title}' height='400px'>
				<div class="card-body">
				<h5 class="card-title">${ element.title}</h5>
				<h6 class="card-title">${ element.genre }</h6>
				<p class='card-text'>${ element.description }</p>
				<button onclick='addFavourite()' class='btn btn-primary'>Add to favourites</button>
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

function addFavourite() {

	window.alert("Hello World.")

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


