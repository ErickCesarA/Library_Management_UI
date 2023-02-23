import { Component, EventEmitter, Input , Output } from '@angular/core';
import { BooksModels} from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

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
  updBookList(books: BooksModels[] )
  {
    this.books = books;
  }
  BookToUpd(book:BooksModels)
  {

  }
  delBook(book:BooksModels)
  {
    this.libmanageService.delBook(book).subscribe((books)=>this.bookUpdate.emit(books));
  }
  getBook(book:BooksModels)
  {
    this.libmanageService.getBooks().subscribe((result: BooksModels[])=>(this.books = result));
  }



}
