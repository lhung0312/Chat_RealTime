var format = require("date-format");
const createdAt = (topic) => {
  return {
    topic,
    createdAt: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };
};
module.exports = createdAt;
