async function getGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/genres/anime`);

    if (response.status == 200) {
        return response.json();
        //console.log(await response.json());
    } else {
        console.log("error");
    }
}

export {
    getGenres
}