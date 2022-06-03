const router = require('express').Router();
const Property = require('../models/property');


router.post('/addproperty', async(req, res) => {
  console.log(req.body);
  const { property, mobile, area } = req.body;

  try {
    let pro = new Property ({
      property: property,
      mobile: mobile,
      area: area
    });

    await pro.save();
    res.status(201).send();

  } catch(e) {
    res.status(500).send('Something went wrong, Try again later.')
  }
})

router.get('/addedproperty', async(req, res) => {
  try {
    let property = await Property.find();
    res.send(property);
    // res.json(post);
  } catch(e) {
    console.log(e)
  }
});

module.exports = router;