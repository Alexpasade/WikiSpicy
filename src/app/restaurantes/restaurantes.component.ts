import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  arrayRestaurantes: any[]

  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.restaurantesService.getAllRestaurantes().then((res)=>{
      this.arrayRestaurantes = res.json()
    })
  }

}
