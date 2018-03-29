import { Injectable } from '@angular/core';

export interface Account {
    username: string;
    token: string;
}

@Injectable()
export class AccountStorage {

    protected storage_key: string = '_account';

    public Set(account: Account): void {
        if (account) {
            sessionStorage.setItem(this.storage_key, JSON.stringify(account));
        }
    }

    public Get(): Account {
        const account = sessionStorage.getItem(this.storage_key);
        if (account) {
            return JSON.parse(account) as Account;
        }
        return null;
    }

    public Clear(): void {
        sessionStorage.clear();
    }
}
