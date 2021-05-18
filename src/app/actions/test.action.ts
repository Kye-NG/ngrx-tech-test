import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';

export const changeAnimals = createAction('[Test component] Change Name', props<{ text: string }>());
export const addDog = createAction('[Test component] Add Dog');
