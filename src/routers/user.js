const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//Creating a new User
router.post('/createuser', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).sned(e)
    }
})

//Loggin in a User
router.post('/loginuser', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.user_name, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Logs out the User
router.get('/logoutuser', async (req, res) => {
    if (req.session) {

        req.session.destroy((err) => {
            if(err) {
                return next(err)
            } else {
                return res.redirect('/')
            }
        })
    }
})

module.exports = router