import { UsuariosService } from './../usuarios.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from '../recetas.service';

@Component({
  selector: 'app-subir-receta',
  templateUrl: './subir-receta.component.html',
  styleUrls: ['./subir-receta.component.css']
})
export class SubirRecetaComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private http: Http, private recetasService: RecetasService) { }

  ngOnInit() {
    this.form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    receta: new FormControl('', Validators.required)
    })
  }
  onSubmit(values){
    
    this.recetasService.crarReceta(values).then((res) => {
      if(res.json().success){
        this.router.navigate(['recetas'])
      }
    })
  }

}
