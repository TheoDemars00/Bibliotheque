import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  clientList: Client[] = []; // Initialisez la propriété avec un tableau vide
  clientService: ClientService = inject(ClientService);
  selectedClient: any; // Propriété pour stocker le produit sélectionné
  
  constructor(/*private BooksService: BooksService*/) {
    this.clientService.getClients().then((clientList:Client[])=>{
      this.clientList = clientList;
    });
  }

  ngOnInit(): void {
  }

  showDetails(client: Client) {
    this.selectedClient = client; // Stockez le produit sélectionné
  }

}
