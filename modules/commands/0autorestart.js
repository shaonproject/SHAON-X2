module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shaon Ahmed ",
    description: "AUTO RESTART",
    commandCategory: "System",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Dhaka").format("hh:mm:ss");
  var idad = global.config.ADMINBOT;    
  console.log(timeNow)
  var seconds = moment.tz("Asia/Dhaka").format("ss");
  var timeRestart_1 = `12:30:${seconds}`
  var timeRestart_2 = `12:00:${seconds}`
  var timeRestart_3 = `11:30:${seconds}`
  var timeRestart_4 = `11:00:${seconds}`
  var timeRestart_5 = `10:30:${seconds}`
  var timeRestart_6 = `10:00:${seconds}`
  var timeRestart_7 = `09:30:${seconds}`
  var timeRestart_8 = `09:00:${seconds}`
  var timeRestart_9 = `08:30:${seconds}`
  var timeRestart_10 = `08:00:${seconds}`
  var timeRestart_11 = `07:30:${seconds}`
  var timeRestart_12 = `07:00:${seconds}`
  var timeRestart_13 = `06:30:${seconds}`
  var timeRestart_14 = `06:00:${seconds}`
  var timeRestart_15 = `05:30:${seconds}`
  var timeRestart_16 = `04:30:${seconds}`
  var timeRestart_17 = `04:00:${seconds}`
  var timeRestart_18 = `03:30:${seconds}`
  var timeRestart_19 = `03:00:${seconds}`
  var timeRestart_20 = `02:30:${seconds}`
  var timeRestart_21 = `02:00:${seconds}`
  var timeRestart_22 = `01:30:${seconds}`
  var timeRestart_23 = `01:00:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3|| timeNow == timeRestart_4|| timeNow == timeRestart_5|| timeNow == timeRestart_6 || timeNow == timeRestart_7|| timeNow == timeRestart_8|| timeNow == timeRestart_9|| timeNow== timeRestart_10|| timeNow== timeRestart_11|| timeNow == timeRestart_12 || timeNow == timeRestart_13 || timeNow == timeRestart_14 || timeNow == timeRestart_15 || timeNow == timeRestart_16 || timeNow == timeRestart_17 || timeNow == timeRestart_18 || timeNow == timeRestart_19 || timeNow == timeRestart_20 || timeNow == timeRestart_21 || timeNow == timeRestart_22 || timeNow == timeRestart_23) && seconds < 6 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`⚡️Now it's: ${timeNow}\nBaby will restart!!!`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Dhaka").format("hh:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}