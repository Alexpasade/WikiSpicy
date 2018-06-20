import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-restaurantes-favoritos',
  templateUrl: './restaurantes-favoritos.component.html',
  styleUrls: ['./restaurantes-favoritos.component.css']
})
export class RestaurantesFavoritosComponent implements OnInit {

  userId:number
  restaurantes: any[]

  constructor(private resurantesService: RestaurantesService, private router: Router) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('usr'))
    this.resurantesService.getFavoritesRestaurants(this.userId).then((res) =>{
      this.restaurantes = res.json()
    })
  }

  handleClick(id){
    this.router.navigate(['/restaurantes',id])
  }

}
