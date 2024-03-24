import {createReducer, on} from "@ngrx/store";
import {borrar, crear, editar, toggle, toggleAll} from "./todo.actions";
import {Todo} from "./models/todo.model";


export const estadoIncial: Todo[] = [
  new Todo("Salvar el mundo"),
  new Todo( "Ser un super heroe"),
  new Todo( "Ver todas las peliculas de videocentro"),
  new Todo( "Comer chiken")
];

export const todoReducer = createReducer(
  estadoIncial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),

  on (borrar, (state, {id}) => state.filter( todo => todo.id !== id)),

  on(toggle, (state, { id }) => {
   return state.map( todo => {
     if (todo.id === id ) {
       return {
         ...todo,
         completado: !todo.completado
       }
     } else {
       return todo;
     }
   });
  }),

  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll, (state, { completado }) => state.map (
    todo => {
      return {
        ...todo,
        completado: completado
      }
    }
  ))

);
