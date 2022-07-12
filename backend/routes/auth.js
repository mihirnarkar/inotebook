const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    obj = {
        name1 : 'Mihir',
        number : 19
    }
    res.json(obj)
})

module.exports = router