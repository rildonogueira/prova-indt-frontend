import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListalivrosComponent } from './listalivros/listalivros.component';
import { LivrosFormComponent} from './livros-form/livros-form.component'


const routes: Routes = [
  { path: 'livros-form',component: LivrosFormComponent},
  { path: 'livros-form/:id',component: LivrosFormComponent},
  { path: 'livros-lista',component: ListalivrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
