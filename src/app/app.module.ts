import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LibrosComponent } from './components/libros/libros.component';
import { MenuComponent } from './components/menu/menu.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent,
    RickAndMortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
