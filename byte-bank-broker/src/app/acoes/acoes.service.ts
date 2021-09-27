import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, pluck, tap } from 'rxjs/operators';
import { Acao, AcoesAPI } from './modelo/acoes';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private http: HttpClient) {
  }

  getAcoes(valor?: string) {
    const params = valor
      ? new HttpParams().append('valor', valor)
      : undefined;
    return this.http.get<AcoesAPI>(`${API}/acoes`, { params })
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
