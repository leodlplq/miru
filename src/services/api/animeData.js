//RETURN ONE ANIME

async function getAnimeById(id) {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

async function getCharactersByAnimeId(id) {
    const response = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/characters`
    );

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

async function getNewsByAnimeId(id) {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/news`);

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

async function getRandomAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/random/anime`);

    if (response.status == 200) {
        return response.json();
        //console.log( await response.json())
    } else {
        console.log("error");
    }
}

async function getTrendingAnimes() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

async function getSearchedAnime(query, page) {
    const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&limit=24`
    );

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

export {
    getAnimeById,
    getRandomAnime,
    getTrendingAnimes,
    getSearchedAnime,
    getCharactersByAnimeId,
    getNewsByAnimeId,
};
