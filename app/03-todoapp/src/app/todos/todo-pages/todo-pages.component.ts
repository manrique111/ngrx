import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {toggleAll} from "../todo.actions";

@Component({
  selector: 'app-todo-pages',
  templateUrl: './todo-pages.component.html',
  styleUrl: './todo-pages.component.css'
})
export class TodoPagesComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  toggleAll(): void {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(toggleAll({completado: this.completado}));
  }
}
