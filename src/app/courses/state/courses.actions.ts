import { createAction, props } from '@ngrx/store';

export const showCreateForm = createAction(
  'showCreateForm',
  props<{ value: boolean }>()
);
