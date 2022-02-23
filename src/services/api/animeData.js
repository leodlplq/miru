//RETURN ONE ANIME

async function getAnimeById(id){
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)

    if(response.status == 200){
        //return response.json();
        console.log( await response.json())
    } else {
        console.log("error");
    }
}

async function getRandomAnime(){
    const response = await fetch(`https://api.jikan.moe/v4/random/anime`)

    if(response.status == 200){
        //return response.json();
        console.log( await response.json())
    } else {
        console.log("error");
    }
}

async function getRecommendedAnimes(){
    const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime`)

    if(response.status == 200){
        //return response.json();
        console.log( await response.json())
    } else {
        console.log("error");
    }
}

async function getTrendingAnimes(){
    
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`)

    if(response.status == 200){
        //return response.json();
        console.log( await response.json())
    } else {
        console.log("error");
    }
}



export { getAnimeById, getRandomAnime, getRecommendedAnimes, getTrendingAnimes }


