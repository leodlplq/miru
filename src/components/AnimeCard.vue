<template>
    <div class="anime-card">
        <img
            src="https://cdn.myanimelist.net/images/anime/1704/106947l.webp"
            alt="Anime images"
        />
        <a class="card-overlay" href="#">
            <h5>Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train</h5>
            <span
                >8.5
                <img
                    src="@/assets/icons/star.png"
                    alt="star"
                    class="litte-star"
            /></span>
        </a>
    </div>
</template>

<script>
export default {
    name: "AnimeCard",
};
</script>

<style scoped>
.anime-card {
    position: relative;
    width: fit-content;
    border-radius: 5px;
    overflow: hidden;
    height: 235px;
}

.anime-card > img {
    object-fit: cover;
    aspect-ratio: 316/450;
    height: 235px;
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
