import { AuthenticationParams } from "../usecases/authentication";

export const mockAuthentication = () : AuthenticationParams => ({
  user: 'any_user',
  password: 'any_password'
})