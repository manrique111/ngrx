import {Component, OnInit} from '@angular/core';
import {NietoComponent} from "../nieto/nieto.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from "../contador.actions";

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [
    NietoComponent
  ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  multiplicar(): void {
    this.store.dispatch(actions.multiplicar({numero: 2}));
  }

  dividir(): void {
    this.store.dispatch(actions.dividir({numero: 2}))
  }


}
