const express = require('express');
const router = express.Router();
const validate = require('../utils/validate');
const deviceIotController = require('../controllers/device_iot');
const deviceIotValidation = require('../validations/device_iot');

router.get('/', deviceIotValidation.findAll(), validate, deviceIotController.findAll);
router.post('/', deviceIotValidation.create(), validate, deviceIotController.create);
router.get('/:id', deviceIotValidation.findByID(), validate, deviceIotController.findById);
router.put('/status', deviceIotValidation.ubahStatus(), validate, deviceIotController.ubahStatus);

const routeProps = {
  route: router,
  needAuth: true
}

module.exports = routeProps;

