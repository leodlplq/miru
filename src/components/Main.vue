<template>
    <div class="view">
        Salut : {{lastname}} ! 
    </div>
</template>

<script>
import { getAnimeById, getRandomAnime, getRecommendedAnimes } from "@/services/api/animeData.js"
getAnimeById(1);
getRandomAnime();
getRecommendedAnimes(10);



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
