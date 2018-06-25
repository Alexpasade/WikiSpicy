import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetasService } from '../recetas.service';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-subir-receta',
  templateUrl: './subir-receta.component.html',
  styleUrls: ['./subir-receta.component.css']
})
export class SubirRecetaComponent implements OnInit {
  form: FormGroup;
  files: any;

  constructor(private router: Router, private http: Http, private recetasService: RecetasService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    receta: new FormControl('', Validators.required),
    imagen: new FormControl(''),
    ingredientes: new FormControl('', Validators.required)
    })
  }
  // onSubmit(values){

  //   this.recetasService.crarReceta(values).then((res) => {
  //     if(res.json().success){
  //       this.router.navigate(['recetas'])
  //     }
  //   })
  // }

  onSubmit(values){
    let fd = new FormData
    fd.append('nombre', values.nombre)
    fd.append('descripcion', values.descripcion)
    fd.append('receta', values.receta)
    fd.append('imagen', this.files[0])
    fd.append('ingredientes', values.ingredientes)

    let headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data')
    
    const req = new HttpRequest('POST', 'http://localhost:3000/api/recetas/insertarreceta', fd ,{
      headers: headers
    })
    this.httpClient.request(req)
    .toPromise()
    .then( result => {
      this.router.navigate(['recetas'])
    })
  }

  onFileChange($event){
    this.files = $event.target.files;}

}
