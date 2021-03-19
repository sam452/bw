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
  amount: any;
  transaction_date: string;
  stripeToken: string;
  email: string;
  city: string;
  state: string;

  message: string;
  results: string;

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
         var i_amount = +this.amount * 100;   
         var i_amounts = String(i_amount);
         var i_amountf = parseFloat(i_amounts).toFixed(2); 
         i_amount = +i_amountf;
          

            this.bs.transaction({
              data: {
              type: 'node--transaction',
              attributes: {
              field_stripe_token: response.id,
              title: this.name,
              field_email: this.email,
              field_address: [this.address1],
              field_city: this.city,
              field_state: this.state,
              field_zip: this.zip,
              field_reason: this.reason,
              field_amount: i_amount,
              field_transaction_date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
              field_transaction_code: 'D',

              field_transaction_type: '',
              field_recurring: 0,
              field_donor_tag: '',
              field_acknowledged: 1,
              status: 1
            }}}).then((res) => console.log('success'));
            this.message = ``;
            this.results = `Success! Your donation of \$${this.amount} was successful.`;
            this.name = '';
            this.email = '';
            this.address1 = '';
            this.city = '';
            this.state = '';
            this.zip = '';
            this.reason = ''; 
            this.amount = null; 
            this.expiryMonth = '';
            this.expiryYear = '';
            this.cvc = '';
            this.transaction_date = ''; 
            this.transaction_code = '';
            this.cardNumber = '';
            
         

        } else {
          this.message = response.error.message;
        }
      });

    });
  }
}


