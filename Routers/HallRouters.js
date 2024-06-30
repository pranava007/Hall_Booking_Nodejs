import express from "express";
import { AddCustomer, Cus_many_Booked, CustomerData, FliterCustomer, FliterHallBook, createHall, getDetailsHall } from "../Controllers/HallController.js";


const router = express.Router()

router.get('/HallDatils',getDetailsHall)
router.post('/createHall',createHall)
router.get('/CustomerDetails',CustomerData)
router.post('/AddCustomer',AddCustomer)
router.get('/filterBookedhall',FliterHallBook)
router.get('/fliterCustomer',FliterCustomer)
router.get('/Cus_many_Booked',Cus_many_Booked)

export default router;