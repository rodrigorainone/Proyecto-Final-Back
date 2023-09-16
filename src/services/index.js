import PersistenceFactory from "../dao/Factory.js"
import usersRepository from "./Repositories/usersRepository.js"
import cartsRepository from "./Repositories/cartsRepository.js"
import productsRepository from "./Repositories/productsRepository.js";
import ticketsRepository from "./Repositories/ticketRepository.js"



const { usersDAO, productDAO , cartDAO,ticketDAO } = await PersistenceFactory.getPersistence();


export const userService = new usersRepository (usersDAO);
export const cartService = new cartsRepository(cartDAO);
export const productService = new productsRepository (productDAO);
export const ticketService = new ticketsRepository(ticketDAO);