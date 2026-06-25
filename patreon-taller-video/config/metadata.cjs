const {
  author,
  description,
  match,
  name,
  repository,
  version,
} = require("../package.json");

const updateURL = new URL(`master/${name}/dist/${name}.user.js`, repository.url);
updateURL.host = "raw.githubusercontent.com";

module.exports = {
  name,
  namespace: author.website,
  description,
  version: version,
  author: author,
  source: repository.url,
  updateURL: updateURL.toString(),
  downloadURL: updateURL.toString(),
  match: match,
  "run-at": "document-end",
};
