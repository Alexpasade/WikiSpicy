import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-opiniones-restaurantes',
  templateUrl: './opiniones-restaurantes.component.html',
  styleUrls: ['./opiniones-restaurantes.component.css']
})
export class OpinionesRestaurantesComponent implements OnInit {

  userId: number
  idRestaurante: any[]
  form: FormGroup
  opinion: any
  opiniones: any[]
  usuarioImagen: any

  constructor(private usuariosService: UsuariosService ,private activatedRoute: ActivatedRoute, private restaurantesService: RestaurantesService, private router: Router) { 
    this.opinion ={
      user_id: 0,
      rest_id: 0,
      opinion: '',
      user_foto: ''
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      opinion: new FormControl('', Validators.required)
    })
    this.userId = Number(localStorage.getItem('usr'))
    this.usuariosService.getUsuarioById(this.userId).then((res) => {
      this.usuarioImagen = res.json()[0].imagen

    })
    this.activatedRoute.params.subscribe( (params) =>{
      this.restaurantesService.getRestauranById(params.id).then((res) => {
        this.idRestaurante = res.json().id
      })
    })
   
 }

 onSubmit(value){
  this.opinion.user_id = this.userId
  this.opinion.rest_id = this.idRestaurante
  this.opinion.opinion = value.opinion
  this.opinion.user_foto = this.usuarioImagen
  this.restaurantesService.postOpinion(this.opinion).then((res) => {
    if(res.json().success){
      this.router.navigate(['/restaurantes', this.opinion.rest_id])
    }
  })
 }
}
