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
  registro: any;
  registroFallo: boolean
  email: any;
  usuario:any

  constructor(private router: Router, private http: Http, private usuariosService: UsuariosService) { 
    this.registroFallo = false
  }
  ngOnInit() {
    
    this.usuario = localStorage.getItem('usr')
    
    if(this.usuario > 0){
      this.router.navigate(['perfil'])
    }

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
    
    this.usuariosService.checkEmail(value).then((res) => {
      if(res.json().mensaje){
        this.usuariosService.createUsuarios(value).then((res) => {
          this.router.navigate(['bienvenida'])
        })   
    }else{
        this.registroFallo = true
        
      }
    })
  }
}
