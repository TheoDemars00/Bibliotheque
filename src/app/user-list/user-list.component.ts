import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  clientData: Client[] = []; // Initialisez la propriété avec un tableau vide
  selectedClient: any; // Propriété pour stocker le produit sélectionné
  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
      this.ClientService.getClients().subscribe((data: Client[]) => {
        this.clientData = data;
      }); 
  }
  showDetails(client: Client) {
    this.selectedClient = client; // Stockez le produit sélectionné
  }

}
