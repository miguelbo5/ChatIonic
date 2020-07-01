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

  public msg: message;
  public chat: any;

  public mensajeTextArea: string;

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

    const message: message = {

      content: this.mensajeTextArea,
      type: 'text',
      date: new Date()

    }

    this.chatService.sendMsgToFirebase(message, this.chat.id);
    //this.mensaje = "";

  }

}