const {
  DeviceIoT
} = require('../models');

const library = {}
module.exports = library

library.create = async ({
  body = {},
  transaction = null
}) => {
  const deviceIoTCreated = await DeviceIoT.create(body, {
    transaction
  })
  return deviceIoTCreated
}

library.findAll = async (params, transaction = null) => {
  const where = {}
  if (params.user_id) {
    where.user_id = params.user_id
  }
  return await DeviceIoT.findAll({
    where,
    transaction,
    order: [
      ['created_at', 'DESC']
    ]
  })
}

library.findById = async (id, transaction = null) => {
  return await DeviceIoT.findByPk(id, {
    transaction
  })
}
