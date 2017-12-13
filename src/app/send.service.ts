import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SendService {

  constructor() { }
  private subject = new Subject<any>();
  now: Date;

  sendMessage(message: string) {
    console.log(`send:${message}`);
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
