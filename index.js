const me = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello i'm ${me.name} from the ${me.campus} campus`,
    e : "oO",
    T : "U "
}));
