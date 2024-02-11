import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:4200/assets/clients.json';

  async getClients(): Promise<Client[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
