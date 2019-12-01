const {
  burgers: {
      getBurgers,
      addBurger,
      eatBurger,
      removeBurger
  }
} = require('../controllers')
module.exports = app => {
  //Get All Burgers
  app.get('/burgers', (req,res) => {
      getBurgers(burgers => {
          res.json(burgers)
      })
  })

  //POST one burger
  app.post('/burgers', (req,res) => {
      addBurger(req.body.name, req.body.eaten, () => {
          res.sendStatus(200)
      })
  })

  //PUT one burger - Update whether it's been eaten yet
  app.put('/burgers/:id', (req,res) => {
      eatBurger(parseInt(req.params.id), () => {
          res.sendStatus(200)
      })
  })

  //DELETE one pizza
  app.delete('/burgers/:id', (req,res) => {
      removeBurger(parseInt(req.params.id), () => {
          res.sendStatus(200)
      })
  })

}