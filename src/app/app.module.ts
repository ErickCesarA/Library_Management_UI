import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchBookComponent } from './pages/search-book/search-book.component';
import { ListBookComponent } from './pages/list-book/list-book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { SingleBookComponent } from './pages/single-book/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SearchBookComponent,
    ListBookComponent,
    AddBookComponent,
    SingleBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
