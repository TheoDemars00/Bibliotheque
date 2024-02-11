import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {OrdersListComponent} from './orders-list/orders-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'book-list', component: BooksListComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'orders-list', component: OrdersListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
