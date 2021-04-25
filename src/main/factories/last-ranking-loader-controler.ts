import { Controller } from "@/presentation-layer/contracts";
import { LastRankingLoaderService } from "@/data-layer/implement-usecases";
import { FakeRepo } from "@/infra-layer/implement-repository/fake-repo";
import { LoadLastRankingController } from "@/presentation-layer/controllers";

export const makeLoadLastRankingController = (): Controller => {
    const repo = new FakeRepo();
    const loader = new LastRankingLoaderService(repo);
    return new LoadLastRankingController(loader);
}