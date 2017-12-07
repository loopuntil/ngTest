import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter.ComponentComponent } from './counter.component.component';

describe('Counter.ComponentComponent', () => {
  let component: Counter.ComponentComponent;
  let fixture: ComponentFixture<Counter.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Counter.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
