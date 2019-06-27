import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { PaymentService } from '../payment/payment.service'

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements AfterViewInit {

  @Input() amount: number; // Total amount
  @Input() label: string; // Label for product/purchase

  elements: any;
  donate: any;
  prButton: any;

  @ViewChild('payElement') payElement;

  constructor(private pmt: PaymentService) { }

  ngAfterViewInit() {
    this.paymentRequest = this.pmt.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        amount: this.amount,
        label: this.label,
    },
  });

  this.elements = this.pmt.stripe.elements();

  this.paymentRequest.on('source', async (event) => {
    console.log(event)
    setTimeout(() => {
      event.complete('success')
    }, 1000)
  });

  this.prButton = this.elements.create('paymentRequestButton', {
    paymentRequest: this.paymentRequest,
    style: {
      paymentRequestButton: {
        type: 'donate',
        theme: 'dark'
      },
    }
  });

  this.mountButton()

  }

  async mountButton() {
    const result = await this.paymentRequest.canMakePayment();
    if (result) {
      this.prButton.mount(this.payElement.nativeElement);
    } else {
      console.error('old browser');
      }
    
  }

}
