import { Component } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent {

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels [] = [];

  constructor(private libmanageService: LibManageService) {}

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
