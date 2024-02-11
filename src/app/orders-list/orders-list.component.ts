import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit{

  loanData: Loan[] = []; // Initialisez la propriété avec un tableau vide
  selectedLoan: any; // Propriété pour stocker le produit sélectionné
  constructor(private LoanService: LoanService) { }

  ngOnInit(): void {
      this.LoanService.getLoans().subscribe((data: Loan[]) => {
        this.loanData = data;
      }); 
  }
  showDetails(loan: Loan) {
    this.selectedLoan = loan; // Stockez le produit sélectionné
  }

}
