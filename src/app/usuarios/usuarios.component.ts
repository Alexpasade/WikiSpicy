import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  form: FormGroup
  usuario: any
  files: any
  userId: any

  constructor(private usuariosService: UsuariosService, private router: Router, private httpClient: HttpClient) { 
    this.userId = Number(localStorage.getItem('usr'))

    this.usuariosService.getUsuarioById(this.userId).then((res) => {
      this.usuario = res.json()[0]

    })

   
  }

  ngOnInit() {
    this.form = new FormGroup({
      imagen: new FormControl('')
    })
  }

  logOut(){
    localStorage.removeItem('usr')
    localStorage.removeItem('rest_id')
    this.router.navigate(['home'])

  }

  formRecetas(){
    this.router.navigate(['subirRecetas'])
  }

  onFileChange($event){

    this.files = $event.target.files


    let fd = new FormData
    fd.append('imagen', this.files[0])
    fd.append('id', this.userId)

    let headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    
    const req = new HttpRequest('POST', 'http://localhost:3000/api/usuarios/changefoto', fd ,{

      headers: headers
    })
    this.httpClient.request(req)
    .toPromise()
    .then( result => {
      this.usuariosService.getUsuarioById(this.userId).then((res) => {
        this.usuario = res.json()[0]
      })
    })
  }
}
