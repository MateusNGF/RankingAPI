import { ILastRankingLoader } from "@/domain/usecases";
import { Controller, HttpReponse, HttpOk, HttpServerError } from "@/presentation/contracts";
import { RankingScoreView } from "@/presentation/view";

export class loadLastRankingController implements Controller {

  constructor(
    private readonly lastRankingLoader: ILastRankingLoader
  ) { }

  async handle(): Promise<HttpReponse<RankingScoreView[]>> {
    try {

      const ranking = await this.lastRankingLoader.load()
      return HttpOk(RankingScoreView.mapColletions(ranking))

    } catch (erro) {
      return HttpServerError(erro)
    }
  }
}