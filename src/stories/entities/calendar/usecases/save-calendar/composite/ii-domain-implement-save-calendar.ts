import { ISaveCalendar } from "..";
import { ISaveCalendarRepository } from "..";

//** A implementação do caso de uso deve ser a parte protegida das mudanças externas é onde está a regra de negócio*/

export class SaveCalendarImplementation implements ISaveCalendar{
    constructor(private readonly saveCalendarRepository: ISaveCalendarRepository){}
    async exec (calendar: ISaveCalendar.Params): Promise<ISaveCalendar.Params> {
        // Verificar a existência de conflito de datas 
        // Validação de campos
        // Envio de emails
        console.log(`usecase: ${calendar}`)
        return this.saveCalendarRepository.save(calendar);
    }
}