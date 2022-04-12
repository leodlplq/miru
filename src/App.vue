<template>
    <main>
        <Menu />
        <div class="view">
            <div class="inner-view">
                <router-view></router-view>
            </div>

            <Footer />
        </div>
    </main>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
    name: "App",
    components: {
        Menu,
        Footer,
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
    cursor: pointer;
}

select {
    padding: 10px;
    background: #307351;
    border: none;
    border-radius: 4px;
    outline: none;
}

option {
    padding: 0px;
    background: #307351;
}
.view {
    position: absolute;
    right: 0;
    width: calc(100% - 350px);
    color: white;
    font-weight: 200;
}

.inner-view {
    width: 100%;
    padding: 50px;
}
</style>
