import { ISaveCalendar } from "../composite/ii-domain-iusecase-save-calendar";
import { HttpResponse, ok, serverError } from "./http";
import { Controller } from "./iii-presentation-icontrol-saver-calendar";

export class SaveCalendarController implements Controller {
    
    constructor(private readonly saveCalendar: ISaveCalendar) {}

    async handle(request: SaveCalendarControl.Request): Promise<HttpResponse> {
        const calendar =  await this.saveCalendar.exec(request)
        return ok(calendar);
    }
}

export namespace SaveCalendarControl {
    export type Request = ISaveCalendar.Params
}