const {Router}=require('express');
const { allProducts, createProducts } = require('../controllers/ProductosController');

const router=Router();

router.get('/',allProducts)
router.post('/',createProducts)

module.exports=router;