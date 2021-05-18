import { Data } from '@angular/router';
import { createReducer, on, State } from '@ngrx/store';
import { addDog, changeAnimals } from '../actions/test.action';

export const initialState: Data = {
  data: ['Dog', 'Cat', 'Bird', 'Frog', 'Bat'],
  amount: 4
};

const _testReducer = createReducer(
  initialState,
  on(changeAnimals, (state, data) => {
    const animals = data.text.split(' ');
    return { data: animals, amount: animals.length };
  }),
  on(addDog, state => {
    const tempArray = [...state.data];

    tempArray.push('Dog');

    return { data: tempArray, amount: tempArray.length };
  })
)

export function testReducer(state: any, action: any) {
  return _testReducer(state, action);
}