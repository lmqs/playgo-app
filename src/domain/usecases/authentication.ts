import { type AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  user: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
