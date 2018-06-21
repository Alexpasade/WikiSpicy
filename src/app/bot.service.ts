import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http: Http) { }

  sendMessage(message){
    let url = 'http://localhost:3000/api/bot'
    return this.http.post(url, {

        mensaje:message
        
    }).toPromise()
  }
}
