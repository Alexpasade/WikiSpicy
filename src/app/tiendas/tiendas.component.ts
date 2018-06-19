import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  arrayTiendas: any[]

  constructor(private restaurantesService: RestaurantesService, private router: Router) { }

  ngOnInit() {
    this.restaurantesService.getAllTiendas().then((res) =>{
      this.arrayTiendas = res.json()
    })
  }

  handleClick(id){
    this.router.navigate(['/tiendas',id])
  }

}
