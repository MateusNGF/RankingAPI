import { RankingScore } from '@/domain/entities'

export class RankingScoreView {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]

  static map(entity: RankingScore): RankingScoreView {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapColletions(entities: RankingScore[]): RankingScoreView[] {
    return entities.map(RankingScoreView.map)
  }
}

type Player = {
  name: string,
  country: string
}
type Hero = {
  name: string,
  level: number
}