import { RankingScore } from "@/domain/entities";
import { ILastRankingLoader } from "@/domain/usecases";
import { ILoadLastRankingRepository } from "@/data/repository";
import { RankingUnavailableError } from "@/domain/errors";

export class LastRankingLoadService implements ILastRankingLoader {

  constructor(
    private readonly loadLastRankingRepository: ILoadLastRankingRepository
  ) { }

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }
    return this.loadLastRankingRepository.loadLastRanking()
  }
}