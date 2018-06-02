import { Http } from '@angular/http';
import { Restaurante } from './model/restaurante.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: Http) { }

  getAllRestaurantes(){
    return this.http.get('https://wikispicy.firebaseio.com/restaurantes.json').toPromise()
  }
}
