import { ISaveCalendar } from "./ii-domain-iusecase-save-calendar"
//Port I/O: O
export interface ISaveCalendarRepository {
    save: (calendar: ISaveCalendar.Params) => Promise<ISaveCalendar.Params>
}

export namespace ISaveCalendarRepository {
    export type Params = ISaveCalendar.Params;
}