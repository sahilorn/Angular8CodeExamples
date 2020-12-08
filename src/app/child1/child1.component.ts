import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  userInfo: any = {
    name: '',
    phone: ''
  };
  @Input() usernameFromParent = '';
  @Input() userPhoneFromParent = '';




}
