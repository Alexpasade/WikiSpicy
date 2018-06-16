import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit {

  arrayRecetas: any[];

  constructor(private recetasService: RecetasService, private router: Router) { }

  ngOnInit() {

    this.recetasService.getAllRecipes().then((res) =>{
      this.arrayRecetas = res.json()
    })
  }

  handleClick(id){
    this.router.navigate(['/recetas',id])
  
  }
}
