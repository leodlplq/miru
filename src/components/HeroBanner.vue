<template>
    <div class="hero-banner">
        <div class="banner-background">
            <img src="https://cdn.myanimelist.net/images/anime/1276/97039l.webp" alt="">
            <div class="overlay"></div>
        </div>
        <div class="banner-infos">
            <img class="banner-img" src="https://cdn.myanimelist.net/images/anime/1276/97039l.webp" alt="">
            <div class="banner-right">
                <div class="top">
                    
                    <div class="banner-title-container">
                        <h1 class="banner-title">Devil Hunter Yohko</h1>
                        <span class="banner-title-jap">魔物ハンター妖子</span>
                    </div>
                    <h1 class="banner-rating">8.5/10 <img src="@/assets/icons/star.png"/></h1>
                </div>
                
                <p class="banner-synopsis">Yohko Mono is a regular girl making her way through high school--until she learns that she is the 108th successor to a line of warriors charged with defending the earth against demons. Eventually she must fight her ultimate battle against the demon who started it all. (Source: ANN)</p>
                <a href="#" class="btn">see more</a>
            </div>
        </div>
    </div>
</template>


<!-- to test https://api.jikan.moe/v4/anime/1280 -->
<script>
export default {
    name: "HeroBanner",

}
</script>

<style scoped>

    .btn{
        background: #307351;
        color: #fff;
        padding: 10px 50px;
        align-self: flex-end;
        justify-self: flex-end;
        text-decoration: none;
        border-radius: 5px;
    }
    .hero-banner{
        width: 100%;
        height: 400px;
        position: relative;
        border-radius:10px ;
        overflow: hidden;
    }

    .banner-background{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        left: 0px;
    }

    .banner-background > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .banner-background > .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.7);
    }

    .banner-infos{
        position: absolute;
        bottom: 30px;
        left: 30px;
        width: calc(100% - 60px);
        display: flex;

    }

    .banner-infos > .banner-img{
        height: 200px;
        border-radius: 4px;
        align-self: flex-end;
    }

    .banner-right{
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        justify-content: space-between;

    }

    .top{
        width: 100%;
        display: flex;
        justify-content: space-between; 
    }

    .banner-title-container{
        display: flex;
        flex-direction: column;
    }

    .banner-title{
        font-size: 36px;
        margin: 0;
    }

    .banner-rating{
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
</style>
