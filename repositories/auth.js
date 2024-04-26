const {
  User
} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const library = {}
module.exports = library

library.register = async ({
  body = {},
  transaction = null
}) => {
  const user = await User.create({
    ...body
  }, {
    transaction
  })
  return user
}

library.login = async ({
  body
}) => {
  const user = await User.findOne({
    where: {
      email: body.email
    }
  })
  if (!user) {
    throw new Error('User not found')
  }
  const isValid = await bcrypt.compare(body.password, user.password)
  if (!isValid) {
    throw new Error('Password is not valid')
  }
  delete user.dataValues.password
  return user
}

library.generateToken = (user) => {
  const token = jwt.sign({
    id: user.id
  }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
  return token
}

library.verifyToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  return decoded
}
