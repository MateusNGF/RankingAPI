import { Request, Response } from 'express'
import { Controller } from "@/presentation/contracts";

export const adapterRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const HttpResponse = await controller.handle()
    res
      .status(HttpResponse.statusCode)
      .json(HttpResponse.data)
  }
}