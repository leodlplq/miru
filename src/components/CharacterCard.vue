<template>
    <div class="character">
        <div class="character-image">
            <img
                :src="characterData.character.images.jpg.image_url"
                :alt="characterData.character.name"
            />
        </div>
        <span class="character-name">{{ characterData.character.name }}</span>
        <div
            class="character-voice"
            v-if="characterData.voice_actors.length != 0"
        >
            <img src="@/assets/icons/jp.png" alt="Japan flag" />
            <span>{{ characterData.voice_actors[0].person.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CharacterCard",
    props: ["characterData"],
};
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
</style>
