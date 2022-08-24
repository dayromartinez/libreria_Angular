import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibrosComponent } from "./components/libros/libros.component";
import { MenuComponent } from "./components/menu/menu.component";
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'serie',
    component: RickAndMortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
