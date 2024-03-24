import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {resetear} from "../contador.actions";

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    });
  }

  reset(): void {
    this.store.dispatch(resetear())
  }
}
