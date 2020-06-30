import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../models/message";
import { ChatsService } from "../../servicios/chats.service";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public mensajes = [];
  public msg: message;
  public chat: any;

  public room: any;

  constructor(private navParams: NavParams, private modalController: ModalController, private chatService: ChatsService) { }

  ngOnInit() {

    this.chat = this.navParams.get('chat');

    this.chatService.getChatRoom(this.chat.id).subscribe(room => {

      console.log(room);
      this.room = room;

    });

  }

  closeChat() {

    this.modalController.dismiss();

  }

  sendMessage() {

    this.mensajes.push(this.msg.content)
    console.log(this.mensajes)
    this.msg.content = "";

  }

}
