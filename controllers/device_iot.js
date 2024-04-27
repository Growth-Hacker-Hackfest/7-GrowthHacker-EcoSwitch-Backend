const deviceIOTRepo = require('../repositories/device_iot');
const { success } = require('../utils/http_res');
const transactionUtil = require('../utils/transaction');

const library = {}
module.exports = library

library.findAll = async (req, res, next) => {
  try {
    const user_id = req.user.id
    const devices = await deviceIOTRepo.findAll({
      user_id
    })
    return success(res, 200, devices, 'Devices retrieved')
  } catch (error) {
    next(error)
  }
}

library.create = async (req, res, next) => {
  try {
    req.body.user_id = req.user.id
    const device = await deviceIOTRepo.create({
      body: req.body
    })
    return success(res, 201, device, 'Device created')
  } catch (error) {
    next(error)
  }
}

library.findById = async (req, res, next) => {
  try {
    const device = await deviceIOTRepo.findById(req.params.id)
    return success(res, 200, device, 'Device retrieved')
  } catch (error) {
    next(error)
  }
}

library.ubahStatus = async (req, res, next) => {
  let transaction;
  try {
    transaction = await transactionUtil.Create()
    const { id, status } = req.query;
    const result = await deviceIOTRepo.ubahStatus(id, status, transaction.data)
    await transactionUtil.Commit(transaction.data)
    return success(res, 200, result, 'Device status updated')
  } catch (error) {
    if (transaction) await transactionUtil.Rollback(transaction.data)
    next(error)
  }
}
