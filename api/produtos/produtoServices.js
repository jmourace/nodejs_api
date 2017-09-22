const express = require('express')
const multer = require('multer')

// API Routes
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now()
        cb(null, file.filename + '_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
})

const upload = multer({
    storage: storage
}).single('file')

router.route('/upload').post(function (req, res, next) {
    console.log(req.body)
    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, error_desc: err })
            return
        }
        res.json({ error_code: 0, error_desc: null })
    })
})

module.exports = router

