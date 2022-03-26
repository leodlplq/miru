<template>
    <div class="news">
        <div class="news-image">
            <img :src="newsData.images.jpg.image_url" alt="anime news" />
            <div class="overlay">
                <span
                    >Article by
                    <span class="bold">{{
                        newsData.author_username
                    }}</span></span
                >
            </div>
        </div>
        <span class="news-title">
            {{ newsData.title }}
        </span>
        <span class="news-preview">{{ newsData.excerpt }}</span>

        <a :href="newsData.url" class="btn normal-btn" target="_blank"
            >Read this article</a
        >
    </div>
</template>

<script>
export default {
    name: "NewsCard",
    props: ["newsData"],
};
</script>

<style scoped>
.normal-btn {
    margin: 15px 0;
    align-self: baseline;
}

.news {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

.news-image {
    width: 100%;
    height: 230px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.news-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-image > .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0%;
    left: 0;
}

.overlay > span {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
}

.bold {
    font-weight: 700;
}

.news-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    display: block;
    margin: 15px 0;
}

.news-preview {
    font-weight: 300;
    font-size: 13px;
    line-height: 13px;
}
</style>
