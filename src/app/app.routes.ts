import { Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  { path: 'add-book', component: BookFormComponent },
  { path: 'list-books', component: BookListComponent },
  { path: '', redirectTo: '/list-books', pathMatch: 'full' }
];
