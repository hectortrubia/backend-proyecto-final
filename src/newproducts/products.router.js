import express from "express";
import { productCtrl, productsCtrl } from "./products.controller.js";
const router = express.Router();
router.route('/products') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(productCtrl)
    .get(productsCtrl)
    export default router;