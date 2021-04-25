import { LoadLastRankingRepository } from "@/data-layer/contracts";
import { RankingScoreModel } from "@/data-layer/models";
import { ranking } from "@/infra-layer/fixtures";


export class FakeRepo implements LoadLastRankingRepository {
    async loadLastRanking(): Promise<RankingScoreModel[]>{
        return ranking.map(item => ({
            name: item.user,
            score: item.level,
        }))
    }
}