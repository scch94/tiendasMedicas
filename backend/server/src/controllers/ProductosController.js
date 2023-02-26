const {Producto}=require('../db');

//trae todos los productos
const allProducts=async (req,res)=>{
    try{
        let productos= await Producto.findAll();
        console.log(productos.length)
        if(productos.length>0){
            return res.status(201).json({status:"success",productos});
        }else{
            return res.status(404).json({status:"error",msj:"No existen productos en la base de datos"})
        }
    }catch(e){
        res.status(404).json({message: "error, no se ha podido traer la lista de productos",e});
    }
}
//traer producto por id
const findIdProduct= async (req,res)=>{
    let {id}=req.params
    try{
        let producto = await Producto.findByPk(id);
        if(!producto){
            return res.status(404).json({message:`el id ${id} no existe en la base de datos`})
        }
        res.status(201).json({status:"success",producto})
    }catch(e){
        res.status(404).json("Producto no encontrado");
    }
}

//creas un producto
const createProducts=async (req,res)=>{
    let{nombre,talla,color,img,marca,genero,stock,precio}=req.body
    if(!nombre,!talla,!color,!img,!marca,!genero,!stock,!precio){
        return res.status(404).send("la informacion del producto esta incompleta");
    }
    try{
        const newProduct=await Producto.create(req.body) 
        return res.status(201).send({message:"Producto creado",newProduct})
    }catch(e){
        res.status(404).json({message: "error, no se ha podido crear el libro",e,});
    }
}
// actualizar producto
const updateProducts=async(req,res)=>{
    const {id}=req.params;
    let datos=req.body; 
    try{
        let productos= await Producto.findAll();
        let productoActualizado= await Producto.update(datos,{where:{id}});
        console.log(productoActualizado);
        res.status(200).json({ message: "Producto Actualizado", productoActualizado });
    }catch(e){
        res.status(404).json({message:"no se a podido actualizar el libro", e})
    }
}
// eleminar producto
const deleteProducts=async(req,res)=>{
    const {id}=req.params;
    try{
        let producto = await Producto.findByPk(id);
        if(!producto){
            return res.status(404).json({message:`producto con id ${id} no identificado`})
        }
        let productoActualizado= await Producto.update({ estado:"desactivado" }, { where: {id} })
        res.status(202).json({message:`el producto con id ${id} fue actualizado correctamente`,productoActualizado})
    }catch(e){
        console.log(e)
        res.status(404).json({message:'el producto no pudo ser acutalizado vuelvelo a intentar',e})
    }   
}

module.exports={
    allProducts,
    createProducts,
    updateProducts,
    findIdProduct,
    deleteProducts
}