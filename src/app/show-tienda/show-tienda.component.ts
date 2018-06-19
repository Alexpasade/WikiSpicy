import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from './../restaurantes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-tienda',
  templateUrl: './show-tienda.component.html',
  styleUrls: ['./show-tienda.component.css']
})
export class ShowTiendaComponent implements OnInit {

  constructor(private restaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute) { }
  
  tienda: any[]

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) =>{
      this.restaurantesService.getTiendaById(params.id).then((res) => {
          this.tienda = res.json()
      })
    })
  }

}
