import { SendService } from './../send.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-navigate-page',
  templateUrl: './navigate-page.component.html',
  styleUrls: ['./navigate-page.component.css']
})
export class NavigatePageComponent implements OnInit, OnDestroy {
  value: string;
  subscription: Subscription;
  now: Date;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private service: SendService) {
    this.subscription = this.service
      .getMessage().subscribe(message => {
        console.log(`get :${message}`);
        this.value = message;
      });

  }

  ngOnInit() {
    this.setValue();
  }

  setValue() {
    this.value = this.route.snapshot.paramMap.get('value');
  }
  back() {
    this.location.back();
  }

  getDate() {
    if (!this.service.now) {
      this.service.now = new Date();
    }

    this.now = this.service.now;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
