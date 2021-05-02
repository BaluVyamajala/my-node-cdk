var uuid = require("uuid-random");

exports.handler = async function (event, context) {
  return uuid();
};
