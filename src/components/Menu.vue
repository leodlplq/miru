<template>
    <div :class="isOpen ? 'menu' : 'menu close'">
        <BurgerButton on:click="toggleMenu" :isOpen.sync="isOpen" />
        <img src="../assets/logo.png" alt="Logo MIRU" id="logo-miru" />

        <div class="main-menu">
            <router-link to="/" class="home link">
                <IconHome />
                <span>Home</span>
            </router-link>
            <router-link to="/random" class="random link">
                <IconRandom />
                <span>Random anime</span>
            </router-link>
            <router-link to="/trending" href="" class="trending link">
                <IconTrending />
                <span>Trending</span>
            </router-link>
        </div>

        <div class="main-menu">
            <router-link to="/search" class="recommended link">
                <IconSearch :classGrey="true" />
                <span>Search an anime</span>
            </router-link>
        </div>

        <!-- <div class="profile-menu">
            <a href="" class="recommended link">
                <IconHome />
                <span>Profile</span>
            </a>
            <a href="" class="recommended link">
                <IconHome />
                <span>My list</span>
            </a>
        </div> -->
    </div>
</template>

<script>
import IconHome from "@/components/icons/IconHome";
import IconRandom from "@/components/icons/IconRandom";
import IconTrending from "@/components/icons/IconTrending";
import IconSearch from "@/components/icons/IconSearch";

import BurgerButton from "@/components/icons/BurgerButton"

export default {
    name: "Menu",
    components: {
        IconHome,
        IconRandom,
        IconTrending,
        IconSearch,
        BurgerButton,
    },
    data(){
        return {
            isOpen : false,
        }
        
    },
    methods: {
    }

    
};
</script>

<style>
.menu {
    width: 350px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    height: 100vh;
    position: fixed;
}

.menu::after {
    content: "";
    height: 80%;
    width: 1px;
    background: white;
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.main-menu,
.profile-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.link {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    font-weight: 600;
}

.link span {
    color: #656565;
    transition: 0.2s ease-in all;
}

.link:hover span {
    color: #307351;
}

.link .icon {
    transition: 0.2s ease-in all;
}

.link:hover .icon {
    stroke: #307351;
}

#logo-miru {
    width: 120px;
}

@media screen and (max-width: 1023px) {
    .menu {
        background: #151515;
        z-index: 9999;
        left: 0;
        top:0%;
        bottom: 0%;
        transition: left 0.5s ease;
        box-shadow: rgb(215, 215, 215, 0.5) -5px 0px 20px 1px
    }
    .menu::after{
        content: none;
    }

    .close{
        left: -280px;
    }
}
</style>
