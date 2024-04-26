const {
  User
} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const library = {}
module.exports = library

library.register = async (username, password) => {
  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    password: hash,
    role: 'admin'
  })
  return user
}

library.login = async (username, password) => {
  const user = await User.findOne({
    where: {
      username
    }
  })
  if (!user) {
    throw new Error('User not found')
  }
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    throw new Error('Password is not valid')
  }
  return user
}

library.generateToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    role: user.role
  }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
  return token
}

library.verifyToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  return decoded
}
