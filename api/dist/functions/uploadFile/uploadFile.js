var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var uploadFile_exports = {};
__export(uploadFile_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(uploadFile_exports);
var import_auth = require("../../lib/auth");
var import_logger = require("../../lib/logger");
const handler = async (event, context) => {
  import_logger.logger.info(`${event.httpMethod} ${event.path}: uploadFile function`);
  const {
    user
  } = await (0, import_auth.authApi)(event, context);
  console.log("user ->", user);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      time: (/* @__PURE__ */ new Date()).toDateString()
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=uploadFile.js.map
