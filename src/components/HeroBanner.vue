<template>
	<div class="hero-banner">
		<div class="banner-background">
			<img
				v-if="backgroundimage == null"
				v-bind:src="image"
				v-bind:alt="title"
			/>
			<img v-else v-bind:src="backgroundimage" v-bind:alt="title" />
			<div class="overlay"></div>
		</div>
		<div class="banner-infos">
			<img class="banner-img" v-bind:src="image" alt="Image" />
			<div class="banner-right">
				<div class="top">
					<div class="banner-title-container">
						<h1 class="banner-title">{{ title }}</h1>
						<span class="banner-title-jap">{{
							titlejapanese
						}}</span>
					</div>
					<h1 v-if="rating" class="banner-rating">
						{{ rating }}/10 <img src="@/assets/icons/star.png" />
					</h1>
					<h1 v-else class="banner-rating">Unrated</h1>
				</div>

				<p class="banner-synopsis">
					{{ synopsis }}
				</p>
				<router-link :to="`/anime/${id}`" class="btn"
					>see more</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeroBanner',
	props: {
		title: { type: String, required: true },
		titlejapanese: { type: String },
		synopsis: { type: String },
		backgroundimage: { type: String },
		image: { type: String },
		rating: { type: Number },
		id: { type: Number },
	},
}
</script>

<style scoped>
.hero-banner {
	width: 100%;
	height: 400px;
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	padding: 30px;
	display: flex;
	align-items: flex-end;
}

.banner-background {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
}

.banner-background > img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.banner-background > .overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.7);
}

.banner-infos {
	position: relative;
	width: calc(100%);
	display: flex;
}

.banner-infos > .banner-img {
	height: 200px;
	border-radius: 4px;
}

.banner-right {
	display: flex;
	flex-direction: column;
	padding-left: 30px;
	justify-content: space-between;
	width: 100%;
}

.top {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.banner-title-container {
	display: flex;
	flex-direction: column;
}

.banner-title {
	font-size: 36px;
	margin: 0;
	text-overflow: ellipsis;
}

.banner-rating {
	display: flex;
	align-items: flex-start;
	justify-content: center;
}

@media screen and (max-width: 1023px) {
	.hero-banner {
		width: 100%;
		height: 600px;
	}
}

@media screen and (max-width: 400px) {
	.hero-banner {
		display: none;
	}
}
</style>
