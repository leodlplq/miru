<template>
    <div class="characters">
        <CharacterCard
            v-for="item in charactersData"
            :characterData="item"
            :key="item.id"
        />
    </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard.vue";

export default {
    name: "CharacterGallery",
    components: {
        CharacterCard,
    },
    props: ["charactersData"],
};
</script>

<style scoped>
.characters {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin: 10px 0 50px 0;
}
</style>
