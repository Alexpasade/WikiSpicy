import { Http } from '@angular/http';
import { Restaurante } from './model/restaurante.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http: Http) { }

  getAllRestaurantes(){
    return this.http.get('https://backspicy.herokuapp.com/api/restaurantes').toPromise()
    
  }

  getRestauranById(value){
    let url = 'https://backspicy.herokuapp.com/api/restaurantes/getrestaurante'
    return this.http.post(url, {
      id:value
    }).toPromise()
  }

  postOpinion(values){
    let url ='https://backspicy.herokuapp.com/api/restaurantes/opinion'
    return this.http.post(url, {
      
      opinion: values.opinion,
      user_id: values.user_id,
      rest_id: values.rest_id
      
    }).toPromise()
  }

  getOpinion(value){
    let url = 'https://backspicy.herokuapp.com/api/restaurantes/opinionrest'
    return this.http.post(url, {

      rest_id: value
      

    }).toPromise()
  }

  getAllTiendas(){
    return this.http.get('https://backspicy.herokuapp.com/api/restaurantes/tiendas').toPromise()
  }

  getTiendaById(value){
    let url = 'https://backspicy.herokuapp.com/api/restaurantes/gettienda'
    return this.http.post(url, {
      id:value
    }).toPromise()
  }
  setRestaurantFavorite(user_id, rest_id){
    let url ='https://backspicy.herokuapp.com/api/restaurantes/favoritos'
    return this.http.post(url, {
      
      user_id: user_id,
      rest_id: rest_id
      
    }).toPromise()
  }
  getFavoritesRestaurants(user_id){
    let url ='https://backspicy.herokuapp.com/api/restaurantes/restaurantesfavoritos'
    return this.http.post(url, {
      user_id: user_id
    }).toPromise()
  }

  getFavoritesRestaurantsById(user_id){
    let url ='https://backspicy.herokuapp.com/api/restaurantes/restaurantesfavoritosbyid'
    return this.http.post(url, {
      user_id: user_id
    }).toPromise()
  }

  deleteRestauranteFavorito(user_id, rest_id){
    let url ='https://backspicy.herokuapp.com/api/restaurantes/deleterestuarantefavorito'
    return this.http.post(url, {

      user_id: user_id,
      rest_id: rest_id

    }).toPromise()
  }
}
