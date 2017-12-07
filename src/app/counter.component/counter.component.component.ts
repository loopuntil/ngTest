import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'exe-counter',
  templateUrl: './counter.component.component.html',
  styleUrls: ['./counter.component.component.css']
})
export class CounterComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() count: number = 0;

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}
