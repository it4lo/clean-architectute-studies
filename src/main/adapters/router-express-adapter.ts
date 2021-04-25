import { Controller } from "@/presentation-layer/contracts";

import { Request, Response } from "express";

export const adaptExpress = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle();
        res.status(httpResponse.statusCode).json(httpResponse.data);
    }
}