import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  form: FormGroup;

  constructor(private routes: Router, private http: Http, private usuariosService: UsuariosService) { }

  handleUsuarios(){
    this.routes.navigate(['perfil'])
  }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
       Validators.required]),
      password: new FormControl('', Validators.required),
      terminos: new FormControl('', Validators.required)
      
    })
  }
  onSubmit(value){
    
    this.usuariosService.createUsuarios(value)
    this.routes.navigate([`perfil/${value.nombre}`])
    
  }

}
