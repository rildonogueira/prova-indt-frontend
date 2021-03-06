import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Livros } from '../livros';
import { LivroService} from '../../livro.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livros: Livros;
  success : boolean = false;
  errors : String[];
  id : number;

  constructor(
    private service : LivroService,
    private router : Router,
    private activatedRoute : ActivatedRoute ) {
   this.livros = new Livros();
//this.livros = service.getLivros();
  }
  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getLivrosPorId(this.id)
        .subscribe(
        response => this.livros = response,
        errorResponse => this.livros = new Livros())
      }
    } )

  }

  onSubmit(){
    //console.log(this.livros);
    if(this.id){
      this.service.editarLivro(this.livros).subscribe(response => {
      this.success = true;
      this.errors = null;
      }, errorResponse => {
        this.errors = ["Erro ao atualizar o livro"];
      })
    } else {
      this.service.salvarLivro(this.livros)
    .subscribe(
      response=> {
      this.success = true;
      this.errors = null;
    } ,
    errorResponse=> {
      this.success = false;
      this.errors = errorResponse.error.errors;
      })
    }

  }

  voltarparalistagem(){
    this.router.navigate(['/livros-lista'])
  }

}
