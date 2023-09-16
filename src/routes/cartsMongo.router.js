import { Router } from "express";
import cartsController from "../controllers/carts.controller.js"

const router = Router();


router.post('/', cartsController.createCart)
router.get('/:cid', cartsController.getCartsByID)
router.post('/:cid/product/:pid',cartsController.agregarProductCart)
router.delete('/:cid/products/:pid', cartsController.eliminarProductCart)
router.put('/:cid',cartsController.ModificarTodosProductCart)
router.put('/:cid/products/:pid',cartsController.ModificarQuantityProduct)
router.delete('/:cid', cartsController.EliminarTodosProductCart)
router.post('/:cid/purchase',cartsController.FinalizarCompra)

export default router;