import { Http } from '@angular/http';
import { Usuario } from './model/usuario.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: Http) { }


}
