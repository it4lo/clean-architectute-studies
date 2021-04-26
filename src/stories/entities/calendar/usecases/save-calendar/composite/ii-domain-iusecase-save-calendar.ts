import { Calendar } from "@/stories/entities/calendar";


//Port I/O: I 
export  interface ISaveCalendar {
    exec: (calendar: Calendar) => Promise<Calendar>
}

export namespace ISaveCalendar {
    export type Params = Calendar
}