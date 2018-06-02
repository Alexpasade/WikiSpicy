import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  handleUsuarios(){
    this.router.navigate(['perfil'])
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[ Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'), Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

}
