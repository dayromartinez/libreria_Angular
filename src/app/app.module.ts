import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LibrosComponent } from './components/libros/libros.component';
import { MenuComponent } from './components/menu/menu.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';
import { CatalogoLibrosComponent } from './components/catalogo-libros/catalogo-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent,
    RickAndMortyComponent,
    NavBarComponent,
    FooterComponent,
    InicioPageComponent,
    CatalogoLibrosComponent
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
