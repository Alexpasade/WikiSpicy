import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  userId: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userId = Number(localStorage.getItem('usr'))
  }

  handleclick(){
    this.userId = Number(localStorage.getItem('usr'))
    if(this.userId > 0){
      this.router.navigate(['perfil'])
    }else{
      this.router.navigate(['login'])
    }
  }
}
