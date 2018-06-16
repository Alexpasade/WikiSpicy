import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-show-restaurante',
  templateUrl: './show-restaurante.component.html',
  styleUrls: ['./show-restaurante.component.css']
})
export class ShowRestauranteComponent implements OnInit {
  
  restaurante: any[]
  userId: number
  idRestaurante: number
  opiniones: any[]
  usuario: any

  constructor(private restaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute, private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit() {

    this.userId = Number(localStorage.getItem('usr'))
    this.activatedRoute.params.subscribe( (params) =>{
      this.restaurantesService.getRestauranById(params.id).then((res) => {
        this.restaurante = res.json()
        this.idRestaurante = res.json().id
        this.restaurantesService.getOpinion(this.idRestaurante).then((res) => {
          this.opiniones = res.json()  
        })
      })
    })
  }

  handleClick(id){
    this.router.navigate(['opiniones',id])
  }
}
