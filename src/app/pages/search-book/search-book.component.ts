import { Component } from '@angular/core';
import { BooksModels} from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels [] = [];

  constructor(private libmanageService: LibManageService){}

  ngOnInit() : void
  {
    this.libmanageService
    .getBooks()
    .subscribe((result: BooksModels[])=>(this.books = result));

    this.libmanageService
    .getGeres()
    .subscribe((result: GenresModels[])=>(this.genres = result));
  }



}
