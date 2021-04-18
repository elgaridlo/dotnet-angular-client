import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  user: any;
  

  constructor(
    private httpClient : HttpClient
  ) {

  }
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.httpClient.get('https://localhost:5001/api/users').subscribe(
      res => {
        this.user = res;
        console.log('uadsdsa = ', this.user);
      },
      error => {
        console.log(error);
      }
    )
  }
}
