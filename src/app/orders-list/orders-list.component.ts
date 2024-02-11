import { Component, OnInit, inject } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Loan } from '../models/loan';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit{

  loanList: Loan[] = []; // Initialisez la propriété avec un tableau vide
  loanService: LoanService = inject(LoanService);
  selectedLoan: any; // Propriété pour stocker le produit sélectionné

  constructor(/*private BooksService: BooksService*/) {
    this.loanService.getLoan().then((loanList:Loan[])=>{
      this.loanList = loanList;
    });
  }
  ngOnInit(): void {
  }
  showDetails(loan: Loan) {
    this.selectedLoan = loan; // Stockez le produit sélectionné
  }

}
