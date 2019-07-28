import { HttpHeaders } from '@angular/common/http';

export class User {

    id: string;
    email: string;
    uid: string;
    provider: string;

    accessToken: string;
    tokenType: string;
    expiry: string;
    client: string;


    constructor(data: any = {}, header: HttpHeaders) {
      if (!data) {data = {}};
      this.id = data.id;
      this.email = data.email;
      this.uid = data.uid;
      this.provider = data.provider;

      this.accessToken = header.get('access-token');
      this.tokenType = header.get('token-type');
      this.expiry = header.get('expiry');
      this.client = header.get('client');
    }
}
