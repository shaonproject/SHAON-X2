const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini, mod by NCQB và Magus",
    description: "",
    commandCategory: "admin",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atUtilitiesm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("❰hh:mm:ss A❱ ⟬DD/MM/YYYY⟭");
const hours = moment.tz("Asia/Dhaka").format("HH");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `====== [ 𝗨𝗦𝗘𝗥 𝗥𝗘𝗣𝗟𝗬 ] ======\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗥𝗘𝗣𝗟𝗬』 : ${body}\n\n--------------\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘 ${name} \n𝗙𝗥𝗢𝗠 𝗚𝗥𝗢𝗨𝗣 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `====== [ 𝗨𝗦𝗘𝗥 𝗥𝗘𝗣𝗟𝗬 ] ======\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗥𝗘𝗣𝗟𝗬』 : ${body}\n\n--------------\n𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: ${name} \n𝗙𝗥𝗢𝗠 𝗚𝗥𝗢𝗨𝗣 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `==== [ 𝗠𝗔𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡 ] ====\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗠𝗘𝗦𝗦𝗔𝗚𝗘』 : ${body}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${name}\n--------------\nReply to this Message if you want to respond to this Announce`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}==== [ 𝗠𝗔𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡 ] ====\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${name}\n--------------\nReply to this Message if you want to respond to this Announce.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("❰hh:mm:ss A❱ ⟬DD/MM/YYYY⟭");
const hours = moment.tz("Asia/Dhaka").format("HH");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `====== [ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡 ] ======\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗠𝗘𝗦𝗦𝗔𝗚𝗘』 : ${args.join(" ")}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${await Users.getNameUser(senderID)} \n--------------\nReply to this Message if you want to respond to this Announce`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `====== [ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡 ] ======\n--------------\n『𝗧𝗜𝗠𝗘』: ${gio}\n\n--------------\n『𝗠𝗘𝗦𝗦𝗔𝗚𝗘』 : ${args.join(" ")}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${await Users.getNameUser(senderID)}\n--------------\nReply to this Message if you want to respond to this Announce`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}