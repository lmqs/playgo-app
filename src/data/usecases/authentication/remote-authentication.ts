import { InvalidCredentialsError } from "@/data/domain/models/errors/invalid-credentials-error";
import { UnexpectedError } from "@/data/domain/models/errors/unexpected-error";
import { AuthenticationParams } from "@/data/domain/usecases/authentication";
import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ){}

  async auth (params: AuthenticationParams) : Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch(httpResponse.statusCode){
      case HttpStatusCode.ok: break;
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}