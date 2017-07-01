<template>
	<div id="movie-list">
		<div v-if="filterMovies.length">
			<movie-item v-for="movie in filterMovies" v-bind:movie="movie.movie"></movie-item>
		</div>
		<div v-else-if="movies.length" class="no-results">
			No results.
		</div>
		<div v-else class="no-results">
			Loading..
		</div>
	</div>	
</template>

<script>
	import genres from '../util/genres';
	import MovieItem from './MovieItem.vue';


	export default {
			props: [ 'genre', 'time' , 'movies'],
			methods: {
				moviePassesGenreFilter(movie){
					if (!this.genre.length){
						return true;
					} else {
						let movieGenres = movie.movie.Genre.split(", ");
						let matched = true;
						console.log(this.genre);
						this.genre.forEach(genre => {
							if (movieGenres.indexOf(genre) === -1){
								matched = false;
							}
						})
						return matched;
						// return this.genre.find(genre => movie.genre === genre);						
					};
				}
			},
			computed: {
				filterMovies(){
				// console.log("!!");
					return this.movies.filter(this.moviePassesGenreFilter);
				}
			},
			components: {
				MovieItem
			}
		}
</script>