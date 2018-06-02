import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit {

  arrayRecetas: any[];

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {

    this.recetasService.getAllRecipes().then((res) =>{
      this.arrayRecetas = res.json()
    })
  }

}
