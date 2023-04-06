const HTML_CODES = {
  NOT_FOUND: 404,
  CONFLICT: 409,
};

export default function getStatusCode(param) {
  return HTML_CODES[param];
}
