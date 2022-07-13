const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { body, validationResult } = require('express-validator')


// Create a user using: POST "/api/auth/"
router.post('/',[
    body('name',"Minimum length of name should be 3").isLength({ min: 3 }),
    body('email',"Enter valid email/unique email").isEmail(),
    body('password',"Minimum length of password should be 3").isLength({ min: 3 }),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body)
})

module.exports = router