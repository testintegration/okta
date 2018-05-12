import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OktaAuthService } from '@okta/okta-angular';
import 'rxjs/Rx';

interface Message {
   date: String,
   text: String
}

@Component({
  selector: 'message-list',
  template: `
    <div *ngIf="messages.length">
      <li *ngFor="let message of messages">{{message.message}}</li>
    </div>
  `
})

export class MessageListComponent implements OnInit{
  messages: Array<Message> [];

  constructor(private oktaAuth: OktaAuthService, private http: Http) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new Headers({
      Authorization: 'Bearer ' + accessToken
    });
    console.log('calling init!');
    // Make request
    this.http.get(
      'http://localhost:3000/api/messages',
      new RequestOptions({ headers: headers })
    )
    .map(res =>res.json())
    .subscribe((messages: Array<Message>) => {

      messages.forEach(message => {
        console.log(message);
        this.messages.push(message));
      }
    }
    );


}
}
