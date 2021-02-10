const express = require('express');

const {
  checkID,
  getAllProducts,
  getProduct,
} = require('../controllers/categoriesAudioController');

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/product/:id').get(checkID, getProduct);

module.exports = router;