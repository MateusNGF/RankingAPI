import { Router } from "express";

import { makeLoadLastRankingController } from '@/main/factories'
import { adapterRoute } from "@/main/adapter";

export default (router: Router): void => {
  const controller = makeLoadLastRankingController()
  router.get('/ranking/last', adapterRoute(controller))
}