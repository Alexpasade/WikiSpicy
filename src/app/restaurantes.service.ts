import { Http } from '@angular/http';
import { Restaurante } from './model/restaurante.model';
import { Injectable } from '@angular/core';

let urlLocal = 'http://localhost:3000'

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

  getAllTiendas(){
    return this.http.get('http://localhost:3000/api/restaurantes/tiendas').toPromise()
  }

  getTiendaById(value){
    let url = 'http://localhost:3000/api/restaurantes/gettienda'
    return this.http.post(url, {
      id:value
    }).toPromise()
  }
  setRestaurantFavorite(user_id, rest_id){
    let url ='http://localhost:3000/api/restaurantes/favoritos'
    return this.http.post(url, {
      
      user_id: user_id,
      rest_id: rest_id
      
    }).toPromise()
  }
  getFavoritesRestaurants(user_id){
    let url ='http://localhost:3000/api/restaurantes/restaurantesfavoritos'
    return this.http.post(url, {
      user_id: user_id
    }).toPromise()
  }

  getFavoritesRestaurantsById(user_id){
    let url ='http://localhost:3000/api/restaurantes/restaurantesfavoritosbyid'
    return this.http.post(url, {
      user_id: user_id
    }).toPromise()
  }

  deleteRestauranteFavorito(user_id, rest_id){
    let url ='http://localhost:3000/api/restaurantes/deleterestuarantefavorito'
    return this.http.post(url, {

      user_id: user_id,
      rest_id: rest_id

    }).toPromise()
  }
}
