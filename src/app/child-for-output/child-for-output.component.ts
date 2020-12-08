import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-for-output',
  templateUrl: './child-for-output.component.html',
  styleUrls: ['./child-for-output.component.css']
})
export class ChildForOutputComponent implements OnInit {

  @Output() userNameEvent = new EventEmitter<string>();
  @Output() userPhoneEvent = new EventEmitter<string>();
  outputUserName  = '';
  outputUserPhone = '';

  onNameChange(): void {
    this.userNameEvent.emit(this.outputUserName);
  }

  onPhoneChange(): void{
    this.userPhoneEvent.emit(this.outputUserPhone);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
