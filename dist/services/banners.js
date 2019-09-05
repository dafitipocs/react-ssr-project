"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBannersData = getBannersData;

var _graphql = require("./graphql");

function getBannersData() {
  try {
    var payload = (0, _graphql.graphQLService)({
      query: 'banner (state: "SP") ',
      props: ["id"],
      endPoint: "api/banners"
    });
    return payload;
  } catch (err) {
    console.log(JSON.stringify(err.response.data));
  }
}