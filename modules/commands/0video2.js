module.exports.config = {
  name: "video2",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  usePrefix: false,
  description: "See photo reply",
  commandCategory: "Utilities",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n1. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 💞 \n𝟚. 𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎 💕\n𝟛. 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 📽\n𝟜. 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎 \n𝟝. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎 📝\n6. 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 𝐕𝐈𝐃𝐄𝐎 📝\n7. 𝐒𝐇𝐀𝐈𝐑𝐈\n8. 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 😻\n9. 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 \n10. 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍 𝐅𝐎𝐑𝐈𝐃 𝐒𝐈𝐑 ❄\n𝟙1. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎 🤲\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟙2. 𝐒𝐄𝐗 𝐕𝐈𝐃𝐄𝐎😋\n𝟙3. 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎🥵\n𝟙4. 𝐇𝐎𝐓 🔞\n𝟙5. 𝐈𝐓𝐄𝐌🙈\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    const shaon = (await p.get(h)).data.shaon;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `${shaon} //API SHAON😍🥀\n\n𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔`,
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://video-api-5i3d.onrender.com/video/love";
        else if ("2" == a.body)
         var   h = "https://video-api-5i3d.onrender.com/video/cpl";
        else if ("3" == a.body)
         var   h = "https://video-api-5i3d.onrender.com/video/short";
        else if ("4" == a.body)
          var  h = "https://video-api-5i3d.onrender.com/video/sad";
          else if ("5" == a.body)
          var  h = "https://video-api-5i3d.onrender.com/video/status";
            else if ("6" == a.body)
              var  h = "https://video-api-5i3d.onrender.com/video/ff";
        else if ("7" == a.body)
          var  h = "https://video-api-5i3d.onrender.com/video/shairi";
        else if ("8" == a.body)
          var  h = "https://video-api-5i3d.onrender.com/video/baby";
        else if ("9" == a.body)
          var  h = "https://video-api-5i3d.onrender.com/video/anime";
        else if ("10" == a.body)
         var   h = "https://video-api-5i3d.onrender.com/video/humaiyun";
        else if ("11" == a.body)
         var  h = "https://video-api-5i3d.onrender.com/video/islam";
         else if ("12" == a.body)
         var  h = "https://video-api-5i3d.onrender.com/video/sex";
         else if ("13" == a.body)
         var  h = "https://video-api-5i3d.onrender.com/video/horny";
        else if ("14" == a.body)
         var  h = "https://video-api-5i3d.onrender.com/video/hot";
        else if ("15" == a.body)
         var  h = "https://video-api-5i3d.onrender.com/video/item";
        return { p, h };
    }
};