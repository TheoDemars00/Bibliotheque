import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import * as books from '../../ressource/books.json';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  bookList = (books as any).default;
}
