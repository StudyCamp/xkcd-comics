const fetch = require('node-fetch');

// Fetch specific comics
async function loadComics(comicId) {
    apiUrl = 'https://xkcd.com';
    comicId = comicId ? '/' + comicId : ''
    apiUrlFormat = 'info.0.json';
    requestUrl = `${apiUrl}${comicId}/${apiUrlFormat}`;

    let fetched_data;
    await fetch(requestUrl)
    .then(res => res.json())
    .then(data => fetched_data = data)
    return fetched_data;
}

module.exports = loadComics;