import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public bs: BackendService) {
  }

  ngOnInit() {
    this.bs.login({
      email: 'boban@bentwhiskerranch.org',
      password: 'mypassword'
    }).then(res => console.log(res));

  }

}
