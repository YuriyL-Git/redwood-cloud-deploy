var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var nodemailer_exports = {};
__export(nodemailer_exports, {
  sendMail: () => sendMail
});
module.exports = __toCommonJS(nodemailer_exports);
var import_nodemailer = __toESM(require("nodemailer"));
async function sendMail({
  receivers,
  from,
  subject,
  htmlBody
}) {
  const transporter = import_nodemailer.default.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_ADDRESS,
      clientId: process.env.GOOGLE_CLIENT_ID_MAIL,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_MAIL,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN
    }
  });
  await transporter.sendMail({
    from: `"${from}" ${process.env.GMAIL_ADDRESS}`,
    to: receivers.join(","),
    subject,
    html: htmlBody
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendMail
});
//# sourceMappingURL=nodemailer.js.map
