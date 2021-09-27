import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API = environment.api;
@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private http: HttpClient) { }

  getAcoes() {
    return this.http.get<any>(`${API}/acoes`);
  }
}
