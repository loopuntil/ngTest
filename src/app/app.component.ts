import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  initialCount: number = 5;

  changeMsg: string;

  countChange(event: number) {
    this.initialCount = event;
  }
}
