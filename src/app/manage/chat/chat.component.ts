import { ChatService } from './../../http-service/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
    sourceChats = [];

    constructor(private chatService: ChatService){}
    ngOnInit(): void {
        this.getListChat();
    }


    getListChat(){
        this.chatService.getListChat().subscribe((res: any) => {
            this.sourceChats = res;
        })
    }
}
