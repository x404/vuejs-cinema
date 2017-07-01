<template>
	<div id="movie-list">
		<movie-item v-for="movie in filterMovies" class="movie" v-bind:movie="movie"></movie-item>
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
						
					};
					return this.genre.find(genre => movie.genre === genre);
				}
			},
			computed: {
				filterMovies(){
				console.log("!!");
					return this.movies.filter(this.moviePassesGenreFilter);
				}
			},
			components: {
				MovieItem
			}
		}
</script>