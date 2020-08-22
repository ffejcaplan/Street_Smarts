const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('Talk is cheap. Show me the code. -Linus Torvalds');
});

// categories
router.get('/categories', (req, res) => {
  db.Categories.findAll({})
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});

// inventory
router.get('/categories', (req, res) => {
  db.Invetory.findAll({})
    .then((inventory) => {
      res.json(inventory);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});

// orders
router.get('/orders', (req, res) => {
  db.Orders.findAll({})
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});
// ordersbylocation
router.get('/bylocation', (req, res) => {
  db.orderLocation
    .findAll({})
    .then((bylocation) => {
      res.json(bylocation);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});
// location
router.get('/locations', (req, res) => {
  db.Locations.findAll({})
    .then((locations) => {
      res.json(locations);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});
// random comment
module.exports = router;
