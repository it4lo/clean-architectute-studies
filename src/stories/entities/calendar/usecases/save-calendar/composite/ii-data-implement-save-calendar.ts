import { ISaveCalendar } from "..";
import { ISaveCalendarRepository } from "..";

//** A implementação do caso de uso deve ser a parte protegida das mudanças externas */
//** Ela implementa as regras de negócios dos casos de uso de acordo com o contrato estabelecido no caso de uso */

export class SaveCalendarImplementation implements ISaveCalendar{
    
    constructor(private readonly saveCalendarRepository: ISaveCalendarRepository){}
    
    async exec (calendar: ISaveCalendar.Params): Promise<ISaveCalendar.Params> {
        return this.saveCalendarRepository.save(calendar);
    }
}