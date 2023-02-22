import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BooksModels } from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibManageService {

  private url = "Book";
  private url2 = "Genres";

  constructor(private http: HttpClient ) { }

  public getBooks() : Observable<BooksModels[]>
  {
    return this.http.get<BooksModels[]>(`${environment.apiUrl}/${this.url}`)
  }

  public getGeres() : Observable<GenresModels[]>
  {
    return this.http.get<GenresModels[]>(`${environment.apiUrl}/${this.url2}`)
  }
}
