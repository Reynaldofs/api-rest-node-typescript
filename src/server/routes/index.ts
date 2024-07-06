import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();


router.get('/',(_,res) => {

    return res.send('Olá, Dev');
});

router.post('/teste',(reg,res) => {
    console.log(reg.body);

    return res.status(StatusCodes.UNAUTHORIZED).json(reg.body);
});


export { router };