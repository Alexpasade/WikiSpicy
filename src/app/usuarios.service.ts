import { Http } from '@angular/http';
import { Usuario } from './model/usuario.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: Http) { }

  createUsuarios(values){
    
    let url = 'https://backspicy.herokuapp.com/api/usuarios/crearusuario'
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
    let url = 'https://backspicy.herokuapp.com/api/usuarios/login'
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
    let url = 'https://backspicy.herokuapp.com/api/usuarios/email'
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
    let url ='https://backspicy.herokuapp.com/api/usuarios/usuario'
    return this.http.post(url, {

    //Estos valores son los que le pasamos a la petición
      id: value

    }).toPromise()
  }

  changePassword(values){
    let url = 'https://backspicy.herokuapp.com/api/usuarios/changepassword'
    return this.http.post(url, {

      email: values.email,
      password: values.password

    }).toPromise()
  }
}
