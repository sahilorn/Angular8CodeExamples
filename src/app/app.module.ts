import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ParentComponentComponent} from './parent-component/parent-component.component';
import {FormsModule} from "@angular/forms";
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {ChildForOutputComponent} from './child-for-output/child-for-output.component';
import {HttptrialComponent} from './httptrial/httptrial.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    Child1Component,
    Child2Component,
    ChildForOutputComponent,
    HttptrialComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
