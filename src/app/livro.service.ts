import { Injectable } from '@angular/core';
import { Livros } from './livros/livros';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'})
export class LivroService {


  constructor(private http: HttpClient) { }

  salvarLivro(livros : Livros) : Observable<Livros>{
    console.log(livros);
    return this.http.post<Livros>("http://localhost:8082/livraria/salvar",livros);
  }

  editarLivro(livros : Livros) : Observable<any>{
    console.log(livros);
    return this.http.put<Livros>(`http://localhost:8082/livraria/atualiza/${livros.idlivro}`,livros);
  }

  getLivros() : Observable<Livros[]>{
    //console.log(livros);
    return this.http.get<Livros[]>("http://localhost:8082/livraria/listartodos");
  }

  getLivrosPorId(id: number): Observable<Livros>{
    //console.log(livros);
    return this.http.get<any>(`http://localhost:8082/livraria/buscaid/${id}`);
  }

  deletaLivrosPorId(id: number): Observable<any>{
    //console.log(livros);
    return this.http.delete<any>(`http://localhost:8082/livraria/deleteId/${id}`);
  }


  /*
  getLivros() : Livros[]{
    let livros= new Livros();
    livros.edicaolivro="1";
    livros.editoralivro="Modena Italiana";
    livros.idlivro=1;
    livros.isbnlivro="458-589-478";
    livros.nomeautorlivro="Doido";
    livros.titulolivro="Doidão de Pele";
    return [livros];

  }
*/
}
