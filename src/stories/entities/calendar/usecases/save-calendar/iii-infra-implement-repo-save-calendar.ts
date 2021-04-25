import { ISaveCalendarRepository } from "./composite/ii-data-icontract-repo-save-calendar";

export class DBMongoRepo implements ISaveCalendarRepository{
    async save(calendar: ISaveCalendarRepository.Params): Promise<ISaveCalendarRepository.Params> {
        return calendar;
    }
}