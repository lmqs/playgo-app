import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { AccountModel } from "@/data/domain/models/account-model";
import { InvalidCredentialsError } from "@/data/domain/models/errors/invalid-credentials-error";
import { UnexpectedError } from "@/data/domain/models/errors/unexpected-error";
import { Authentication, AuthenticationParams } from "@/data/domain/usecases/authentication";

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ){}

  async auth (params: AuthenticationParams) : Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch(httpResponse.statusCode){
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}