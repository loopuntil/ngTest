import { SendService } from './send.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private service:SendService) { }
  title = 'app';
  initialCount: number = 5;
  changeMsg: string;
  navigateValue: string='';

  countChange(event: number) {
    this.initialCount = event;
  }

  navigatePage() {
    console.log(this.navigateValue);
    this.service.sendMessage(this.navigateValue);
    this.service.now = new Date();
    this.router.navigate(['/np', this.navigateValue]);

    this.navigateValue ='';
  }
}
