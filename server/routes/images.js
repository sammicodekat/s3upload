const express = require('express');
const router = express.Router();

const Image = require('../models/image');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })

router.post('/', upload.single('myfile'), (req, res) => {
  Image.upload(req.file).then(imageDoc => {
    res.send(imageDoc);
  }).catch(err => {
    res.status(400).send(err)
  });

})

router.get('/', (req, res) => {
  Image.find()
  .then((images) => { res.send(imagess) })
  .catch((err) => { res.status(400).send(err) })
})

module.exports = router;
