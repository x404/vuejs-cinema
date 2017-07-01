import Vue from 'vue';
import './style.scss';

import genres from './util/genres';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

new Vue({
	el: '#app',
	data: {
		genre: [],
		time: []
	},
	methods: {
		checkFilter(category, title, checked){
			// alert("!");
			if (checked){
				this[category].push(title);
			} else {
				let index = this[category].indexOf(title);
				console.log(index);
				if (index > -1){
					this[category].splice(index, 1);
				}
			}
		}
	},
	components: {
		MovieList,
		MovieFilter
	}
});