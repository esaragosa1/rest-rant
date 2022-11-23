const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    
   res.render('places/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

module.exports = router
