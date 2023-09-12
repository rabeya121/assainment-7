const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');


router.get('/blogs', blogController.read);
router.get('/comments', commentController.read);
router.get('/messages', messageController.read);
router.get('/portfolios', portfolioController.read);
router.get('/products', productController.read);


router.get("/create",blogController.create);
router.get("/read",blogController.read);
router.get("/delete",blogController.delete);
router.get("/update",blogController.update);

router.get("/create",commentController.create);
router.get("/read",commentController.read);
router.get("/delete",commentController.delete);
router.get("/update",commentController.update);

router.get("/create",messageController.create);
router.get("/read",messageController.read);
router.get("/delete",messageController.delete);
router.get("/update",messageController.update);

router.get("/create",portfolioController.create);
router.get("/read",portfolioController.read);
router.get("/delete",portfolioController.delete);
router.get("/update",portfolioController.update);

router.get("/create",productController.create);
router.get("/read",productController.read);
router.get("/delete",productController.delete);
router.get("/update",productController.update);


module.exports = router;
