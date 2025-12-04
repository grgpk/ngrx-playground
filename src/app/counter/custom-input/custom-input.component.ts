import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';
import { getToggle } from '../states/counter.seclector';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent {
  customValue = 0;
  showCustomInput$ = this.store.select(getToggle);

  constructor(private store: Store<{ counter: CounterState }>) {}

  onValueChanged() {
    this.store.dispatch(customIncrement({ value: +this.customValue }));
  }

  onInputToggle() {
    this.store.dispatch(toggleCustomInput());
  }
}
