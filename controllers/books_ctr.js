const router = require('express').Router;
const db = require('../models');

// Routes
router.get('/', async (req, res) => {
    let foundBooks = await db.Book.find()
    try {
        res.json(foundBooks)
    } catch (error) {
        res.status(404).json('404')
    }
})

router.get('/:id', async (req, res) => {
    let foundBook = await db.Book.findById(req.params.id)
    try {
        res.json(foundBook)
    } catch (error) {
        res.status(404).json('404')
    }
})

router.put('/:id', async (req, res) => {
    let updatedBook = await db.Book.findByIdAndUpdate(req.params.id, req.body)
    try {
        res.json(updatedBook)
    } catch (error) {
        res.status(404).json('404')
    }
})

// Export the router
module.exports = router;