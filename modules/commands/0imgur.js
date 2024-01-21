module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  var imgur = require('imgur-upload-api'),
  path = require('path');
  const myClientID = 'Client-ID cd40decacd7a45a'
  imgur.setClientID(myClientID);

  imgur.upload(linkanh, function (err,res) {
    const link = res.data.link;
    const type = res.data.type;

    console.log(res);
    var msg = [];
    {
        msg += `"${link}",`
    }
    return api.sendMessage({
        body: msg

    }, event.threadID, event.messageID);
  });

}