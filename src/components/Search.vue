<template>
    <div class="search-page">
        <h1 v-if="search">You've searched {{ search }} !</h1>
        <h1 v-else>Make a search</h1>
        <div class="search-bar">
            <input
                type="text"
                v-model="search"
                placeholder="Search for an anime (e.g. Naruto)"
                v-on:input="setLocalStorage"
            />
            <button v-on:click="retrieveSearchedAnimeData">
                <IconSearch />
            </button>
            <button class="search-delete" v-on:click="eraseSearchBar">
                <IconDelete />
            </button>
        </div>
        <div class="search-result">
            <AnimeGallery :animesData="animesData" />
            <button class="btn" v-if="!isLastPage" v-on:click="retrieveSearchedAnimeData">
                See more
            </button>
        </div>
    </div>
</template>

<script>
import { getSearchedAnime } from "@/services/api/animeData.js";
import AnimeGallery from "@/components/AnimeGallery";
import IconDelete from "@/components/icons/IconDelete";
import IconSearch from "@/components/icons/IconSearch";

export default {
    name: "Anime",
    components: {
        AnimeGallery,
        IconDelete,
        IconSearch,
    },
    data() {
        return {
            animesData: [],
            search: localStorage.getItem('search') || "",
            isLastPage:true,
            currentPage:1,
        };
    },
    // computed:{
    //     isLastPage : function(){
    //         return 
    //     }
    // },
    created: function(){
        if(this.search != ""){
            this.retrieveSearchedAnimeData()
        }
    },
    methods: {

        eraseSearchBar: function () {
            this.search = "";
        },

        setLocalStorage: function(){
            localStorage.setItem('search', this.search)
        },

        async retrieveSearchedAnimeData() {
            let data = await getSearchedAnime(this.search, this.currentPage);
            if(data.pagination.has_next_page){
                this.isLastPage = false
            } else {
                this.isLastPage = true
            }

            this.animesData = [...this.animesData, data.data]
            console.log(this.animesData)
        },
    },
};
</script>

<style scoped>
.search-page > h1 {
    margin: 100px 0 20px 0;
}
.search-bar {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
}

.search-bar > input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    outline: none;
    color: black;
}

.search-bar > button {
    background: #307351;
    border: none;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-bar > button.search-delete {
    background: #b41c1c;
    border: none;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100px;
}

.search-bar > button:hover {
    cursor: pointer;
}
</style>
