const {
  DeviceIoT,
  LogIots,
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

library.ubahStatus = async (id, status, transaction = null) => {
  const data = await DeviceIoT.update({
    is_on: status
  }, {
    where: {
      id
    },
    transaction
  })

  let statusLog = 'mati'

  if (status){
    statusLog = 'nyala'
  } else {
    statusLog = 'mati'
  }

  const log = await LogIots.create({
    device_id: id,
    status: statusLog,
    transaction
  })

  return {
    ...data,
    log,
  }
}
