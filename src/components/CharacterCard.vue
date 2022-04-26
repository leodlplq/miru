<template>
	<div class="character">
		<div class="character-image">
			<img
				:src="characterData.character.images.jpg.image_url"
				:alt="characterData.character.name"
			/>
		</div>
		<span class="character-name">{{ characterData.character.name }}</span>
		<div class="character-voice" v-if="this.voiceActorData.length != 0">
			<img src="@/assets/icons/jp.png" alt="Japan flag" />
			<span>{{ this.voiceActorData[0].person.name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CharacterCard',
	props: ['characterData'],
	computed: {
		voiceActorData: function () {
			let voice_actors = this.characterData.voice_actors
			voice_actors = voice_actors.filter((voice) => {
				if (voice.language == 'Japanese') return true
				else return false
			})
			return voice_actors
		},
	},
}
</script>

<style scoped>
.character {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.character-image {
	width: 100%;
	aspect-ratio: 1;
	overflow: hidden;
	border-radius: 4px;
}

.character-image > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}

.character-name {
	font-weight: 700;
	font-size: 24px;
	margin: 10px 0;
}

.character-voice > img {
	height: 10px;
	margin-right: 5px;
}

@media screen and (max-width: 1023px) {
	.character-name {
		font-size: 20px;
	}
}

@media screen and (max-width: 650px) {
	.character-name {
		font-size: 18px;
	}
}
</style>
