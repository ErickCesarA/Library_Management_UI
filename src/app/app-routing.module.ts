import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ListBookComponent } from './pages/list-book/list-book.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchBookComponent } from './pages/search-book/search-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'add_book',component: AddBookComponent},
  {path:'list_book',component:ListBookComponent},
  {path:'search_book',component: SearchBookComponent},
  {path:'single_book',component: EditBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
