import { AuthenticationParams } from "@/data/domain/usecases/authentication";
import { AccountModel } from "@/data/domain/models/account-model";

export const mockAuthentication = () : AuthenticationParams => ({
  user: 'any_user',
  password: 'any_password'
})

export const mockAccountModel = () : AccountModel => ({
  accessToken: 'any_token'
})
