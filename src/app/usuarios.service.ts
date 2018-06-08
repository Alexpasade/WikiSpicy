import { Http } from '@angular/http';
import { Usuario } from './model/usuario.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: Http) { }

  createUsuarios(values){
    
    let url = 'http://localhost:3000/api/usuarios/crearusuario'
    this.http.post(url,{
      nombre: values.nombre,
      ciudad: values.ciudad,
      edad: values.edad,
      email: values.email,
      password: values.password,
      imagen: values.imagen

    }).toPromise()
  }


}
