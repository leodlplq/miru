<template>
    <div class="view">
        <HeroBanner
            backgroundimage="https://img.youtube.com/vi/QwvWdnd2Ktg/maxresdefault.jpg"
            image="https://cdn.myanimelist.net/images/anime/1908/120036l.webp"
            title="Demon Slayer: Kimetsu no Yaiba Entertainment District Arc"
            titlejapanese="鬼滅の刃 遊郭編"
            synopsis="The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon. [Written by MAL Rewrite]"
            rating="8.92"
        />
        <div class="section-title">
            <h1>Trending animes</h1>
            <a href="#" class="btn">see more</a>
        </div>

        <div class="card-list">
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
        </div>

        <div class="section-title">
            <h1>Recommended animes</h1>
            <a href="#" class="btn">see more</a>
        </div>

        <div class="card-list">
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
        </div>

        <div class="section-title">
            <h1>Random animes</h1>
            <a href="#" class="btn">see more</a>
        </div>

        <div class="card-list">
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
        </div>
    </div>
</template>

<script>
import {
    getAnimeById,
    getRandomAnime,
    getRecommendedAnimes,
    getTrendingAnimes,
} from "@/services/api/animeData.js";
import HeroBanner from "@/components/HeroBanner";
import AnimeCard from "./AnimeCard.vue";

getAnimeById(40456);
getRandomAnime();
getRecommendedAnimes();
getTrendingAnimes();

export default {
    name: "Main",
    props: ["firstname", "lastname"],
    data() {
        return {
            dataAnime: ["lol", "salut", "comment va ?"],
        };
    },
    methods: {},
    components: {
        HeroBanner,
        AnimeCard,
    },
};
</script>

<style scoped>
.view {
    position: absolute;
    right: 0;
    width: calc(100% - 350px);
    color: white;
    padding: 50px;
    font-weight: 200;
}

.section-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 15px;
}

.card-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
</style>
