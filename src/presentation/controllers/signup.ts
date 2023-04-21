import { MissingParamError } from '../../presentation/errors/missing-param-error'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: { message: 'testing' }
    }
  }
}
