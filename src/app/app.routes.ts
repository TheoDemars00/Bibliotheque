import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import { ContactComponent } from './contact/contact.component'

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'books', component: BooksListComponent},
    {path: 'users', component: UserListComponent},
    {path: 'orders', component: OrdersListComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
