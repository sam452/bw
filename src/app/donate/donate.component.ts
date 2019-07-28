import { Component, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../service/backend.service';
import {formatDate} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})

export class DonateComponent {

  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;

  message: string;

  myDate = new Date();
  
  constructor(private _zone: NgZone, private bs: BackendService) {


  }

  getToken() {
    this.message = 'Loading...';
    
    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {

        if (status === 200) {
          var today = new Date();

          this.message = `Success! Card token ${response.card.id}.`;

          this.bs.login({
            email: 'sam@bentwhiskerranch.org',
            password: 'frist19'
          }).then(user => {
            this.bs.transaction({
              access_token: 'gBXKN4FroNRqDtxCA2Opmw',
              stripeToken: 'mystripe',
              name: 'sam',
              address1: '404 st',
              zip: '30044',
              reason: 'my reason',
              amount: '11',
              transaction_date: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
              transaction_code: 'D'
            }, user).then((res) => console.log('success'));
          });
        } else {
          this.message = response.error.message;
        }
      });
    });
  }
}


