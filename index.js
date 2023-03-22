import cowsay from "cowsay";
import userInfo from "./information.js";
//const userInfo = require('./information');
console.log(cowsay.say({
    text : `hello, i'm ${userInfo.longName} and i travel ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));
