import { LastRankingLoader } from "@/domain-layer/usecases";
import { Controller, HttpResponse, serverError, ok } from "@/presentation-layer/contracts";
import { RankingScoreView } from "@/presentation-layer/views";

export class LoadLastRankingController implements Controller{
    
    constructor(private readonly lastRankingLoader: LastRankingLoader){}
    
    async handle(): Promise<HttpResponse<RankingScoreView[]>> {
        try {
            const ranking = await this.lastRankingLoader.load();
            return  ok(ranking)            
        } catch (error) {
            return serverError(error) 
        }
    }
}