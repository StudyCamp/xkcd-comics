const express = require('express')
const loadComics = require('../public/api')
const router = express.Router()

// Random comic
randomizedComicRoute = () => `/id/${Math.floor(Math.random() * 2473) + 1}`;

// Homepage - random comic
router.get("/", (req, res) =>{ res.redirect(`${randomizedComicRoute()}`) });

// Search for comic by ID
router.post("/search", (req,res) => {
    const comicId = req.body.comicId;
    res.redirect(`/id/${comicId}`)
})
// Get the comic by ID, randomize if ID is out of range/invalid
router.get("/id/:comicId", async (req, res) =>{ 
    const id = req.params.comicId;
    if (id > 2473 || id < 1 || isNaN(id)) res.redirect(`${randomizedComicRoute()}`);
    data = await loadComics(id);
    res.render("home", { comic: data })
})

module.exports = router