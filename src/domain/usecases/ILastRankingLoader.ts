import { RankingScore } from "@/domain/entities";

export interface ILastRankingLoader {
  load: () => Promise<RankingScore[]>
}