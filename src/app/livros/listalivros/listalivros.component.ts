import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router'
import { LivroService } from 'src/app/livro.service';
import { Livros } from '../livros';


@Component({
  selector: 'app-listalivros',
  templateUrl: './listalivros.component.html',
  styleUrls: ['./listalivros.component.css']
})
export class ListalivrosComponent implements OnInit {

  listarlivros:Livros[] = [];
  livroSelecionado : Livros;
  mensagemSucesso : String;
  mensagemErro: String;

  p : number = 1 ;
  count : number = 4;

  constructor(
    private service : LivroService,
    private router : Router) {

   }

  ngOnInit(): void {
    this.service
    .getLivros()
    .subscribe(resposta => this.listarlivros = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/livros-form'])
  }

  preparaDelecao(livros : Livros){
    this.livroSelecionado = livros;
  }

  deletarLivros(){
   // console.log(this.livroSelecionado.titulolivro);
    this.service.deletaLivrosPorId(this.livroSelecionado.idlivro)
    .subscribe(
      response => {this.mensagemSucesso = "Livro deletado com sucesso!!"
       this.ngOnInit();
    },
      erro => {this.mensagemErro = "Ocorreu um erro ao deletar o livro!!"}
    )
  }


}
