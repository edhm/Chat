import { Component,Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-message',
  templateUrl: "./message.component.html"
})

export class MessageComponent {
  @Input() oMessage:Message;
}

interface Message {
  Id: number;
  Name: string;
  Text: string;}
