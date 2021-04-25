import { ISaveCalendar } from "./i-domain-iusecase-save-calendar"

export interface ISaveCalendarRepository {
    save: (calendar: ISaveCalendar.Params) => Promise<ISaveCalendar.Params>
}

export namespace ISaveCalendarRepository {
    export type Params = ISaveCalendar.Params;
}