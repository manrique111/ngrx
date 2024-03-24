import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//Nrgx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {contadorReducer} from "./contador/contador.reducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HijoComponent} from "./contador/hijo/hijo.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HijoComponent,
    HijoComponent,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
