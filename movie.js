class movie {
  constructor(title, studio, rating = "PG") {
    this._title = title;
    this._studio = studio;
    this._rating = rating;
  }

  movieDetails() {
    return `
    Title   : ${this._title}
    studio  : ${this._studio}
    Rating  : ${this._rating}
    `;
  }

  getPG(movies) {
    for (const movie of movies) {
      if (movie._rating === "PG") {
        pgMovies.push(movie);
      }
    }
    return pgMovies;
  }
}

/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments,
and sets the respective class properties to these values.  */

const movieObj1 = new movie("Jailer", "Sun pictures", "PG13");
console.log(movieObj1.movieDetails());

/*b) The constructor for the class Movie will set the class property rating to "PG" as default
when no rating is provided. */

const movieObj2 = new movie("Shot Boot 3", "Universe Creations");
console.log(movieObj2.movieDetails());

/*d) Write a piece of code that creates an instance of the class Movie with the
title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”  */

const movieObj3 = new movie("casino Royale", "Eon Productions", "PG13");
console.log(movieObj3.movieDetails());

/*c) Write a method getPG, which takes an array of base type Movie as its argument,
and returns a new array of only those movies in the input array with a rating of "PG".
You may assume the input array is full of Movie instances.
The returned array need not be full.*/

const movieObj4 = new movie("Home Alone", "Hughes Entertainment", "PG");

const movies = ["Jailer", "Shot Boot 3", "casino Royale", "Home Alone"];

console.log(movie.getPG);