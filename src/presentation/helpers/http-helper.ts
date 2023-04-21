// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpResponse } from '../../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
