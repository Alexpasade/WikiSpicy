import { Http } from '@angular/http';
import { Usuario } from './model/usuario.model';
import { Injectable } from '@angular/core';

let urlLocal = 'http://localhost:3000'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: Http) { }

  createUsuarios(values){
    
    let url = 'http://localhost:3000/api/usuarios/crearusuario'
      return this.http.post(url,{
      nombre: values.nombre,
      ciudad: values.ciudad,
      edad: values.edad,
      email: values.email,
      password: values.password,
      imagen: values.imagen

    }).toPromise()
  }

  getUsuario(values){
    let url = 'http://localhost:3000/api/usuarios/login'
    return this.http.post(url, {

      nombre: values.nombre,
      ciudad: values.ciudad,
      edad: values.edad,
      email: values.email,
      password: values.password,
      imagen: values.imagen
      
    }).toPromise()
  }

  checkEmail(values){
    let url = 'http://localhost:3000/api/usuarios/email'
    return this.http.post(url, {

      nombre: values.nombre,
      ciudad: values.ciudad,
      edad: values.edad,
      email: values.email,
      password: values.password,
      imagen: values.imagen

    }).toPromise()
  }

  getUsuarioById(value){
    let url ='http://localhost:3000/api/usuarios/usuario'
    return this.http.post(url, {

    //Estos valores son los que le pasamos a la petición
      id: value

    }).toPromise()
  }
}
