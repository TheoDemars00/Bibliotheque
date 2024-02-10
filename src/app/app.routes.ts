import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'book-list', component: BooksListComponent}
];
