import { RankingScore } from "../../domain-layer/entities";
import { LastRankingLoader } from "../../domain-layer/usecases";
import { LoadLastRankingRepository } from "../contracts";


export class LastRankingLoaderService implements LastRankingLoader {
    constructor(private readonly loadRankingRepository: LoadLastRankingRepository){}
    async load ():  Promise<RankingScore[]>{
        return this.loadRankingRepository.loadLastRanking();
    }
}