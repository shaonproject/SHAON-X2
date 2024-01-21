/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "crush",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Shari VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sari",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["CRUSH GIRL VIDEO//API SHAON🥵🙈"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://drive.google.com/uc?id=1BI0uCpfN-tZ-QQ3SldvrB3LzENc4s5ev",
    "https://drive.google.com/uc?id=1BGEloVWObOTr2kKyGCkcKST6YMk7PTjl",
    "https://drive.google.com/uc?id=1B08W6z19BOmOo7qjR6NcihnW_mZ0k-ZR",
    "https://drive.google.com/uc?id=1BZosbhP3LVCObTcfd3I4Zsiqxr23l_Eo",
    "https://drive.google.com/uc?id=1BSinzdiEcdOhe0A4jsDazBBLM_PHEeC3",
    "https://drive.google.com/uc?id=1BNrTpfIHOw29dSJ9VTgWCkudfDh7AK6P",
    "https://drive.google.com/uc?id=1BjY-_P6gJAsb4QGLjlm3BRClYnkeC4bT",
    "https://drive.google.com/uc?id=1Be3TcV7SQwjLQLqOVIYpQufHgeKXWGul",
    "https://drive.google.com/uc?id=1AuCv_pLKsvLV-mOUzN420fcA-kQj15Fg",
    "https://drive.google.com/uc?id=1B2quRz7kYyE53AB-XJ8x6DNmJek0dsR1",
    "https://i.imgur.com/pUOPuKf.mp4",
"https://i.imgur.com/pRNyjYD.mp4",
"https://i.imgur.com/XNQw8cn.mp4",
"https://i.imgur.com/2KsDdU4.mp4",
"https://i.imgur.com/ennaKUA.mp4",
"https://i.imgur.com/8vPmqUR.mp4",
"https://i.imgur.com/GNK65ri.mp4",
"https://i.imgur.com/ClrTRJw.mp4",
"https://i.imgur.com/xqsVEeN.mp4",
"https://i.imgur.com/IBhrNeD.mp4",
"https://i.imgur.com/bAWVhqp.mp4",
"https://i.imgur.com/gdItVd7.mp4",
"https://i.imgur.com/7bBtthV.mp4",
"https://i.imgur.com/onk8KSx.mp4",
"https://i.imgur.com/fYkr2Hs.mp4",
"https://i.imgur.com/u7j9AQ8.mp4",
"https://i.imgur.com/JWSpzMC.mp4",
"https://i.imgur.com/Ir75YbV.mp4",
"https://i.imgur.com/y3kNkLi.mp4",
"https://i.imgur.com/OC6q2MG.mp4",
"https://i.imgur.com/3Ed9bF2.mp4",
"https://i.imgur.com/HKRCx2A.mp4",
"https://i.imgur.com/onUb64n.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };