const router = require('express').Router();
const moment = require('moment');

const db = require('../../models');

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

router.post('/categories/:category', (req, res) => {
  console.log(req.body);
  db.Categories.create({
    name: req.params.category,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false });
    });
});

// inventory
router.get('/inventory', (req, res) => {
  db.Inventory.findAll({})
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

router.get('/orderitems', (req, res) => {
  db.OrderItems.findAll({})
    .then((orderItems) => {
      res.status(200).json(orderItems);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});

router.get('/getorderid', (req, res) => {
  db.Orders.findAll({})
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      res.status(400).json({ message: 'there was an error' });
      console.error(err);
    });
});

router.post('/postorder', (req, res) => {
  db.Orders.create({
    date: moment().format('MM-DD-YYYY'), // TODO get extension for current date and time
    time: moment().format('hh:mm:ss'),
    total: req.body.total,
    customer: req.body.customer,
    payment_method: req.body.payment_method,
    locationId: req.body.locationId,
  })
    .then((response) => {
      // send back orderId as response
      res.status(200).json({ response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/postitemorder', (req, res) => {
  console.log(req.body.price);
  db.OrderItems.create({
    orderId: req.body.orderId,
    inventoryId: req.body.inventoryId,
    itemName: req.body.name,
    numberOfItem: req.body.numberOfItem,
    price: req.body.price,
  })
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.error(err);
    });
});

router.post('/postorderlocation', (req, res) => {
  db.OrderLocations.create({
    orderId: req.body.orderId,
    locationId: req.body.locationId,
    total: req.body.total,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

// random comment
module.exports = router;
