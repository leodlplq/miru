<template>
    <footer>
        <img src="../assets/logo.png" alt="Logo de miru" />
        <div class="links">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/random">Random</router-link>
                </li>
                <li>
                    <router-link to="/trending">Trending</router-link>
                </li>
                <li>
                    <router-link to="/search">Search</router-link>
                </li>
            </ul>
        </div>
        <div class="message">
            <span>
                Website made with 💛 by
                <a href="https://www.leodelplanque.fr" target="_blank"
                    >Léo Delplanque</a
                >
                for an IMAC course using Vue and Jikan API
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
footer {
    height: 300px;
    width: 100%;
    background: #307351;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

.links > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    list-style-type: none;
}

.links a {
    text-decoration: none;
    transition: color ease 0.5s;
}

.links a:hover {
    text-decoration: none;
    color: rgb(180, 180, 180);
}

.message {
    max-width: 350px;
}
</style>
