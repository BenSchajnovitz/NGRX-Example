import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StateExampleActions } from '../state-example/state-example.actions';
import { StateExampleSelectors } from '../state-example/state-example.selectors';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit, OnDestroy {

  storedData: number;
  storedSubscription: Subscription;
  wrappedStoredSubscription: Subscription = new Subscription();

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

  ngOnDestroy(): void {
    this.storedSubscription.unsubscribe();
    this.wrappedStoredSubscription.unsubscribe();
  }

}
