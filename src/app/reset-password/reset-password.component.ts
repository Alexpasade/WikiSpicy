import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup
  usuario: any
  falloMail: number
  newPassword: any
  falloPassword: number

  constructor(private router:Router, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[ Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required]),
      password: new FormControl('', Validators.required),
      password_repeat: new FormControl('',Validators.required)
    })
  }

  onSubmit(value){
    this.usuariosService.getUsuario(value).then((res) => {
      this.usuario = res.json()
      if(this.usuario === "falloMail"){
          this.falloMail = 0
      }else if(value.password !== value.password_repeat){
         this.falloPassword = 0
         this.falloMail = 1
      }else if(value.password === value.password_repeat){
        this.usuariosService.changePassword(value).then((res) => {
          alert('SE HA CAMBIADO EL PASSWORD')
          this.router.navigate(['login'])
        })
      }
    })
  }
}



