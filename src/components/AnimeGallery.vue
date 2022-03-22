<template>
    <div class="card-list">
        <AnimeCard
            v-for="item in animesData"
            :animeData="item"
            :key="item.id"
        />
    </div>
</template>

<script>
import AnimeCard from "@/components/AnimeCard.vue"

export default {
    name:"AnimeGallery",
    components: {
        AnimeCard,
    },
    props: ["animesData"]
}
</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    width: 100%;
}
</style>