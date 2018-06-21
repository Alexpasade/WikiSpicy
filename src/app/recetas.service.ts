import { Receta } from './model/receta.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let urlLocal = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: Http) { }

  getAllRecipes(){
    return this.http.get('http://localhost:3000/api/recetas').toPromise()
  }

  crarReceta(values){
    let url ='http://localhost:3000/api/recetas/insertarreceta'
    return this.http.post(url, {

      nombre: values.nombre,
      descripcion: values.descripcion,
      receta: values.receta,
      ingredientes: values.ingredientes

    }).toPromise()
  }

  getRecetaById(value){
    let url ='http://localhost:3000/api/recetas/getreceta'
    return this.http.post(url, {

      id:value

    }).toPromise()
  }
}
