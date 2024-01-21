const chalk = require("chalk");
module.exports = (_0x4fca9b, _0x56c194) => {
  switch (_0x56c194) {
    case 'warn':
      console.log(chalk.bold.hex('#FF00FF').bold("[ Error ] \xBB ") + _0x4fca9b);
      break;
    case 'error':
      console.log(chalk.bold.hex("#FF00FF").bold("[ Error ] \xBB") + _0x4fca9b);
      break;
    default:
      console.log(chalk.bold.hex('#FF0000').bold(_0x56c194 + " \xBB ") + _0x4fca9b);
      break;
  }
};
module.exports.loader = (_0x2697bc, _0x5b4185) => {
  switch (_0x5b4185) {
    case "warn":
      console.log(chalk.bold.hex("#ff334b").bold("[ 𝚂𝙷𝙰𝙾𝙽-𝙿𝚁𝙾𝙹𝙴𝙲𝚃 ] \xBB ") + _0x2697bc);
      break;
    case 'error':
      console.log(chalk.bold.hex("#b4ff33").bold("[ 𝚂𝙷𝙰𝙾𝙽-𝙿𝚁𝙾𝙹𝙴𝙲𝚃 ] \xBB ") + _0x2697bc);
      break;
    default:
      console.log(chalk.bold.hex('#33ffc9').bold("[ 𝚂𝙷𝙰𝙾𝙽-𝙿𝚁𝙾𝙹𝙴𝙲𝚃 ] \xBB ") + _0x2697bc);
      break;
  }
};
