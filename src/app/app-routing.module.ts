import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibrosComponent } from "./components/libros/libros.component";
import { MenuComponent } from "./components/menu/menu.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';
import { CatalogoLibrosComponent } from './components/catalogo-libros/catalogo-libros.component';


const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent
  },
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'serie',
    component: RickAndMortyComponent
  },
  {
    path: 'catalogo_libros',
    component: CatalogoLibrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
