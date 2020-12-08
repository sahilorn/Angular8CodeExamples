import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-httptrial',
  templateUrl: './httptrial.component.html',
  styleUrls: ['./httptrial.component.css']
})
export class HttptrialComponent implements OnInit {

  http: HttpClient;
  inputValue: string;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
  }

  makeHTTPCAll($event: KeyboardEvent): void {
    console.log('coming inside ', $event);
    this.http.get('https://jsonplaceholder.typicode.com/todos/5').subscribe(data => {
      console.log('data', data);
    });

  }
}
