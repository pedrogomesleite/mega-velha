import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { JojoInternoComponent } from './jojo-interno/jojo-interno.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    JojoInternoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
