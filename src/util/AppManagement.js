var request = require('request-promise-native'),
  DataURI = require('datauri'),
  url_parser = require('url').parse,
  path = require('path');

var authToken = "mfa.kxf6MkFGdNNddtrzGcZXG45CI6iOkbJE57xrm5bqCpJZajCw8IQfYeYVgSnRBZbqNF_SIbX2UcN8PokENTzN"

async function imageDataFromUrl(url) {

  const datauri = new DataURI();

  return new Promise((resolve, reject) => {

    request.get(url, {
      encoding: null
    })
    .then((buffer) => {
      let parsed = url_parser(url),
        filename = path.basename(parsed.pathname);

      datauri.format(filename, buffer);
      resolve(datauri.content);
    })
    .catch(reject);
  })
}

async function getAssetList() {
  return request.get(`https://discordapp.com/api/oauth2/applications/528700837417975808/assets`, {
    headers: {
      authorization: authToken
    },
    json: true
  });
}


function deleteAsset(id) {
  return request.delete(`https://discordapp.com/api/oauth2/applications/528700837417975808/assets/${id}`, {
    headers: {
      authorization: authToken
    }
  })
}

async function changeName(name) {
  return request.patch(`https://discordapp.com/api/oauth2/applications/528700837417975808`, {
    headers: {
      authorization: authToken
    },
    json: true,
    body: {
      name: name,
      description: "",
      icon: ""
    }
  })
}

async function uploadAsset(type, key, imageData) {
  return request.post(`https://discordapp.com/api/oauth2/applications/528700837417975808/assets`, {
    headers: {
      authorization: authToken
    },
    json: true,
    body: {
      name: key,
      type: type,
      image: imageData
    }
  })
}

module.exports.imageDataFromUrl = imageDataFromUrl
module.exports.getAssetList = getAssetList
module.exports.deleteAsset = deleteAsset
module.exports.changeName = changeName
module.exports.uploadAsset = uploadAsset