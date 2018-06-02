import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { RestaurantesService } from '../restaurantes.service';
import { SelectorListContext } from '@angular/compiler';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
  
})
export class MapaComponent implements OnInit {
  habilitarMap: string

  lat: number = 40.4169;
  lng: number = -3.7033;
  zoom: number = 15;

  myLat: number;
  myLng: number;

  arrayRestaurantes: any[];
 
  constructor(private restaurantesService: RestaurantesService) {
    this.habilitarMap = 'none'
  }
 
  ngOnInit() {
    if(navigator.geolocation){
      let self = this
      navigator.geolocation.getCurrentPosition(function(position){
        self.myLat = position.coords.latitude
        self.myLng = position.coords.longitude         
      })
    }else{
      let self = this
     self.myLat = 40.4169;
     self.myLng = -3.7033;
   }
   this.restaurantesService.getAllRestaurantes().then((res)=>{
    this.arrayRestaurantes = res.json()
  })
  }
  handleMouseOut() {
    this.habilitarMap = 'none'
  }
  handleClick(){
    this.habilitarMap = 'auto'
  }
 }