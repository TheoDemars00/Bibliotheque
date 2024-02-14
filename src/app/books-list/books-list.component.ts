import { Component, OnInit, inject } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book';
import { NgFor, NgIf } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [NgFor, HttpClientModule, NgIf],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{

  bookList: Book[] = [];
  bookService: BooksService = inject(BooksService); // Initialisez la propriété avec un tableau vide
  selectedBook: any; // Propriété pour stocker le produit sélectionné

  constructor(/*private BooksService: BooksService*/) {
    this.bookService.getBooks().then((bookList:Book[])=>{
      this.bookList = bookList;
    });
  }

  ngOnInit(): void {
  }

  showDetails(book: Book) {
    this.selectedBook = book; // Stockez le produit sélectionné
  }

}
