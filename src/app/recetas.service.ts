import { Receta } from './model/receta.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: Http) { }

  getAllRecipes(){
    return this.http.get('http://localhost:3000/api/recetas').toPromise()
  }
}
