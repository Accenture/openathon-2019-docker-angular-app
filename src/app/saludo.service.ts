import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  saludar(nombre: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `http://${environment.API_URL}:8080/demo/hello?name=${nombre}`;

    console.log(`Enviando la petición al back: ${url}`);

    return this.http.get(url, { headers }).pipe(
    map(resp => {
        return resp;
      }),
    );
  }
}
