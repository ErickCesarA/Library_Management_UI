import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  bookToList?: BooksModels;
  bookToSearch?: BooksModels;
  bookToCreat?:BooksModels;

  constructor(private libmanageService: LibManageService) {}


  searchBook( book : BooksModels)
  {
    this.bookToSearch = book;

  }
  listBooks(book : BooksModels)
  {
    this.bookToList  = book ;

  }
  creatBook(book : BooksModels)
  {
    this.bookToCreat  = book;
  }
}

