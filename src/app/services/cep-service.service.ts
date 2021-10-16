import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class CepServiceService {
  constructor(private httpClient: HttpClient) {}

  buscar(cep: string) {
    return this.httpClient
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then((response) => {
        return this.converterJsonCep(response);
      });
  }

  private converterJsonCep(cepJson: any): UserModel {
    let cep = new UserModel();
    cep.cep = cepJson.cep;
    cep.address = cepJson.logradouro;
    cep.district = cepJson.bairro;
    cep.city = cepJson.localidade;
    cep.state = cepJson.uf;
    return cep;
  }
}
