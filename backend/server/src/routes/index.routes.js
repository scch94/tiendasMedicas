const { Router } = require('express');

const productosRoutes=require('./Productos.routes')

const router=Router();

router.use('/productos',productosRoutes);

module.exports=router;