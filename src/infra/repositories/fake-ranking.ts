import { RankingScoreModel } from "@/data/models";
import { ILoadLastRankingRepository } from "@/data/repository";
import { ranking } from "@/infra/database";

export class FakeRankingRepository implements ILoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}