import { AuthenticationParams } from "@/domain/usecases/authentication";
import { AccountModel } from "@/domain/models/account-model";

export const mockAuthentication = () : AuthenticationParams => ({
  user: 'any_user',
  password: 'any_password'
})

export const mockAccountModel = () : AccountModel => ({
  accessToken: 'any_token'
})
