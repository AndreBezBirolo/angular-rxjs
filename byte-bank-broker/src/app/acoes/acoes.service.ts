import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, pluck, tap } from 'rxjs/operators';
import { Acao } from './modelo/acoes';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private http: HttpClient) {
  }

  getAcoes() {
    return this.http.get<any>(`${API}/acoes`)
      .pipe(
        pluck('payload'),
        map((acoes) => acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB)))
      );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    } else if (acaoA.codigo < acaoB.codigo) {
      return -1;
    } else {
      return 0;
    }
  }
}
