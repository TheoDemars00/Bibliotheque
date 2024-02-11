import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/assets/books.json';

  // getBooks(): Observable<Book[]> {
  //   return this.http.get<Book[]>('../assets/books');
  // } 

  async getBooks(): Promise<Book[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
