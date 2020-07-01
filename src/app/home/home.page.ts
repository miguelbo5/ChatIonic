import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ChatsService, chat } from "../servicios/chats.service";
import { ModalController, ActionSheetController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = []

  constructor(public authService: AuthService, public chatService: ChatsService, private modal: ModalController, public actionSheetController: ActionSheetController) { }

  OnLogout() {
    this.authService.logout();
  }

  ngOnInit() {

    this.chatService.getChatRooms().subscribe(chats => {

      this.chatRooms = chats;

    });

  }

  openChat(chat) {

    this.modal.create({

      component: ChatComponent,
      componentProps: {
        chat: chat
      }

    }).then((modal) => modal.present())

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Desconectarse',
        icon: 'exit-outline',
        handler: () => {
          this.OnLogout();
        }

      }]
    });
    await actionSheet.present();
  }

}
