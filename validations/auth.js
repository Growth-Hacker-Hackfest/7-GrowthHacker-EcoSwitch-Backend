const { body, header, param } = require('express-validator');

const library = {}
module.exports = library

library.register = function () {
  return [
    body('username')
      .exists().withMessage('username is required')
      .isLength({ min: 8 }).withMessage('username must be at least 8 chars long'),
    body('password')
      .exists().withMessage('password is required')
      .isLength({ min: 8 }).withMessage('password must be at least 8 chars long'),
  ]
}

library.login = function () {
  return [
    body('username')
      .exists().withMessage('username is required')
      .isLength({ min: 8 }).withMessage('username must be at least 8 chars long'),
    body('password')
      .exists().withMessage('password is required')
      .isLength({ min: 8 }).withMessage('password must be at least 8 chars long'),
  ]
}
