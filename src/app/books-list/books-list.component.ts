import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{

  bookData: Book[] = []; // Initialisez la propriété avec un tableau vide
  selectedBook: any; // Propriété pour stocker le produit sélectionné
  constructor(private BooksService: BooksService) { }

  ngOnInit(): void {
      this.BooksService.getBooks().subscribe((data: Book[]) => {
        this.bookData = data;
      }); 
  }
  showDetails(book: Book) {
    this.selectedBook = book; // Stockez le produit sélectionné
  }

}
