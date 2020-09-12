import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

@Component({
  selector: 'chat-app',
  templateUrl: "./chat.component.html"
})

export class ChatComponent  {
  public nameDev: string[];
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string)
  {
    http.get<Mesage[]>(baseUrl + "api/Chat/Message").subscribe(result => {
      this.nameDev = result;
    }, error => console.error(error));
  }
}

interface Mesage {
  Id: number,
  Name: string,
  Text: string;
}                                  
