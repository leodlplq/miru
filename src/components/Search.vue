<template>
    <div class="search-page">
        <h1 v-if="search">You've searched {{ search }} !</h1>
        <h1 v-else>Make a search</h1>
        <div class="search-bar">
            <form v-on:submit="formSubmition">
                <input
                    type="text"
                    v-model="search"
                    placeholder="Search for an anime (e.g. Naruto)"
                    v-on:input="inputDetected"
                />
                <button>
                    <IconSearch />
                </button>
            </form>
            <button class="search-delete" v-on:click="eraseSearchBar">
                <IconDelete />
            </button>
        </div>
        <div class="sort-input">
            <label for="animé-sort">Sort by : </label>
            <select v-model="animeSortType" id="anime-sort">
                <option value="None" selected>None</option>
                <option value="AZName">Name (A to Z)</option>
                <option value="ZAName">Name (Z to A)</option>
                <option value="scoreAsc">Score (asc.)</option>
                <option value="scoreDesc">Score (desc.)</option>
            </select>
        </div>
        <div class="search-result">
            <AnimeGallery :animesData="animeComputedData" />
            <button
                class="btn btn-seemore"
                v-if="!isLastPage"
                v-on:click="retrieveSearchedAnimeData"
            >
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
            search: localStorage.getItem("search") || "",
            isLastPage: true,
            currentPage: 1,

            animeSortType: "None",
        };
    },
    computed: {
        animeComputedData: function () {
            let data;
            switch (this.animeSortType) {
                case "None":
                    data = this.animesData;
                    break;

                case "AZName":
                    data = this.animesData.slice(0).sort((a, b) => {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (b.title > a.title) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "ZAName":
                    data = this.animesData.slice(0).sort((a, b) => {
                        if (a.title > b.title) {
                            return -1;
                        }
                        if (b.title > a.title) {
                            return 1;
                        }
                        return 0;
                    });
                    break;

                case "scoreAsc":
                    data = this.animesData.slice(0).sort((a, b) => {
                        if (a.score > b.score) {
                            return 1;
                        }
                        if (b.score > a.score) {
                            return -1;
                        }
                        return 0;
                    });
                    break;

                case "scoreDesc":
                    data = this.animesData.slice(0).sort((a, b) => {
                        if (a.score > b.score) {
                            return -1;
                        }
                        if (b.score > a.score) {
                            return 1;
                        }
                        return 0;
                    });
                    break;

                default:
                    break;
            }
            console.log(data);
            return data;
        },
    },
    created: function () {
        if (this.search != "") {
            this.retrieveSearchedAnimeData();
        }
    },
    methods: {
        eraseSearchBar: function () {
            this.search = "";
        },

        formSubmition: function () {
            this.animesData = [];
            this.retrieveSearchedAnimeData();
        },

        inputDetected: function () {
            this.setLocalStorage();
            this.currentPage = 0;
        },

        setLocalStorage: function () {
            localStorage.setItem("search", this.search);
        },

        async retrieveSearchedAnimeData() {
            let data = await getSearchedAnime(this.search, this.currentPage);
            this.currentPage++;
            if (data.pagination.has_next_page) {
                this.isLastPage = false;
            } else {
                this.isLastPage = true;
            }
            console.log(data.data);
            this.animesData = [...this.animesData, ...data.data];
            console.log(this.animesData);
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

.search-bar > form {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.search-bar input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    outline: none;
    color: black;
}

.search-bar button {
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

.btn-seemore {
    align-self: center !important;
}

.search-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 16px;
}
</style>
