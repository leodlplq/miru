<template>
	<div class="search-page">
		<h1 v-if="search">You've searched {{ search }} !</h1>
		<h1 v-else>Make a search</h1>
		<SearchBar v-on:submitForm="formSubmition" v-on:inputForm="inputDetected" v-bind:search.sync="search"/>
		<!-- <div class="search-bar">
			<form v-on:submit="formSubmition">
				<input
					type="text"
					v-model="search"
					placeholder="Search for an anime (e.g. Naruto)"
					v-on:input="inputDetected"
				/>
				<button>
					<IconSearch />
				</button>
			</form>
			<button class="search-delete" v-on:click="eraseSearchBar">
				<IconDelete />
			</button>
		</div> -->
		<div class="sort-filter-bar">
			<div class="sort-input">
				<label for="anime-sort">Sort by : </label>
				<select v-model="animeSortType" id="anime-sort">
					<option value="None" selected>None</option>

					<option value="AZName">Name (A to Z)</option>
					<option value="ZAName">Name (Z to A)</option>
					<option value="scoreAsc">Score (asc.)</option>
					<option value="scoreDesc">Score (desc.)</option>
				</select>
			</div>
			<div class="filters">
				<span for="animé-filter">Filter by : </span>
				<div class="filter-input">
					<select id="anime-sort-genre" v-model="animeGenreFilter">
						<option :value="null" disabled selected>Genre</option>
						<option :value="null">None</option>
						<option
							v-for="item in genresDataWithoutDoublons"
							:key="item.id"
							:value="item.name"
						>
							{{ item.name }}
						</option>
					</select>
				</div>

				<div class="filter-input">
					<select id="anime-sort-type" v-model="animeTypeFilter">
						<option :value="null" disabled selected>Type</option>
						<option :value="null">None</option>

						<option value="TV">TV</option>
						<option value="OVA">OVA</option>
						<option value="Movie">Movie</option>
						<option value="Special">Special</option>
						<option value="ONA">ONA</option>
						<option value="Music">Music</option>
					</select>
				</div>

				<div class="filter-input">
					<select
						id="anime-sort-type"
						v-model="animeAudienceRatingFilter"
					>
						<option :value="null" disabled selected>
							Audience Rating
						</option>
						<option :value="null">None</option>

						<option value="G - All Ages">G - All Ages</option>
						<option value="PG - Children">PG - Children</option>
						<option value="PG-13 - Teens 13 or older">
							PG-13 - Teens 13 or older
						</option>
						<option value="R - 17+ (violence & profanity)">
							R - 17+ (violence & profanity)
						</option>
						<option value="R+ - Mild Nudity">
							R+ - Mild Nudity
						</option>
						<option value="Rx - Hentai">Rx - Hentai</option>
					</select>
				</div>
			</div>
		</div>

		<div class="search-result">
			<AnimeGallery :animesData="animeComputedData" />
			<span v-if="animeComputedData.length == 0"
				>No result for : {{ this.searchWord }}</span
			>
			<button
				class="btn btn-seemore"
				v-if="!isLastPage"
				v-on:click="retrieveSearchedAnimeData"
			>
				See more
			</button>
		</div>
	</div>
</template>

<script>
import { getSearchedAnime } from '@/services/api/animeData.js'
import { getGenres } from '@/services/api/genreData.js'
import AnimeGallery from '@/components/AnimeGallery'
// import IconDelete from '@/components/icons/IconDelete'
// import IconSearch from '@/components/icons/IconSearch'

import SearchBar from '@/components/SearchBar'

export default {
	name: 'Anime',
	components: {
		AnimeGallery,
		// IconDelete,
		// IconSearch,
		SearchBar
	},
	data() {
		return {
			animesData: [],
			search: localStorage.getItem('search') || '',
			searchWord: localStorage.getItem('search') || '',
			isLastPage: true,
			currentPage: 1,

			animeSortType: 'None',
			animeGenreFilter: null,
			animeTypeFilter: null,
			animeAudienceRatingFilter: null,

			genresData: [],
		}
	},
	computed: {
		animeComputedData: function () {
			let data
			switch (this.animeSortType) {
				case 'None':
					data = this.animesData
					break

				case 'AZName':
					data = this.animesData.slice(0).sort((a, b) => {
						if (a.title > b.title) {
							return 1
						}
						if (b.title > a.title) {
							return -1
						}
						return 0
					})
					break
				case 'ZAName':
					data = this.animesData.slice(0).sort((a, b) => {
						if (a.title > b.title) {
							return -1
						}
						if (b.title > a.title) {
							return 1
						}
						return 0
					})
					break

				case 'scoreAsc':
					data = this.animesData.slice(0).sort((a, b) => {
						if (a.score > b.score) {
							return 1
						}
						if (b.score > a.score) {
							return -1
						}
						return 0
					})
					break

				case 'scoreDesc':
					data = this.animesData.slice(0).sort((a, b) => {
						if (a.score > b.score) {
							return -1
						}
						if (b.score > a.score) {
							return 1
						}
						return 0
					})
					break

				default:
					break
			}

			if (this.animeGenreFilter != null) {
				let toKeep = false
				data = data.filter((el) => {
					el.genres.forEach((genre) => {
						if (genre.name == this.animeGenreFilter) {
							toKeep = true
						}
					})

					return toKeep
				})
			}

			if (this.animeTypeFilter != null) {
				data = data.filter((el) => el.type == this.animeTypeFilter)
			}

			if (this.animeAudienceRatingFilter != null) {
				data = data.filter(
					(el) => el.rating == this.animeAudienceRatingFilter
				)
			}
			return data
		},
		genresDataWithoutDoublons: function () {
			const uniqueIds = []

			const unique = this.genresData.filter((element) => {
				const isDuplicate = uniqueIds.includes(element.mal_id)

				if (!isDuplicate) {
					uniqueIds.push(element.mal_id)
					return true
				}
			})

			return unique.sort((a, b) => {
				if (a.name > b.name) {
					return 1
				}
				if (b.name > a.name) {
					return -1
				}
				return 0
			})
		},
	},
	created: function () {
		this.retrieveSearchedAnimeData()
		this.retrieveAnimeGenre()
	},
	methods: {
		// eraseSearchBar: function () {
		// 	this.search = ''
		// 	localStorage.setItem('search', '')
		// 	this.animesData = []
		// },

		formSubmition: function () {
			this.animesData = []
			this.retrieveSearchedAnimeData()
			this.searchWord = this.search
		},

		inputDetected: function () {
			this.setLocalStorage()
			this.currentPage = 0
		},

		setLocalStorage: function () {
			localStorage.setItem('search', this.search)
		},

		async retrieveSearchedAnimeData() {
			let data = await getSearchedAnime(this.search, this.currentPage)
			this.currentPage++
			if (data.pagination.has_next_page) {
				this.isLastPage = false
			} else {
				this.isLastPage = true
			}
			this.animesData = [...this.animesData, ...data.data]
		},

		async retrieveAnimeGenre() {
			let data = await getGenres()
			this.genresData = data.data
		},
	},
}
</script>

<style scoped>
.search-page > h1 {
	margin: 100px 0 20px 0;
}

.search-bar {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 16px;
}

.search-bar > form {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.search-bar input {
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	outline: none;
	color: black;
}

.search-bar button {
	background: #307351;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.search-bar > button.search-delete {
	background: #b41c1c;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
}

.search-bar > button:hover {
	cursor: pointer;
}

.btn-seemore {
	align-self: center !important;
}

.search-result {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	margin-top: 16px;
}

.sort-filter-bar {
	display: flex;
	align-items: center;
	gap: 50px;
}

.filters {
	display: flex;
	align-items: center;
	gap: 10px;
}

@media screen and (max-width: 1023px) {
	.sort-filter-bar {
		flex-direction: column;
		align-items: baseline;
		gap: 10px;
	}
}

@media screen and (max-width: 650px) {
	.filters {
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}
}
</style>
