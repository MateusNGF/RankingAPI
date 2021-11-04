export type HttpReponse<T = any> = {
  statusCode: number,
  data: T
}


export const HttpServerError = (error: Error): HttpReponse => ({
  statusCode: 500,
  data: error.message
})
export const HttpOk = (data: any): HttpReponse => ({
  statusCode: 200,
  data
})