/* eslint-disable comma-dangle */
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

router.get('/currentlocation', (req, res) => {
  db.Locations.findOne({ where: { active: true } })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ error: err, succes: false });
    });
});

router.post('/postorder', (req, res) => {
  console.log(req.body);
  console.log('over and out');
  db.Orders.create({
    date: moment().format('MM-DD-YYYY'), // TODO get extension for current date and time
    time: moment().format('hh:mm:ss'),
    total: req.body.orderTotal,
    customer: req.body.orderCustomer,
    payment_method: req.body.paymentType,
    locationId: req.body.orderLocationId,
  })
    .then((response) => {
      // send back orderId as response
      res.status(200).json(response);
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

router.get('/activelocations', (req, res) => {
  console.log('wassup?');
  db.Locations.findAll({ where: { active: true } })
    .then((response) => {
      console.log('hello world');
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ succes: false });
      console.error(err);
    });
});

router.post('/locations', (req, res) => {
  db.Locations.update({ active: false }, { where: { active: true } }).then(
    () => {
      db.Locations.create({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        nickname: req.body.nickname,
        active: req.body.active,
      })
        .then((response) => {
          res.status(200).json({ reply: response, success: true });
        })
        .catch((err) => {
          res.status(400).json({ success: false });
          console.error(err);
        });
    }
  );
});

router.put('/locations/:id', (req, res) => {
  db.Locations.update({ active: false }, { where: { active: true } }).then(
    () => {
      db.Locations.update({ active: true }, { where: { id: req.params.id } })
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((err) => {
          res.status(400).json({ success: false });
          console.error(err);
        });
    }
  );
});

router.put('/resetpin', (req, res) => {
  db.Locations.update({ active: false }, { where: { active: true } })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ success: false });
    });
});

router.get('locations', (req, res) => {
  console.log('reset');
  db.Locations.findAll({})
    .then((response) => {
      console.log(response);
      res.status(200).json({ reply: response, success: true });
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .json({ error: err, message: 'this did not work', success: false });
    });
});

router.get('/sales', (req, res) => {
  db.Orders.findAll({})
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ success: false });
    });
});

// random comment
module.exports = router;
