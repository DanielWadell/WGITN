const express = require('express')
const Post = require('../models/posts')
const router = new express.Router()

router.post('/createpost', async (req, res) => {
    const post = new Post(req.body)

    try {
        await post.save()
        res.status(201).send({ post })
    } catch (e) {
        res.status(400).send(e)
    }
})