const cowsay = require("cowsay");
const userInfo = require('./information');
console.log(cowsay.say({
    text : `hello, i'm ${userInfo.longName} and i leave ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));
