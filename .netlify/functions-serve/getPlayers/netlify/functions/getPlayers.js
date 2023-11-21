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

// netlify/functions/getPlayers.ts
var getPlayers_exports = {};
__export(getPlayers_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(getPlayers_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var handler = async (_event, _context) => {
  const allPlayers = await prisma.players.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify(
      allPlayers,
      (_key, value) => (
        // need to add a custom serializer because CockroachDB IDs map to
        // JavaScript BigInts, which JSON.stringify has trouble serializing.
        typeof value === "bigint" ? value.toString() : value
      )
    )
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=getPlayers.js.map
