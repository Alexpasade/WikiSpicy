import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any[]

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
   let userId = Number(localStorage.getItem('usr'))
   this.usuariosService.getUsuarioById(userId).then((res) => {
     this.usuario = res.json()[0]
   })
  }

  logOut(){
    localStorage.removeItem('usr')
    this.router.navigate(['home'])

  }

}
