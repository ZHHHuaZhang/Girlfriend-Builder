<template>
    <main id="builder">
        <header class="flex-row -v-center">
            <h1>老婆生成器</h1>
            <p><a href="https://github.com/ZHHHuaZhang/Girlfriend-Builder">讨论</a></p>
        </header>
        <hr class="titleHR">
        <div class="side flex-row -between">
            <div>
                <img :src="dynamic.bg0">
            </div>
            <div>
                <img :src="dynamic.bg1">
            </div>
        </div>
        <main class="flex-row flex-center" id="display">
            <ul class="flex-column">
                <div v-for="item in dynamic.lists">
                    <li class="flex-v-center">
                        <div class="imgContainer">
                            <img :src="item.img">
                        </div>
                        <label>{{item.key}}</label>
                        <hr class="pointer">
                        <label :style="{marginRight: item.labelMarginRight}">{{item.value}}</label>
                        <label v-if="item.colorSpot" :style="{backgroundColor: item.value, color: item.textColor}" class="colorSpot"></label>
                    </li>
                    <hr class="devide">
                </div>
            </ul>
            <!-- <div class="side"> -->
            </div>
        </main>
        <footer class="button flex-row -between -v-center">
            <div class="flex-v-center" @click="randomOn" :class="{stopClick: dynamic.stopClick}" :style="{width: dynamic.bigger, height: dynamic.bigger}"><span>生成</span></div>
            <span><span class="count">你的第{{dynamic.count}}个老婆</span></span>
            <div class="flex-v-center" @click="reset" :class="{stopClick: dynamic.stopClick}" :style="{width: dynamic.smaller, height: dynamic.smaller}"><span :style="{fontSize: dynamic.smallerFont}">清除</span></div>
        </footer>
    </main>
</template>
<!--  -->
<script>
var Vue = require("../../node_modules/vue/dist/vue.min.js");
var dynamic = {
    lists: [
        { img: "./src/res/身高.png", key: "身高", value: "180" },
        { img: "./src/res/体重.png", key: "体重", value: "60" },
        { img: "./src/res/cup.png", key: "cup", value: "A" },
        { img: "./src/res/肤色.png", key: "肤色", value: "正常" },
        { img: "./src/res/发型.png", key: "发型", value: "包子头" },
        { img: "./src/res/发色.png", key: "发色", value: "#bb781a" },
        { img: "./src/res/瞳色.png", key: "瞳色", value: "#bb781a" },
        { img: "./src/res/属性.png", key: "属性", value: "贵族" },
        { img: "./src/res/性格.png", key: "性格", value: "中二" },
    ],
    count: 0,
    bg0: "./src/res/背景1.png",
    bg1: "./src/res/背景2.png",
    stopClick: false
}
var constValue = [];
var fixTextColor = function(value) {
    let textColor = "#";
    for (let i = 0; i < 3; i++) {
        let temp = parseInt(parseInt("0x" + value[i]).toString(10));
        temp = 255 - temp;
        temp = temp.toString(16);
        textColor += (temp.length === 1 ? "0" + temp : temp);
    }
    return textColor;
}
fixTextColor.prototype.finalHandle = function(item) {
    if (item.key === "发色" || item.key === "瞳色") {
        let tempArr = [item.value.substr(1, 2), item.value.substr(3, 2), item.value.substr(5, 2)];
        item.textColor = fixTextColor(tempArr);
    } else {
        item.textColor = "#3f3f3f";
    }
}
dynamic.lists.forEach(function(item, index) {
    constValue.push(item.value);
    if (item.key === "发色" || item.key === "瞳色") {
        item.colorSpot = true;
    } else {
        item.colorSpot = false;
        item.labelMarginRight = "5vw";
    }
})
var cups = ["1/2A", "A", "B", "C", "D", "E", "F", "G", "?"];
var faceColors = ["正常", "棕褐", "纯白", "少女粉","黑妹"];
var hairs = ["包子头", "双马尾", "高马尾", "长马尾", "黑长直", "团子","姬发式",];
var properties = ["贵族", "异世界", "JK", "LOLI", "幼女", "御姐", "阿库娅", "学生会长","老师", "不良","碧池","破鞋","优等生",'AI',"阿凡达","战术人形","猫娘",'龙化娘',];
var characters = ["中二", "傲娇", "人妻", "呆萌", "高冷", "腹黑", "毒舌", "阿库娅","抖S","抖M","女王","百合","病娇" ];
var randomArr = function(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
};
var fixColor = function(value) {
    let colorStr = "#";
    for (let i = 0; i < 3; i++) {
        let temp = parseInt("0x" + simpleDemicalToHex(simpleRandom())).toString(16);
        colorStr += temp.length === 1 ? "0" + temp : temp;
    }
    return colorStr;
}
var simpleDemicalToHex = function(value) {
    let l = value.toString(16).length;
    return l === 1 ? "0" + value.toString(16) : value.toString(16);
}
var simpleRandom = function(start = 0, final = 255) {
    return (final - Math.round(Math.random() * (final - start)));
}
var randomSet = function() {
    let flag = simpleRandom(5,0);
    // console.warn(flag);

    let height = simpleRandom(180, 120);
    // let weight = simpleRandom(70, 30);
    let weight = 0;
    if(flag){
        weight = Math.round((height/100*(height/100))*19);
    }
    else{
        weight = Math.round((height/100*(height/100))*24);
    }
    // console.warn("c  " + height);
    // console.warn(weight);
    let cup = randomArr(cups);
    let faceColor = randomArr(faceColors);
    let hair = randomArr(hairs);
    let hairColor = fixColor();
    let eyeColor = fixColor();
    let property = randomArr(properties);
    let character = randomArr(characters);
    return [
        height,
        weight,
        cup,
        faceColor,
        hair,
        hairColor,
        eyeColor,
        property,
        character
    ]
}

//events
var randomOn = function(event) {
    let flag = 0;
    const totalTime = 1500;
    const times = 30;
    dynamic.stopClick = true;
    dynamic.bigger = "12vw";
    //dynamic.smallerFont = "1vw";
    //dynamic.smaller = "7vw";
    //console.warn("ss");
    let timer = setInterval(() => {
        var temp = randomSet();
        dynamic.lists.forEach(function(item, index) {
            // if(index===0){
            //     console.warn(flag + "/" + temp[index]);
            // }
            //console.warn(temp);
            item.value = temp[index];
            //fixTextColor.prototype.finalHandle(item);
        });
        if (++flag === times) {
            dynamic.count++;
            clearInterval(timer);
            dynamic.stopClick = false;
            dynamic.bigger = "";
            dynamic.smaller = "";
            dynamic.smallerFont = "";
        }
    }, totalTime / times);
};

var reset = function() {
    dynamic.lists.forEach(function(item, index) {
        item.value = constValue[index];
    });
    dynamic.count = 0;
};

//export object
var ex = {
    data() {
        return {
            dynamic
        }
    },
    methods: {
        randomOn,
        reset
    }
}
export default ex;
</script>
<!--  -->
<style>
img {
    width: 100%;
}
#builder header p {
    position: fixed;
    color: #66f;
    font-size: 3vw;
    opacity: 0.5;
    margin: 0;
    top: 15vw;
    right: 6.6vw;
}
#builder header h1 {
    font-size: 8vw;
    align-self: center;
    margin: 0;
    padding: 10px;
    padding-top: 20px;
    opacity: 0.9;
    margin-bottom: 3vw;
}
#builder {
    opacity: 0;
    display: none;
    box-sizing: border-box;
    padding: 1% 4% 1% 4%;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 1;
    font-weight: bold;
}
#builder ul {
    padding: 1.2vh 5vw 1.2vh 5vw;
    margin: 0;
    margin-top: 0.8vh;
    width: 90%;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
    background-color: inherit;
    /*opacity: 0.8;*/
    /*box-shadow: -3px 0px #9f9f9f;*/

}
#builder ul *{
    opacity: 0.95;
}
#builder ul li {
    height: 5.2vh;
}
#builder label {
    width: 20%;
    font-size: 3.5vw;
    font-weight: normal;
}
#builder div:first-child>li>.imgContainer>img {
    width: 60%;
}
#builder .imgContainer {
    width: 8%;
    margin-right: 4%;
}
#builder .pointer {
    height: 2px;
    border: 0;
    width: 10%;
    color: #3f3f3f;
    background-color: #3f3f3f;
    opacity: 0;
}
#builder .devide {
    height: 2px;
    border: 0;
    width: 100%;
    background-color: #3f3f3f;
    opacity: 0.2;
}
#builder .fix {
    position: fixed;
    height: 100%;
    z-index: -1;
    width: 100vw;
    right: 0;
    left: 0;
}
#builder .fix>img:first-child {
    width: 30%;
    margin-left: -12vw;
}
#builder .fix>img:last-child {
    width: 30%;
    margin-right: -18vw;
    margin-top: -12vw;
}
#builder .titileHR {
    width: 100%;
    height: 20px;
    background-color: #3f3f3f;
    border: 0;
}
#builder .button>span {
    color: #3f3f3f;
    opacity: 0.8;
}
#display ul{
    /*opacity: 0.8;*/
    background-color: #ffffffaa;
}
#display ul div{
    background-color: #fff;
}
#builder .button .count {
    font-size: 3vw;
    opacity: 0.8;
}
.stopClick {
    pointer-events: none;
}
#builder .colorSpot {
    width: 4vw;
    height: 4vw;
    margin-left: 4vw;
    box-shadow: 1px 1px 5px #3f3f3f;
}
#builder .side {
    position: fixed;
    height: 50vh;
    width: 100vw;
    top: 40vh;
    z-index: -1;
}
#builder .side div {
    width: 30%;
}
#builder .side div:last-child {
    margin-top: -6vh;
    margin-right: -12vw;
}
#builder .side div:first-child {
    margin-left: -16vw;
}

@media screen and (max-height: 638px) {
    #builder ul li {
        height: 4.8vh;
    }
}
</style>