const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//Creates a new User
router.post('/createuser', async (req, res) => {
    const user = new User(req.body)
    console.log(user)
    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

//Logs in the User
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
    else {
        res.status(201)
    }
})

module.exports = router