const router = require('express').Router();
const db = require('../models');

// Seed data
router.get('/seed', (req, res) => {
    db.Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// Routes
router.get('/', async (req, res) => {
    let foundBooks = await db.Book.find()
    try {
        res.json(foundBooks)
    } catch (error) {
        res.status(404).json({
            message: '404'
        })
    }
})

router.get('/:id', async (req, res) => {
    let foundBook = await db.Book.findById(req.params.id)
    try {
        res.json(foundBook)
    } catch (error) {
        res.status(404).json({
            message: '404'
        })
    }
})

router.put('/:id', async (req, res) => {
    let updatedBook = await db.Book.findByIdAndUpdate(req.params.id, req.body)
    try {
        res.json(updatedBook)
    } catch (error) {
        res.status(404).json({
            message: '404'
        })
    }
})

router.delete('/:id', async (req, res) => {
    let deletedBook = await db.Book.findByIdAndDelete(req.params.id)
    try {
        res.json('Delete was successful')
    } catch (error) {
        res.status(404).json({
            message: '404'
        })
    }
})

router.post('/', async (req, res) => {
    let newBook = await db.Book.create(req.body);
    try {
        res.json(newBook)
    } catch (error) {
        res.status(404).json({
            message: '404'
        })
    }
})

// Export the router
module.exports = router;