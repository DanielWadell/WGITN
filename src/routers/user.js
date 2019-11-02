const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/createuser', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).sned(e)
    }
})

router.post('/loginuser', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.user_name, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router