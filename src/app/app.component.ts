import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chemist-test';

  animals: string[] = [];

  constructor(
    private store: Store<{ animals: Data }>
  ) {
    this.store.select('animals').subscribe(e => {
      this.animals = e.data;
    });
  }
}
