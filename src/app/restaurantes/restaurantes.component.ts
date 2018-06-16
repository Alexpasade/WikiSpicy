import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  arrayRestaurantes: any[]

  constructor(private restaurantesService: RestaurantesService, private router: Router) { }

  ngOnInit() {
    this.restaurantesService.getAllRestaurantes().then((res)=>{
      this.arrayRestaurantes = res.json()
    })
  }

  handleClick(id){
    this.router.navigate(['/restaurantes',id])
  }

}
