<template>
    <div class="menu">
        <img src="../assets/logo.png" alt="Logo MIRU" id="logo-miru" />

        <div class="main-menu">
            <a href="#" class="home link">
                <IconHome />
                <span>Home</span>
            </a>
            <a href="" class="random link">
                <IconHome />
                <span>Random anime</span>
            </a>
            <a href="" class="trending link">
                <IconHome />
                <span>Trending</span>
            </a>
            <a href="" class="recommended link">
                <IconHome />
                <span>Recommendations</span>
            </a>
        </div>

        <div class="profile-menu">
            <a href="" class="recommended link">
                <IconHome />
                <span>Profile</span>
            </a>
            <a href="" class="recommended link">
                <IconHome />
                <span>My list</span>
            </a>
        </div>
    </div>
</template>

<script>
import IconHome from "./icons/IconHome";

export default {
    name: "Menu",
    components: {
        IconHome,
    },
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
</style>
