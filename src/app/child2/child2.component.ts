import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  userInfo: any = {
    name: '',
    phone: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input('theUserName') theUserName = '';
  @Input('theUserPhone') theUserPhone = '';



}
