import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as actions from "./contador/contador.actions";
import {AppState} from "./app.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-redux-app';
  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  incrmentar(): void {
    this.store.dispatch( actions.incrementar() );
  }

  decrementar(): void {
    this.store.dispatch( actions.decrementar() );
  }
}
