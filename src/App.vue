<template>
    <main>
        <Menu />
        <Main />
    </main>
</template>

<script>
import Menu from "@/components/Menu";
import Main from "@/components/Main";

export default {
    name: "App",
    components: {
        Menu,
        Main,
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
}
</style>
