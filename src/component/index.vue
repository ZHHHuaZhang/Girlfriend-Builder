<template>
    <main id="main" class="flex -center">
        <div class="flex -column">
            <div v-on:click="start"><a href="./pages/main.html">Start Building</a></div>
            <div v-on:click="sourceCheck">
                <a href="https://github.com/ZHHHuaZhang/Girlfriend-Builder">Source Code</a>
            </div>
        </div>
    </main>
</template>
<!--  -->
<script>
var ex = {
    name: "index",
    methods: {
        start() {

        },
        sourceCheck() {

        }
    }
};
module.exports = ex;
</script>
<!--  -->
<style>
#main {
    opacity: 0;
    padding-top: 35vh;
}
#main a {
    color: #fff;
    font-size: 5vw;
    line-height: 90%;
}
#main>div {
    border-left: 2vw solid #fff;
    padding-left: 1.5vw;
}
#main>div>div:first-child {
    margin-bottom: 5vw;
}

@media screen and (max-width:500px) {
    #main a {
        color: #fff;
        font-size: 6vw;
    }
    #main>div {
        border-left: 3vw solid #fff;
        padding-left: 2vw;
    }
}
</style>