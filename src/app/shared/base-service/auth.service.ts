import { Injectable } from '@angular/core';

import { Account, AccountStorage } from '../storage/account.storage';

@Injectable()
export class AuthService {

  constructor(protected accountStorage: AccountStorage) {
  }

  public get IsAuthenticated(): boolean {
    return this.accountStorage.Get() ? true : false;
  }

  public Authenticate(username: string, token: string): void {
    this.accountStorage.Set({ username: username, token: token });
  }

  public GetAccount(): Account {
    return this.accountStorage.Get();
  }

  public SignOut(): void {
    this.accountStorage.Clear();
  }
}
