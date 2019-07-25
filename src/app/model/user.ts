export class User {

    id: string;
    email: string;
    uid: string;
    provider: string;

    accessToken: string;
    tokenType: string;
    expiry: number;
    client: string;


    constructor(data: any = {}) {
      if (!data) {data = {}};
      this.id = data.id;
      this.email = data.email;
      this.uid = data.uid;
      this.provider = data.provider;

    }
}
