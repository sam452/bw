import { Injectable } from '@angular/core';

@Injectable()

export class PaymentService {
  stripe = Stripe('pk_test_tWiAp5GaM7pUWYJN5JdyTXE100U9FLDvjk');
  constructor() { }
}
