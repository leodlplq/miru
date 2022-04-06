<template>
    <main>
        <Menu />
        <div class="view">
            <router-view></router-view>
        </div>
        
    </main>
</template>

<script>
import Menu from "@/components/Menu";

export default {
    name: "App",
    components: {
        Menu
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans";
    color: white;
}

body {
    min-height: 100vh;
    background: #151515;
}

main {
    width: 100%;
    min-height: 100vh;
    position: relative;
}

.btn {
    background: #307351;
    color: #fff;
    padding: 10px 50px;
    align-self: flex-end;
    justify-self: flex-end;
    text-decoration: none;
    border-radius: 5px;
    border: none;
}
.view {
    position: absolute;
    right: 0;
    width: calc(100% - 350px);
    color: white;
    padding: 50px;
    font-weight: 200;
}
</style>
