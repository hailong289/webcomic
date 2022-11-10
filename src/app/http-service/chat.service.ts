import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from './../model/response';
import { APIADMIN } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly chat = '/chat';
  constructor(public api: APIADMIN) { }

  getListChat(params= {}): Observable<response[]> {
     return this.api.get(this.chat, params);
  }
}
