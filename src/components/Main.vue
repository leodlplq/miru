<template>
    <div>
        <HeroBanner
            :id="dataRandomAnime.mal_id"
            :backgroundimage="dataRandomAnime.trailer.images.large_image_url"
            :image="dataRandomAnime.images.jpg.large_image_url"
            :title="dataRandomAnime.title"
            :titlejapanese="dataRandomAnime.title_japanese"
            :synopsis="dataRandomAnime.synopsis"
            :rating="dataRandomAnime.score"
        />
        <div class="section-title">
            <h1>Trending animes</h1>
            <a href="/trending" class="btn">see more</a>
        </div>
        
        <span v-if="dataTrendingAnime.length == 0">Loading</span>
        <AnimeGallery :animesData="dataTrendingAnime" v-else/>
    </div>
</template>

<script>
import { getRandomAnime, getTrendingAnimes } from "@/services/api/animeData.js";
import HeroBanner from "@/components/HeroBanner";
import AnimeGallery from "@/components/AnimeGallery";

export default {
    name: "Main",
    props: [],
    data() {
        return {
            dataRandomAnime: {
                trailer: {
                    images: {
                        large_image_url:
                            "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
                    },
                },
                images: {
                    jpg: {
                        large_image_url:
                            "https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",
                    },
                },
                title: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
                title_japanese: "劇場版 鬼滅の刃 無限列車編",
                synopsis:
                    "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand. Unbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. Kimetsu no Yaiba Movie: Mugen Ressha-hen delves into the deepest corners of Tanjirou's mind, putting his resolve and commitment to duty to the test. [Written by MAL Rewrite]",
                score: 9.1,
            },

            dataTrendingAnime: [],
        };
    },
    created: function () {
        this.retrieveRandomAnimeData();
        this.retrieveTrendingAnime();
    },
    methods: {
        async retrieveRandomAnimeData() {
            this.dataRandomAnime = (await getRandomAnime()).data;
            console.log(this.dataRandomAnime);
        },
        async retrieveTrendingAnime() {
            this.dataTrendingAnime = (await getTrendingAnimes()).data.slice(
                0,
                16
            );
        },
    },
    components: {
        HeroBanner,
        AnimeGallery,
    },
};
</script>

<style scoped>
.section-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 15px;
}

@media screen and (max-width:400px) {
    .section-title {
        align-items: baseline;
        flex-direction: column;
        gap: 10px;
    }
    .section-title > .btn{
        align-self: baseline;
    }
}
</style>
