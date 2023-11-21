"use strict";
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

// netlify/functions/addScore.ts
var addScore_exports = {};
__export(addScore_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(addScore_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var handler = async (event, context) => {
  if (event.body) {
    const newScore = JSON.parse(event.body);
    await prisma.player_scores.create({
      data: {
        player_id: BigInt(newScore.playerId),
        score: parseInt(newScore.score)
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify(newScore)
    };
  }
  return {
    statusCode: 500
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=addScore.js.map
