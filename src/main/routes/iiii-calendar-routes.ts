import { makeSaveCalendarController } from "@/main/factories";
import { adaptExpress } from "../adapters";

import { Router } from "express";

export default (router: Router): void => {
    //router.post('/scheduling', adaptExpress(makeSaveCalendarController()))
    router.post('/scheduling', async (req, res) => {
            console.log(req.body);
            res.status(200).json(req.body);
        }
    )
}