import { Http } from '@angular/http';
import { Restaurante } from './model/restaurante.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: Http) { }

  getAllRestaurantes(){
    return this.http.get('http://localhost:3000/api/restaurantes').toPromise()
  }
}
