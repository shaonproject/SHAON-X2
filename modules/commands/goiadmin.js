module.exports.config = {

  name: "goiadmin",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "fixed Shaon Ahmed",

  description: "Bot will reply tag admin ",

  commandCategory: "Other",

  usages: "",

  cooldowns: 1

};

module.exports.handleEvent = function({ api, event }) {

  if (event.senderID !== "100090879572769") {

    var aid = ["100090879572769"];

    for (const id of aid) {

    if ( Object.keys(event.mentions) == id) {

      var msg = ["শাওন বস এখন বিজি আছে","বললাম না শাওন বস এখন বিজি আছে তাও কেন মেনশন দিস"];

      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);

    }

    }}

};

module.exports.run = async function({}) {

        }