import { Controller } from "@/presentation/contracts";
import { LastRankingLoadService } from "@/data/services";
import { FakeRankingRepository } from "@/infra/repositories";
import { loadLastRankingController } from "@/presentation/controllers";

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoadService(repo)
  return new loadLastRankingController(loader)
}