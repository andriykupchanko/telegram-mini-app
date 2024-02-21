import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TelegramService } from '../../service/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  styles: [`
    .form{
      height: 70vh;
      justify-content: center;
    }
    textarea {
        font-size: 22px; 
    }

  `],
  template: `<form class="centered form">
    <h2 class="mb">Feedback</h2>
    <textarea class="form-control" [value]="feedback()" (input)="hendleChange($event)"></textarea>
  </form>`,
})
export class FeedbackComponent  implements OnInit, OnDestroy{

  constructor(private telegram : TelegramService) { 
    this.sendData = this.sendData.bind(this);
  }
  ngOnInit(): void {
    this.telegram.MainButton.setText('Send Message');
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }
  sendData(){
    this.telegram.sendData({feedback: this.feedback()});
  }
  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData);
  }

  feedback = signal('');

  hendleChange(event){
    this.feedback.set(event.target.value);
    if(this.feedback().trim()){
      this.telegram.MainButton.show();
    }else{
      this.telegram.MainButton.hide();
    }
  }
}
