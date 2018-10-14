import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoInfoService {

  webApiUrl: string = 'http://localhost:8080/api/evento/user/'

  constructor(private http: HttpClient) { 

  }

  getAllEvento(){
    return this.http.get<Evento[]>(this.webApiUrl);
  }
}
