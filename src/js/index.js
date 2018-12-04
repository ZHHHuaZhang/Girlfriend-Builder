var Vue = require("../../node_modules/vue/dist/vue.js");
var cIndex = require("../component/index.vue");
var cFooter = require("../component/footer.vue");
var errorHandle = require("./errorHandle.js");
var errorInfo = errorHandle.errorInfo;
var http = require("http");
var reqConfig = require("./req.config.js");
var canvasDraw = require("./canvas.js");
//import cIndex1 from "../component/index.vue";

//console.log(cIndex);
//console.log(cIndex1);
try {
    var mainBody = new Vue({
        el: "app-main",
        data: {
        },
        components: {
            cIndex: cIndex.default
        },
        template: "<cIndex/>"
    });
    setTimeout(()=>{
        mainBody.$el.style.opacity = 0.7;
    },500);
    //throw Error("new Error");

    var footer = new Vue({
        el: "app-footer",
        components: {
            cFooter: cFooter.default
        },
        template: "<cFooter/>"
    })
}
catch(e){
	errorInfo([e.stack]);
}