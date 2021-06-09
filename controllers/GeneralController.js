const express = require('express')
const loadComics = require('../public/api')
const router = express.Router()

randomizedComicRoute = () => `/id/${Math.floor(Math.random() * 2473) + 1}`;

router.get("/", (req, res) =>{ res.redirect(`${randomizedComicRoute()}`) });

router.get("/id/:comicId", async (req, res) =>{ 
    const id = req.params.comicId;
    if (id > 2473 || id < 1) res.redirect(`${randomizedComicRoute()}`);
    data = await loadComics(id);
    res.render("home", { comic: data })
})


module.exports = router