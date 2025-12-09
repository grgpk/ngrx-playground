import { createReducer, on } from '@ngrx/store';
import { initialState } from './courses.state';
import { showCreateForm } from './courses.actions';

export const coursesReducer = createReducer(
  initialState,

  on(showCreateForm, (state, action) => ({
    ...state,
    showForm: action.value,
  }))
);
