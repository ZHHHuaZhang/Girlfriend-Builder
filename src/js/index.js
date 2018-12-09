var Vue = require("../../node_modules/vue/dist/vue.js");
var cMain = require("../component/main.vue");
var errorHandle = require("./errorHandle.js");
var VueRouter = require("../../node_modules/vue-router/dist/vue-router.js");
var errorInfo = errorHandle.errorInfo;
var http = require("http");
var reqConfig = require("./req.config.js");
var canvasDraw = require("./canvas.js");
//import cIndex1 from "../component/index.vue";
Vue.use(VueRouter);
//console.warn(VueRouter);
//console.log(cIndex);
//console.log(cIndex1);
//console.warn(cMain);

try {

    var mainBody = new Vue({
        components: {
            cMain: cMain.default
        },
        template: `<cMain/>`
    }).$mount("app-main");


    let fakeDisplay = document.getElementById("fake-display");
    let sourceIcon = document.getElementById("source-icon");
    let builder = document.getElementById("builder");
    setTimeout(() => {
        fakeDisplay.style.position = "fixed";
        fakeDisplay.style.width = "100vw";
        fakeDisplay.style.height = "100vh";
        fakeDisplay.style.top = "0";
        sourceIcon.style.opacity = "0";
        builder.style.display = "block";
        sourceIcon.style.position = "fixed";
        sourceIcon.style.top = "8vw";
        sourceIcon.style.right = "6vw";
        sourceIcon.style.opacity = "0.7";
    }, 500);
    setTimeout(() => {
        sourceIcon.style.color = "#49f";
        builder.style.opacity = "1";
    }, 800)

    var ten = function(value) {
        let l = value.toString(16).length
        return l === 1 ? "0" + value.toString(16) : value.toString(16);
    }

    let r = 255 - Math.round(Math.random() * 255);
    let g = 255 - Math.round(Math.random() * 255);
    let b = 255 - Math.round(Math.random() * 255);

    let s = "0xff";
    let n = Math.round(255/2);
    //console.warn(parseInt(parseInt(s).toString(10)) + 1);
    console.warn(n.toString(16));
    // let curHairColor = "0x" + ten(r) + ten(g) + ten(b);
    // let l = parseInt(curHairColor).toString(16);
    // console.warn(curHairColor);
    // console.warn(l.length===5?"0"+l:l);

} catch (e) {
    errorInfo([e.stack]);
}