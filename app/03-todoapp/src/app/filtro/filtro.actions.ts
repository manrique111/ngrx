import {createAction, props} from '@ngrx/store';

export type filtrosValidos = 'Todos' | 'Completado' | 'Pendientes';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos}>(),
);
