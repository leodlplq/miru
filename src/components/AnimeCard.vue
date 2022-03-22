<template>
    <div class="anime-card">
        <img :src="animeData.images.jpg.large_image_url" alt="Anime images" />
        <a class="card-overlay" href="#">
            <h5>{{ animeData.title }}</h5>
            <span v-if="animeData.score">
                {{ animeData.score }}
                <img
                    src="@/assets/icons/star.png"
                    alt="star"
                    class="litte-star"
            /></span>
            <span v-else>Unrated</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "AnimeCard",
    props: ["animeData"],
};
</script>

<style scoped>
.anime-card {
    position: relative;
    width: fit-content;
    border-radius: 5px;
    overflow: hidden;
    aspect-ratio: 316/450;
    width: 100%;
}

.anime-card > img {
    object-fit: cover;
    height: 100%;
}

.card-overlay {
    width: 100%;
    height: 100%;
    background: rgba(165, 206, 161, 0.7);
    position: absolute;
    top: 100%;
    left: 0;
    transition: top 0.5s ease;
    text-decoration: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
}

.card-overlay > h5 {
    font-size: 18px;
    justify-self: flex-end;
}

.card-overlay > span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 500;
}

.card-overlay > span > img {
    height: 15px;
}

.anime-card:hover .card-overlay {
    top: 0;
}
</style>
