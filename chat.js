console.clear();
const io = require("socket.io-client");
const chalk = require("chalk");
let socket = io.connect("https://hordes.io:443");
socket.on("c", log);


function log({n, m, c, i, r, f}) {
    let message = '';
    if (c) c += " ";
    else c = '';
    if (f === 1) c = chalk.redBright(c);
    else c = chalk.blueBright(c);
    if (i === "gm") m = chalk.bgBlue(m);
    message += `[${c}${n}]: ${m}`;
    if (r === 0) message = chalk.gray(message);
    console.log(message);
}