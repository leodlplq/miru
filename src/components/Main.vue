<template>
    <div class="view">
        Salut : {{lastname}} ! 
        <HeroBanner />

    </div>
</template>

<script>
import { getAnimeById, getRandomAnime, getRecommendedAnimes, getTrendingAnimes } from "@/services/api/animeData.js"
import HeroBanner from '@/components/HeroBanner'
getAnimeById(40456)
getRandomAnime()
getRecommendedAnimes()
getTrendingAnimes()



export default {


    name: "Main",
    props:[
        "firstname",
        "lastname"
    ], 
    data(){
        return {
            dataAnime : ["lol", "salut", "comment va ?"]
        }
    },
    methods:{
        
    },
    components: {
        HeroBanner,
    }
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
</style>
