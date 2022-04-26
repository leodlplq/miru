<template>
	<div class="trending-page">
		<h1>Trending Animes</h1>

		<AnimeGallery
			:animesData="this.dataTrendingAnime"
			v-if="this.dataTrendingAnime.length != 0"
		/>
		<span v-if="dataTrendingAnime.length == 0">Loading</span>
		<button
			class="btn btn-seemore"
			v-if="!isLastPage"
			v-on:click="retrieveTrendingAnime"
		>
			See more
		</button>
	</div>
</template>

<script>
import { getTrendingAnimes } from '@/services/api/animeData.js'
import AnimeGallery from '@/components/AnimeGallery'

export default {
	name: 'TrendingAnimes',
	components: {
		AnimeGallery,
	},
	created: function () {
		this.retrieveTrendingAnime()
	},
	data() {
		return {
			dataTrendingAnime: [],
			currentPage: 1,
			isLastPage: true,
		}
	},
	methods: {
		async retrieveTrendingAnime() {
			let data = await getTrendingAnimes(this.currentPage)
			this.currentPage++
			if (data.pagination.has_next_page) {
				this.isLastPage = false
			} else {
				this.isLastPage = true
			}
			this.dataTrendingAnime = [...this.dataTrendingAnime, ...data.data]
		},
	},
}
</script>

<style scoped>
.trending-page {
	display: flex;
	flex-direction: column;
	gap: 50px;
}
.btn-seemore {
	align-self: center !important;
}
</style>
