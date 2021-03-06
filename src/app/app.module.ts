import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LivrosModule } from './livros/livros.module';
import { LivroService} from './livro.service';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    LivrosModule
  ],
  providers: [
    LivroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
