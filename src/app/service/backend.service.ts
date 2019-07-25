import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';


export const Api = {
    login : 'https://work.bentwhiskerranch.org/api/v1/auth/sign_in',
    transactions : 'https://work.bentwhiskerranch.org/api/v1/transactions'
};

@Injectable() export class BackendService {

  constructor(private http: HttpClient) {

  }

  public login( data: {email: string, password: string}): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.post(Api.login, data).subscribe((res) => {
            console.log('login success', res);
            const user = new User(res);
            // TODO set all user data and access toen, expire time uid, client etc
            resolve(user);
        });
    });
  }

  public transaction( data: any,  user: User): Promise<any> {

    const header = new HttpHeaders();
    header.append('access-token', user.accessToken);
    header.append('expiry', String(user.expiry));
    header.append('token-type', user.tokenType);
    header.append('uid', user.uid);
    header.append('client', user.client);

    return new Promise((resolve, reject) => {
        this.http.post(Api.transactions, data).subscribe((res) => {
            console.log('transaction add success', res);
            resolve(res);
        });
    });
  }


}
