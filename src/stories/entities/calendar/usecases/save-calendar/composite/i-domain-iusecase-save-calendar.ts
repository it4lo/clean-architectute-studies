import { Calendar } from "@/stories/entities";

export  interface ISaveCalendar {
    exec: (calendar: Calendar) => Promise<Calendar>
}

export namespace ISaveCalendar {
    export type Params = Calendar
}