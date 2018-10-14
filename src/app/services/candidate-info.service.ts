import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from '../models/candidate';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CandidateInfoService {

  webApiUrl: string = 'http://localhost:8080/candidate/'

  constructor(private http: HttpClient) { 

  }

  getAllCandidato(){
    return this.http.get<Candidate[]>(this.webApiUrl);
  }

  saveCandidato(candidate: Candidate){
    const body = JSON.stringify(candidate)
    return this.http.put<any>(this.webApiUrl+candidate.id, body, httpOptions)
  }

  saveCandidato2(candidate: Candidate){
    return this.http.post(
      `${this.webApiUrl}`,
      candidate,
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }
}
