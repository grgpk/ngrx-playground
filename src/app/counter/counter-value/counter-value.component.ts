import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../states/counter.seclector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css'],
})
export class CounterValueComponent {
  constructor(private store: Store<AppState>) {}

  counter$ = this.store.select(getCounter);
}
