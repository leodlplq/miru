<template>
    <svg viewBox="0 0 24 24" :class="className">
        <path
            d="M15.5 15.5L19 19"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
export default {
    name: "IconDelete",
    props: ["classGrey"],
    computed: {
        className: function () {
            return this.classGrey ? "icon" : "icon-search";
        },
    },
};
</script>

<style scoped>
.icon {
    stroke: #656565;
    stroke-width: 2.5;
    width: 30px;
    fill: transparent;
}

.icon-search {
    stroke: #fff;
    stroke-width: 2.5;
    width: 30px;
    fill: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
