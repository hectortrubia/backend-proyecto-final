import { createProduct,retrieveProducts } from "./products.model.js";
export const productCtrl = async(req,res)=> {
    try{
        const products = {
            ...req.body
        }
        await createProduct(products)
        res.status(201).json(products)
    }catch(err){
        console.error('error:', err)
    }
}
export const productsCtrl  = async(req, res) => {
    // este controlador debe consultar los productos
    const products = await retrieveProducts();
    res.json(products);
};