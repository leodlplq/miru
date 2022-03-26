<template>
    <div class="news-container">
        <NewsCard v-for="item in newsData" :newsData="item" :key="item.id" />
    </div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";

export default {
    name: "NewsGallery",
    components: {
        NewsCard,
    },
    props: ["newsData"],
};
</script>

<style scoped>
.news-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 10px 0 50px 0;
}
</style>
