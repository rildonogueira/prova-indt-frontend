import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { FormsModule } from '@angular/forms';
import { ListalivrosComponent } from './listalivros/listalivros.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LivrosFormComponent,
    ListalivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    NgxPaginationModule
  ], exports:[
    LivrosFormComponent,
    ListalivrosComponent
  ]
})
export class LivrosModule {

 }
