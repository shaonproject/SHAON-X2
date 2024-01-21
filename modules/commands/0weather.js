module.exports.config = {

    name: 'autott',

    version: '10.02',

    hasPermssion: 0,

    credits: 'Shaon Ahmed', // Bok idea weather

    description: 'Automatically send messages at the set time!',

    commandCategory: 'NOT AN ORDER',

    usages: '[]',

    cooldowns: 3

};

const nam = [{

    timer: '10:00:00 AM',

    message: ['\n{abc}']

},

    {



    timer: '8:00:00 AM',

    message: ['\n{abc}']

},

             {

    timer: '6:00:00 AM',

    message: ['\n{abc}']

},

    {

      timer: '12:00:00 PM',

    message: ['\n{abc}']

},

             {

    timer: '10:00:00 PM',

    message: ['\n{abc}']

},

             {

    timer: '8:00:00 PM',

    message: ['\n{abc}']

},

             {

    timer: '6:00:00 PM',

    message: ['\n{abc}']

},

             {

    timer: '4:00:00 PM',

    message: ['\n{abc}']

},

    {

    timer: '2:00:00 PM',

    message: ['\n{abc}']

},

    {

    timer: '12:10:00 PM',

    message: ['\n{abc}']

},

             {

    }];

module.exports.onLoad = o => setInterval(async() => {

    const r = a => a[Math.floor(Math.random()*a.length)];

    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){

  const axios = require('axios');

const time = process.uptime();

var hours = Math.floor(time / (60 * 60));

var minutes = Math.floor((time % (60 * 60)) / 60);

var seconds = Math.floor(time % 60);

  var msg = r(á.message);

  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Dhaka')}`);

    var abc =`===「Weather」===\n━━━━━━━━━━━━━━\n→『📌』Weather updates at: ${res.data[0].location.name}\n→『⏰』At: ${res.data[0].current.day} ${res.data[0].current.date}\n→『🌡️』Temprature: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n→『📋』Degreetyp: ${res.data[0].current.skytext}\n→『☁️』Sky: ${res.data[0].current.humidity}\n→『💨』Humidity: ${res.data[0].current.winddisplay}\n→『📥』Wind: ${res.data[0].current.observationtime} Observation Time 🚀 BD`;

    msg = msg.replace(/{abc}/,abc);

msg = msg.replace(/{hours}/g, hours)

  msg = msg.replace(/{minutes}/g, minutes)

  msg = msg.replace(/{seconds}/g, seconds)

    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Dhaka").format("hh:mm:ss A (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://video-api-5i3d.onrender.com/text`)).data.data)

            msg = {

                body: msg, attachment: (await axios.get((await axios.get(`https://video-api-5i3d.onrender.com/video/status`)).data.data, {

                    responseType: 'stream'

                })).data

            };

   global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));

    };

}, 1000);



module.exports.run = async o => {

  try{

  const axios = global.nodemodule["axios"];

  const fs = global.nodemodule["fs-extra"];

  const request = global.nodemodule["request"];

  const { api, event, args } = o;

const { threadID, messageID } = event;

  var bok = args.join(" ");

  if(!bok) return api.sendMessage("Enter the province/city to see the weather", threadID);

  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);

  const bokk = res.data[0].forecast;

  var text = `Weather of: ${bok} in the days`;

  for (let i = 0; i < 5; i++) {

    text += `\n${i+1}-> ${bokk[i].day} ${bokk[i].date}\n=>Forecast temperature: from ${bokk[i].low} đến ${bokk[i].high}\n=>Describe: ${bokk[i].skytextday}\n=>Rain rate: ${bokk[i].precip}\n`

  };

  api.sendMessage(text, threadID, messageID)

  }catch(err){api.sendMessage(`${err}`, threadID)}

}