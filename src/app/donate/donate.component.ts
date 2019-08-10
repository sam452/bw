import { Component, NgZone, ViewChild } from '@angular/core';
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

  @ViewChild('f') formValues;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  name: string;
  address1: string;
  zip: string;
  transaction_code: string;
  reason: string;
  amount: string;
  transaction_date: string;
  stripeToken: string;
  email: string;


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

          
          
          this.bs.login({
            email: 'sam@bentwhiskerranch.org',
            password: 'frist19'
          }).then(user => {
            this.bs.transaction({
              access_token: user.accessToken,
              stripeToken: response.id,
              name: this.name,
              email: this.email,
              address1: this.address1,
              zip: this.zip,
              reason: 'my reason2',
              amount: this.amount,
              transaction_date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
              transaction_code: 'D'
            }, user).then((res) => console.log('success'));
            this.name = '';
            this.email = '';
            this.address1 = '';
            this.zip = '';
            this.reason = ''; 
            this.amount = ''; 
            this.expiryMonth = '';
            this.expiryYear = '';
            this.cvc = '';
            this.transaction_date = ''; 
            this.transaction_code = '';
            this.cardNumber = '';
            this.message = `Success! Your donation of \$ ${this.amount} was successful.`;
            
          });
        } else {
          this.message = response.error.message;
        }
      });
    });
  }
}


