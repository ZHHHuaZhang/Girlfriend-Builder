var refType = "[true]";
var ex = {
    errorInfo(strs, color = "#f00", maxLength = 10, defaultTag="p") {
        let errorPrint = document.getElementById("error");
        errorPrint.style.color = color;
        try {
        	if(typeof strs !== "object") throw Error("arg must array");
            for (let i = 0; i < errorPrint.children.length && errorPrint.children.length > maxLength; i++) {
                errorPrint.removeChild(errorPrint.children[0]);
            }
            for (let i = 0; i < strs.length; i++) {
                let p = document.createElement(defaultTag);
                strs[i] = typeof strs[i] === "object" ? JSON.stringify(strs[i]) : strs[i].toString();
                p.appendChild(document.createTextNode(strs[i]));
                errorPrint.appendChild(p);
            }
        }
        catch(e){
        	console.error(e);
        }
    },
    data() {
        return {
            text: "something",
            refType
        }
    },
    changed: false
}
/*var print = setInterval((event) => {
    ex.errorInfo(["extend: " + ex.extend]);
    ex.changed = true;
    if(ex.extend){
    	clearInterval(print);
    }
}, 300);*/

module.exports = ex;