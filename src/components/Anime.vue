<template>
	<div class="anime">
		<div class="anime-banner">
			<img
				v-if="dataAnime.trailer.images.large_image_url != null"
				:src="dataAnime.trailer.images.large_image_url"
				alt="Banner"
			/>
			<img
				v-else
				:src="dataAnime.images.jpg.large_image_url"
				alt="Banner"
			/>
		</div>
		<div class="anime-info">
			<div class="left">
				<img
					:src="dataAnime.images.jpg.large_image_url"
					alt="Poster of "
				/>
			</div>
			<div class="right">
				<div class="anime-title">
					<h1 v-if="dataAnime.title_english != null">
						{{ dataAnime.title_english }}
					</h1>
					<h1 v-else>{{ dataAnime.title }}</h1>
					<span>{{ dataAnime.title_japanese }}</span>
				</div>
				<div>
					<div class="anime-rating">
						<img src="@/assets/icons/star.png" alt="Star icon" />
						<span v-if="dataAnime.score != null"
							>{{ dataAnime.score }}/10 ({{
								dataAnime.scored_by
							}}
							ratings)</span
						>
						<span v-else>Unrated</span>
					</div>
					<span
						class="anime-animator"
						v-if="dataAnime.studios.length != 0"
					>
						animated by <span>{{ dataAnime.studios[0].name }}</span>
					</span>
				</div>

				<p class="anime-resume">{{ dataAnime.synopsis }}</p>
			</div>
		</div>
		<div class="anime-trailer" v-show="dataAnime.trailer.url != null">
			<h2>Trailer</h2>
			<div class="anime-trailer-video">
				<iframe
					class="youtube-player"
					:src="dataAnime.trailer.embed_url"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="anime-characters" v-show="charactersAnime.length != 0">
			<h2>Characters</h2>
			<CharacterGallery :charactersData="charactersAnime" />
		</div>
		<div class="anime-news" v-show="newsAnime.length != 0">
			<h2>News</h2>

			<NewsGallery :newsData="newsAnime" />
		</div>
	</div>
</template>

<script>
import {
	getAnimeById,
	getCharactersByAnimeId,
	getNewsByAnimeId,
	getRandomAnime,
} from '@/services/api/animeData.js'

import CharacterGallery from '@/components/CharacterGallery.vue'
import NewsGallery from '@/components/NewsGallery.vue'

export default {
	name: 'Anime',
	components: { CharacterGallery, NewsGallery },
	data() {
		return {
			dataAnime: {
				title_english: 'Loading',
				images: {
					jpg: {
						large_image_url:
							'https://oskar.training/wp-content/uploads/2019/11/Loading_symbol.gif',
					},
				},
				trailer: {
					images: {
						large_image_url:
							'https://oskar.training/wp-content/uploads/2019/11/Loading_symbol.gif',
					},
				},
				studios: [{ name: 'loading' }],
			},
			charactersAnime: [
				{
					character: {
						images: {
							jpg: {
								image_url:
									'https://www.zendevs.xyz/wp-content/uploads/2018/10/lazy-loading.png',
							},
						},
					},
					voice_actors: [{ person: { name: 'Loading' } }],
				},
			],
			newsAnime: [],
		}
	},
	created() {
		if (this.$route.path == '/random') {
			this.retrieveRandomAnime()
		} else {
			const id = this.$route.params.id
			this.retrieveAnimeData(id)
			this.retrieveCharactersData(id)
			this.retrieveNewsData(id)
		}
	},
	watch: {
		dataAnime: function () {
			if (this.$route.path == '/random') {
				const id = this.dataAnime.mal_id
				this.retrieveCharactersData(id)
				this.retrieveNewsData(id)
			}
		},
	},
	methods: {
		async retrieveAnimeData(id) {
			this.dataAnime = (await getAnimeById(id)).data
		},
		async retrieveCharactersData(id) {
			setTimeout(async () => {
				this.charactersAnime = (await getCharactersByAnimeId(id)).data
			}, 1000)
		},
		async retrieveNewsData(id) {
			setTimeout(async () => {
				this.newsAnime = (await getNewsByAnimeId(id)).data
			}, 1000)
		},
		async retrieveRandomAnime() {
			this.dataAnime = (await getRandomAnime()).data
		},
	},
}
</script>

<style scoped>
.youtube-player {
	width: 100%;
	aspect-ratio: 1280/780;
	margin: 10px 0 50px;
}

.anime {
	padding: 50px 0;
}
.anime-banner {
	width: 100%;
	height: 250px;
	overflow: hidden;
	border-radius: 4px;
}

.anime-banner > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.anime-info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	margin: 30px 0px 60px 0px;
}

.anime-info > .left {
	height: 300px;
}

.anime-info > .left > img {
	height: 100%;
	object-fit: contain;
	border-radius: 4px;
}

.anime-info > .right {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: baseline;
	gap: 36px;
}

.anime-title > h1 {
	font-size: 40px;
	line-height: 40px;
}

.anime-title > span {
	font-weight: 400;
	font-size: 20px;
	line-height: 20px;
}

.anime-rating {
	display: flex;
	align-items: center;
	gap: 10px;
}

.anime-rating > img {
	height: 10px;
}

.anime-animator > span {
	color: #a5cea1;
}

/** CHARACTER STYLE */

/** NEWS PART */

@media screen and (max-width: 1023px) {
}

@media screen and (max-width: 650px) {
	.anime {
		padding-top: 0;
	}

	.anime-banner {
		display: none;
	}

	.anime-info {
		flex-direction: column;
	}

	.anime-info > .left {
		width: 100%;
		height: auto;
	}
	.anime-info > .left > img {
		width: 100%;
	}
}
</style>
