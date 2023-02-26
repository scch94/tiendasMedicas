const {Router}=require('express');
const { deleteProducts,allProducts, createProducts,updateProducts,findIdProduct } = require('../controllers/ProductosController');

const router=Router();

router.get('/',allProducts)
router.get('/:id',findIdProduct)
router.post('/',createProducts)
router.put('/:id',updateProducts)
router.put('/desactivar/:id',deleteProducts)
module.exports=router;