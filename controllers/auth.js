const repoAuth = require('../repositories/auth');
const { success } = require('../utils/http_res')

const library = {}
module.exports = library


library.register = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await repoAuth.register(username, password)
    const token = repoAuth.generateToken(user)
    return success(res, 201, token, 'User created')
  } catch (error) {
    next(error)
  }
}

library.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await repoAuth.login(username, password)
    const token = repoAuth.generateToken(user)
    return success(res, 200, { token }, 'Login success')
  } catch (error) {
    next(error)
  }
}


