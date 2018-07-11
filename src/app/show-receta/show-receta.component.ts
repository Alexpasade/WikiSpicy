import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';

@Component({
  selector: 'app-show-receta',
  templateUrl: './show-receta.component.html',
  styleUrls: ['./show-receta.component.css']
})
export class ShowRecetaComponent implements OnInit {
  
  receta: any[]
  ingredientes: any
  ingrediente: any[]
  recetas: any
  pasosReceta: any[]

  constructor(private recetasService: RecetasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      this.recetasService.getRecetaById(params.id).then((res) => {
        this.ingredientes = res.json().ingredientes
        this.ingrediente = this.ingredientes.split(",")
        this.receta = res.json()
        this.recetas = res.json().receta
        this.pasosReceta = this.recetas.split(".")
      })
    })
  }  
}
