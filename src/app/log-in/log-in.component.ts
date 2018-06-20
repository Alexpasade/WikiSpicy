import { RestaurantesService } from './../restaurantes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;
  usuario: any;
  falloLogin: number;
  restaurantesFavoritos: any[];


  constructor(private router: Router, private usuariosService: UsuariosService, private restaurantesService: RestaurantesService) {
  }

  onSubmit(value){
    this.usuariosService.getUsuario(value).then((res) => { 
      this.usuario = res.json()
      if (this.usuario === "falloMail") {
        this.falloLogin = 0
      }else if (this.usuario === "falloPassword"){
        this.falloLogin = 1
      }else if (this.usuario[0].nombre){
        localStorage.setItem('usr', this.usuario[0].id)
        this.restaurantesService.getFavoritesRestaurantsById(this.usuario).then((res) =>{
          this.restaurantesFavoritos = res.json()
          localStorage.setItem('rest_id',JSON.stringify(this.restaurantesFavoritos))
        })
        this.router.navigate([`perfil`])
      }
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[ Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

}
