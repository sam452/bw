import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})

export class DonateComponent implements OnInit {

  // if(!window['Stripe']) {
  //   alert('Oops! Stripe did not initialize properly.');
  //   return;
  // }
  donateForm: FormGroup;

  ngOnInit(): void {
    this.donateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('',[Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvc: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('', [Validators.required]),
      transaction_code: new FormControl(''),
      reason: new FormControl(''),
      amount: new FormControl('', [Validators.required]),
      transaction_date: new FormControl(''),
      stripeToken: new FormControl(''),
      email: new FormControl('', [Validators.required]),
    });
  }

  get name() { return this.donateForm.get('name')!; }
  get cardNumber() { return this.donateForm.get('cardNumber')!; }
  get expiryMonth() { return this.donateForm.get('expiryMonth')!; }
  get expiryYear() { return this.donateForm.get('expiryYear')!; }
  get cvc() { return this.donateForm.get('cvc')!; }
  get address1() { return this.donateForm.get('address1')!; }
  get city() { return this.donateForm.get('city')!; }
  get state() { return this.donateForm.get('state')!; }
  get zip() { return this.donateForm.get('zip')!; }
  get transaction_code() { return this.donateForm.get('transaction_code')!; }
  get reason() { return this.donateForm.get('reason')!; }
  get amount() { return this.donateForm.get('amount')!; }
  get transaction_date() { return this.donateForm.get('transaction_date')!; }
  get email() { return this.donateForm.get('email')!; }

  // donateForm = this.fb.group({
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

  message: string;
  results: string;

  myDate = new Date();
  
  constructor(private bs: BackendService, private _zone: NgZone) {
  }

  // get aliases() {

  //   return this.donateForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  loadStripe() {
   
    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window['Stripe'].setPublishableKey('pk_test_tWiAp5GaM7pUWYJN5JdyTXE100U9FLDvjk');
      }
       
      window.document.body.appendChild(s);
    }
  }

  getToken() {
    this.message = 'Loading...';
    console.log(this.donateForm.value);
    // console.log(this.donateForm.zip.errors);
    (<any>window).Stripe.card.createToken({

      number: this.donateForm.value.cardNumber,
      exp_month: this.donateForm.value.expiryMonth,
      exp_year: this.donateForm.value.expiryYear,
      cvc: this.donateForm.value.cvc
    }, (status: number, response: any) => {
console.log("status " + status);
      // Wrapping inside the Angular zone
      this._zone.run(() => {

        if (status === 200) {
         var today = new Date();
         var i_amount = +this.donateForm.value.amount * 100;   
         var i_amounts = String(i_amount);
         var i_amountf = parseFloat(i_amounts).toFixed(2); 
         i_amount = +i_amountf;
          

            this.bs.transaction({
              data: {
              type: 'node--transaction',
              attributes: {
              field_stripe_token: response.id,
              title: this.donateForm.value.name,
              field_email: this.donateForm.value.email,
              field_address: [this.donateForm.value.address1],
              field_city: this.donateForm.value.city,
              field_state: this.donateForm.value.state,
              field_zip: this.donateForm.value.zip,
              field_reason: this.donateForm.value.reason,
              field_amount: i_amount,
              field_transaction_date: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
              field_transaction_code: 'D',

              field_transaction_type: '',
              field_recurring: 0,
              field_donor_tag: '',
              field_acknowledged: 1,
              status: 1
            }}}).then((res) => console.log('success'));
            this.donateForm.patchValue({
              name: '',
              results: `Success! Your donation of \$${this.donateForm.value.amount} was successful.`,
              message: '',
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
            });
            // this.message = ``;
            // this.results = `Success! Your donation of \$${this.amount} was successful.`;
            // this.name = '';
            // this.email = '';
            // this.address1 = '';
            // this.city = '';
            // this.state = '';
            // this.zip = '';
            // this.reason = ''; 
            // this.amount = null; 
            // this.expiryMonth = '';
            // this.expiryYear = '';
            // this.cvc = '';
            // this.transaction_date = ''; 
            // this.transaction_code = '';
            // this.cardNumber = '';
            
         

        } else {
          this.donateForm.patchValue({
            message: response.error.message
          });
        }
      
      });
     }
    );
  
  }
}


