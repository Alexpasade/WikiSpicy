import { BotService } from './../bot.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  
  botMessage: string[];
  message: string;

  constructor(private botService: BotService) { }

  ngOnInit() {

  }

  handleKeypress($event){
    if($event.keyCode === 13) {
      this.botService.sendMessage(this.message).then((res) => {
          this.botMessage = res.json()
      })
    }  
  }

}