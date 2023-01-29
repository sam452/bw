import { Component, NgZone, ViewChild } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms'
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import{GoogleAnalyticsService} from '../service/google-analytics.service';
import { environment } from '../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})

export class DonateComponent {

  // if(!window['Stripe']) {
  //   alert('Oops! Stripe did not initialize properly.');
  //   return;
  // }
  // donateForm: FormGroup;

  
  // this.donateForm = this.fb.group({
  //   name: ['', Validators.required],
  //   cardNumber: ['', Validators.required],
  //   expiryMonth: ['', Validators.required],
  //   expiryYear: ['', Validators.required],
  //   cvc: ['', Validators.required],
  //   address1: ['', Validators.required],
  //   city: [''],
  //   state: [''],
  //   zip: ['', Validators.required],
  //   transaction_code: [''],
  //   reason: [''],
  //   amount: ['', Validators.required],
  //   transaction_date: [''],
  //   stripeToken: [''],
  //   email: ['', Validators.required],
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });
  
  // @ViewChild('f') formValues;
  // cardNumber: string;
  // expiryMonth: string;
  // expiryYear: string;
  // cvc: string;
  // name: string;
  // address1: string;
  // zip: string;
  // transaction_code: string;
  // reason: string;
  // amount: any;
  // transaction_date: string;
  // stripeToken: string;
  // email: string;
  // city: string;
  // state: string;
  donation: any = {};

  message: string;
  results: string;

  myDate = new Date();
  
  constructor(private bs: BackendService, private _zone: NgZone, public googleAnalyticsService: GoogleAnalyticsService) {
    
  }

  // get aliases() {

  //   return this.donateForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  getToken(donateForm: NgForm) {
    console.log(this.donation.amount);
    this.message = 'Loading...';
    
    
    (<any>window).Stripe.card.createToken({

      number: this.donation.cardNumber,
      exp_month: this.donation.expiryMonth,
      exp_year: this.donation.expiryYear,
      cvc: this.donation.cvc
    }, (status: number, response: any) => {
console.log("status " + status);
      // Wrapping inside the Angular zone
      this._zone.run(() => {

        if (status === 200) {
         var today = new Date();
         var i_amount = +this.donation.amount * 100;   
         var i_amounts = String(i_amount);
         var i_amountf = parseFloat(i_amounts).toFixed(2); 
         i_amount = +i_amountf;
          

            this.bs.transaction({
              data: {
              type: 'node--transaction',
              attributes: {
              field_stripe_token: response.id,
              title: this.donation.name,
              field_email: this.donation.email,
              field_address: [this.donation.address1],
              field_city: this.donation.city,
              field_state: this.donation.state,
              field_zip: this.donation.zip,
              field_reason: this.donation.reason,
              field_amount: i_amount,
              field_transaction_date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
              field_transaction_code: 'D',

              field_transaction_type: '',
              field_recurring: 0,
              field_donor_tag: '',
              field_acknowledged: 1,
              status: 1
            }}}).then((res) => console.log('success'));
            this.message = `Success! Your donation of \$${this.donation.amount} was successful.`;
            console.log(donateForm);
            this.donation = {
              name: '',
              results: `Success! Your donation of \$${this.donation.amount} was successful.`,
              message: `Success! Your donation of \$${this.donation.amount} was successful.`,
              email: '',
              address1: '',
              city: '',
              state: '',
              zip: '',
              reason: '',
              amount: '',
              expiryMonth: '',
              expiryYear: '',
              cvc: '',
              transaction_date: '',
              transaction_code: '',
              cardNumber: ''
            }
            this.message = `Success! Your donation .of \$${this.donation.amount} was successful.`;
            donateForm.resetForm();
            this.message = `Success! Your donation of \$${this.donation.amount} was successful.`;
         

        } else {
          this.message = response.error.message;
          }
        }
      
       );
      }
     );
  
  }

  SendDonateEvent(){ 
     this.googleAnalyticsService
     .eventEmitter("purchase", "donation", "form", "click", 10);
  } 

  loadStripe() {
   
    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window['Stripe'].setPublishableKey('environment.skey');
      }
       
      window.document.body.appendChild(s);
    }
  }

}


