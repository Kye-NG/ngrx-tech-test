import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addDog, changeAnimals } from 'src/app/actions/test.action';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  inputText: string = '';

  constructor(private store: Store<{ animals: Data }>) { }

  ngOnInit(): void {
  }

  changeAnimals() {
    this.store.dispatch(changeAnimals({ text: this.inputText }));
  }

  addDog() {
    this.store.dispatch(addDog());
  }
}
