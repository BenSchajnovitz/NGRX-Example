import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StateExampleActions } from '../state-example/state-example.actions';
import { StateExampleSelectors } from '../state-example/state-example.selectors';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {

  storedData: number;
  anotherStoredData$: Observable<string> = this.store.select(StateExampleSelectors.getAnotherStoredData);
  storedSubscription: Subscription = new Subscription();

  input_anotherStoredData: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.storedSubscription = this.store.select(StateExampleSelectors.getStoredData).subscribe({
      next: res => {
        this.storedData = res;
      },
      error: err => {
      }
    }
    )
  }

  incrementStoredData() {
    this.store.dispatch(StateExampleActions.incrementStoredData());
  }

  setAnotherStoredData() {
    this.store.dispatch(StateExampleActions.setAnotherStoredData({newText: this.input_anotherStoredData}));
    this.input_anotherStoredData = "";
  }

  ngOnDestroy(): void {
    this.storedSubscription.unsubscribe();
  }
}
