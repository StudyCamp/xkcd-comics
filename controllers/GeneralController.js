const express = require('express')
const loadComics = require('../public/api')
const router = express.Router()

    
// Get max comic
async function maxComic() {
    const currentComic = await loadComics()
    return currentComic
};

// Random comic
async function randomizedComicRoute() {
    const max = await maxComic();
    return `/id/${Math.floor(Math.random() * max.num) + 1}`
};

// Homepage - random comic
router.get("/", async (req, res) =>{ res.redirect(`${await randomizedComicRoute()}`) });

// Search for comic by ID
router.post("/search", (req,res) => {
    const comicId = req.body.comicId;
    res.redirect(`/id/${comicId}`)
})
// Get the comic by ID, randomize if ID is out of range/invalid
router.get("/id/:comicId", async (req, res) =>{ 
    const id = req.params.comicId
    const max = await maxComic();
    if (id > max.num || id < 1 || isNaN(id)) res.redirect(`${await randomizedComicRoute()}`);
    data = await loadComics(id);
    res.render("home", { comic: data })
})

module.exports = router