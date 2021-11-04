import { HttpReponse } from "@/presentation/contracts";

export interface Controller {
  handle: () => Promise<HttpReponse>
}