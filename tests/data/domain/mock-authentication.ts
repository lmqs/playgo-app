import { AuthenticationParams } from "@/data/domain/usecases/authentication";

export const mockAuthentication = () : AuthenticationParams => ({
  user: 'any_user',
  password: 'any_password'
})