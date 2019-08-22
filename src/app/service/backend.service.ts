import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';


export const Api = {
    login : 'https://works.bentwhiskerranch.org/api/v1/auth/sign_in',
    transactions : 'https://works.bentwhiskerranch.org/api/v1/transactions'
};

// export const Api = {
//     login : 'http://localhost:3000/api/v1/auth/sign_in',
//     transactions : 'http://localhost:3000/api/v1/transactions'
// };


@Injectable() export class BackendService {

  constructor(private http: HttpClient) {

  }

  public login( data: {email: string, password: string}): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.post<any>(Api.login, data, {observe: 'response'}).subscribe((res) => {
            const userData = res.body.data;
            const headers = res.headers;
            const user = new User(userData, headers);
            resolve(user);
        });
    });
  }

  public transaction( data: any,  user: User): Promise<any> {

    const headers = new HttpHeaders({
        'access-token': user.accessToken,
        'Content-Type': 'application/json',
        expiry: user.expiry,
        'token-type': user.tokenType,
        uid: user.uid,
        client: user.client
    });
    return new Promise((resolve, reject) => {
        this.http.post(Api.transactions, data, {headers} ).subscribe((res) => {
            console.log('transaction add success', res);
            resolve(res);
        });
    });
  }


}
