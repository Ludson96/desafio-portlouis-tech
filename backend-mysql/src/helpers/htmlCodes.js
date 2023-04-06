const HTML_CODES = {
  NOT_FOUND: 404,
  CONFLICT: 409,
};

module.exports = (param) => HTML_CODES[param];
