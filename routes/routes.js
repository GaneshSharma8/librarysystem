const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books.controller');
const memberController = require('../controllers/members.controller');
const validate = require('../validations/validation');

router.get('/books', bookController.getAllBooks);
router.post('/addBook', validate.bookValidate, bookController.addBook);
router.get('/members', memberController.getAllMembers);
router.post('/addMember', validate.memberValidate, memberController.addMember);

module.exports = router;