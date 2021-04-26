import { ISaveCalendarRepository } from "../composite/ii-domain-contract-repo-save-calendar";

export class DBSaveCalendar implements ISaveCalendarRepository{
    async save(calendar: ISaveCalendarRepository.Params): Promise<ISaveCalendarRepository.Params> {
        console.log(`repositorio: ${calendar}`)
        return calendar;
    }
}