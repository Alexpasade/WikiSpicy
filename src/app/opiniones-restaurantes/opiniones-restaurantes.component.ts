import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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


  constructor(private activatedRoute: ActivatedRoute, private restaurantesService: RestaurantesService, private router: Router) { 
    this.opinion ={
      user_id: 0,
      rest_id: 0,
      opinion: ''
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      opinion: new FormControl('', Validators.required)
    })
    this.userId = Number(localStorage.getItem('usr'))
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
  this.restaurantesService.postOpinion(this.opinion).then((res) => {
    if(res.json().success){
      this.router.navigate(['/restaurantes', this.opinion.rest_id])
    }
  })
 }
}
