<template>
    <div class="card-list">
        <AnimeCard
            v-for="item in animesData"
            :animeData="item"
            :key="item.id"
            ref="boxes"
        />
        <!-- <div ref="boxes" class="box" v-for="i in 5" :key="i"></div> -->
    </div>
</template>

<script>
import AnimeCard from "@/components/AnimeCard.vue"

import gsap from 'gsap'

// import bus from '@/services/animation/bus'

export default {
    name:"AnimeGallery",
    components: {
        AnimeCard,
    },
    props: ["animesData"],
    updated(){
        gsap
        .timeline()
        .from(
            ".anime-card",  
            {y: -25, opacity:0, stagger: 0.1},

        );
    },
}
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    width: 100%;
}

.box{
    width:100px;
    height: 100px;
    background: red;
}

@media screen and (max-width:1023px) {
    .card-list {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width:650px) {
    .card-list {
        grid-template-columns: repeat(2, 1fr);
        
    }
}

@media screen and (max-width:400px) {
    .card-list {
        grid-template-columns: repeat(1, 1fr);
        
    }
}
</style>