<template>
    <header id="main" class="flex -v-center">
        
        <div class="flex -column">
            <div v-on:click="start()"><a>Start Building</a></div>
            <div>
                <a href="https://github.com/ZHHHuaZhang/Girlfriend-Builder">Source Code</a>
            </div>
        </div>
    </header>
</template>
<!--  -->
<script>
var ex = {
    name: "index",
    methods: {
        start() {
        }
    }
};
module.exports = ex;
</script>
<!--  -->
<style>
#main {
    opacity: 0;
    display: flex;
    height: 100vh;
}
#main a {
    color: #fff;
    font-size: 5vw;
    line-height: 90%;
}
#main>div:last-child {
    border-left: 2vw solid #fff;

    padding-left: 1.5vw;
    align-self: center;
}
#main>div>div:first-child {
    margin-bottom: 5vw;
}

@media screen and (max-width:500px) {
    #main a {
        color: #fff;
        font-size: 6vw;
    }
    #main>div:last-child {
        margin-top: -5vh;
        border-left: 3vw solid #fff;
        padding-left: 2vw;
    }
}
</style>