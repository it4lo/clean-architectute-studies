import { Controller } from "@/stories/entities/calendar/usecases/save-calendar/presentation/iii-presentation-icontrol-saver-calendar";
import { Request, Response } from "express";

export const adaptExpress = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle(req.body);
        res.status(httpResponse.statusCode).json(httpResponse.data);
    }
}