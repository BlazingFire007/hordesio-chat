console.clear();
const io = require("socket.io-client");
const chalk = require("chalk");
let socket = io.connect("https://hordes.io:443");
socket.on("c", log);


function log({n, m, c, i, r}) {
    let message = '';
    if (c) c += " ";
    else c = '';
    if (r === "1") c = chalk.red(c);
    else c = chalk.blueBright(c);
    if (i === "gm") m = chalk.bgBlue(m);
    message += `[${c}${n}]: ${m}`;
    console.log(message);
}