import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/assets/loan.json';

  async getLoan(): Promise<Loan[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
