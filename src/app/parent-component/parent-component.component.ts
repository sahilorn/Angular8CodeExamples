import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit, OnInit{

  message: string;
  public userName: '';
  public userPhone: '';
  userInfo1: any = {
    name: '',
    phone: ''
  };
  userInfo2: any = {
    name: '',
    phone: ''
  };
  public outputUserName: '';
  public outputUserPhone: '';

  constructor(private data: DataServiceService) {
  }

  ngOnInit(): void{
    this.data.currentMessage.subscribe(message => this.message = message);
  }


  @ViewChild(Child1Component) child1: Child1Component;
  @ViewChild(Child2Component) child2: Child2Component;

  ngAfterViewInit(): void {
    this.userInfo1.name = this.child1.userInfo.name;
    this.userInfo2 = this.child2.userInfo;
  }

  nameEventHandler($event: any): void {
    this.outputUserName = $event;
  }

  phoneEventHandler($event: any): void {
    this.outputUserPhone = $event;
  }
}
