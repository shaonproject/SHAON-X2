module.exports.config = {
  'name': "about",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': " \u300E\uD835\uDC12\uD835\uDC21\uD835\uDC1A\uD835\uDC28\uD835\uDC27 \uD835\uDC00\uD835\uDC21\uD835\uDC26\uD835\uDC1E\uD835\uDC1D\uD83D\uDDA4\uD83C\uDF38\u300F",
  'description': "Bot Info and admin",
  'commandCategory': "other",
  'usages': '',
  'cooldowns': 0x5
};
module.exports.run = async ({
  api: _0x36cec7,
  event: _0x51ed24,
  args: _0x262b4d,
  client: _0x3a688b,
  Users: _0x529639,
  Threads: _0x5ab321,
  __GLOBAL: _0xace1a0,
  Currencies: _0x4a7f64
}) => {
  const _0xedcfe9 = global.nodemodule.request;
  const _0x4758bb = global.nodemodule["fs-extra"];
  const _0x26c5f3 = require("moment-timezone");
  const _0x209f0a = _0x26c5f3.tz("Asia/Dhaka").format("LLLL");
  var _0x57f913 = () => _0x36cec7.sendMessage({
    'body': "\n\u2014\u2014\u2014\xBB\uD835\uDC00\uD835\uDC03\uD835\uDC0C\uD835\uDC08\uD835\uDC0D \uD835\uDC01\uD835\uDC0E\uD835\uDC13\xAB\u2014\u2014\u2014 \n\uD835\uDC03\uD835\uDC0E \uD835\uDC0D\uD835\uDC0E\uD835\uDC13 \uD835\uDC02\uD835\uDC07\uD835\uDC00\uD835\uDC0D\uD835\uDC06\uD835\uDC11 \uD835\uDC00\uD835\uDC0D\uD835\uDC18\uD835\uDC13\uD835\uDC07\uD835\uDC08\uD835\uDC0D\uD835\uDC06 \uD835\uDC00\uD835\uDC0D\uD835\uDC03 \uD835\uDC12\uD835\uDC13\uD835\uDC00\uD835\uDC18 \uD835\uDC07\uD835\uDC00\uD835\uDC0F\uD835\uDC0F\uD835\uDC18 \n\u276F \uD835\uDC01\uD835\uDC28\uD835\uDC2D \uD835\uDC0D\uD835\uDC1A\uD835\uDC26\uD835\uDC1E\u261E\uFE0E\uFE0E\uFE0E " + global.config.BOTNAME + "\n\u276F \uD835\uDC01\uD835\uDC28\uD835\uDC2D \uD835\uDC0E\uD835\uDC30\uD835\uDC27\uD835\uDC1E\uD835\uDC2B\u261E\uFE0E\uFE0E\uFE0E " + global.config.OWNER + "\n\u276F \uD835\uDC00\uD835\uDC20\uD835\uDC1E\u261E\uFE0E\uFE0E\uFE0E " + global.config.AGE + " \n\u276F \uD835\uDC06\uD835\uDC1E\uD835\uDC27\uD835\uDC1D\uD835\uDC1E\uD835\uDC2B\u261E\uFE0E\uFE0E\uFE0E " + global.config.GENDER + "\n\u276F \uD835\uDC05\uD835\uDC1A\uD835\uDC1C\uD835\uDC1E\uD835\uDC1B\uD835\uDC28\uD835\uDC28\uD835\uDC24\u261E\uFE0E\uFE0E\uFE0E " + global.config.FACEBOOK + "\n\u276F \uD835\uDC01\uD835\uDC28\uD835\uDC2D \uD835\uDC0F\uD835\uDC2B\uD835\uDC1E\uD835\uDC1F\uD835\uDC22\uD835\uDC31\u261E\uFE0E\uFE0E\uFE0E " + global.config.PREFIX + "\n\u276F \uD835\uDC13\uD835\uDC28\uD835\uDC1D\uD835\uDC1A\uD835\uDC32 \uD835\uDC22\uD835\uDC2C\u261E\uFE0E\uFE0E\uFE0E " + _0x209f0a + "\n\u276F \uD835\uDC13\uD835\uDC21\uD835\uDC1A\uD835\uDC27\uD835\uDC24\uD835\uDC2C \uD835\uDC1F\uD835\uDC28\uD835\uDC2B \uD835\uDC2E\uD835\uDC2C\uD835\uDC22\uD835\uDC27\uD835\uDC20 " + global.config.BOTNAME + " \uD835\uDC01\uD835\uDC28\uD835\uDC2D\n  ",
    'attachment': _0x4758bb.createReadStream(__dirname + "/cache/1.png")
  }, _0x51ed24.threadID, () => {
    _0x4758bb.unlinkSync(__dirname + "/cache/1.png");
  }, _0x51ed24.messageID);
  return _0xedcfe9(encodeURI("https://graph.facebook.com/" + global.config.ADMINBOT[0x0] + '/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662')).pipe(_0x4758bb.createWriteStream(__dirname + "/cache/1.png")).on("close", () => _0x57f913());
};