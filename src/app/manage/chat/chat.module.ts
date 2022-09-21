import { CardModule } from 'primeng/card';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import {VirtualScrollerModule} from 'primeng/virtualscroller';

const routes: Routes = [
    {path: '', component: ChatComponent}
];

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        VirtualScrollerModule,
        RouterModule.forChild(routes)
    ]
})


export class ChatModule {}
