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

  getRestauranById(value){
    let url = 'http://localhost:3000/api/restaurantes/getrestaurante'
    return this.http.post(url, {
      id:value
    }).toPromise()
  }

  postOpinion(values){
    let url ='http://localhost:3000/api/restaurantes/opinion'
    return this.http.post(url, {
      
      opinion: values.opinion,
      user_id: values.user_id,
      rest_id: values.rest_id
      
    }).toPromise()
  }

  getOpinion(value){
    let url = 'http://localhost:3000/api/restaurantes/opinionrest'
    return this.http.post(url, {

      rest_id: value
      

    }).toPromise()
  }
}
