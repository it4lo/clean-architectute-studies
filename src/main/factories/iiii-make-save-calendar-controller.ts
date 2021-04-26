import { Controller } from "@/stories/entities/calendar/usecases/save-calendar/presentation/iii-presentation-icontrol-saver-calendar";
import { DBSaveCalendar } from '@/stories/entities/calendar/usecases/save-calendar/infra/iii-infra-implement-repo-save-calendar'
import { SaveCalendarImplementation } from "@/stories/entities/calendar/usecases/save-calendar";
import { SaveCalendarController } from "@/stories/entities/calendar/usecases/save-calendar/presentation/iii-presentation-control-save-calendar";

export const makeSaveCalendarController = () : Controller => {
    const repository = new DBSaveCalendar();
    const useCase = new SaveCalendarImplementation(repository);
    return new SaveCalendarController(useCase);
}