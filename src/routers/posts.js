const express = require('express')
const Post = require('../models/posts')
const router = new express.Router()

//Creates a new post
router.post('/createpost', async (req, res) => {

    const post = new Post(req.body)
    console.log(post)

    try {
        await post.save()
        res.status(201).send({ post })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/posts/safety', async (req, res) => {

    try {
        const posts = await Post.find({ "Post.tag": "safety" })
        res.status(201).send({ posts })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/posts/recreation', async (req, res) => {

    try {
        const posts = await Post.find({ "Post.tag": "recreation" })
        res.status(201).send({ posts })
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/posts/maintenance', async (req, res) => {

    try {
        const posts = await Post.find({ "Post.tag": "maintenance" })
        res.status(201).send({ posts })
    } catch (e) {
        res.status(400).send(e)
    }

})
module.exports = router