function createMetadata(packagePath) {
  const {
    author,
    description,
    match,
    name,
    repository,
    version,
  } = require(packagePath);

  const updateURL = new URL(`master/${name}/dist/${name}.user.js`, repository.url);
  updateURL.host = "raw.githubusercontent.com";

  return {
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
}

module.exports = {createMetadata};
