import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('abner', [Validators.required]),
    contrasena: new FormControl('1234', [Validators.required]),
    admin: new FormControl(false),
    canActivateChild: new FormControl(false),
    canLoad: new FormControl(false),
    canDeactivate:new FormControl(false)
  });

  constructor(

    private router: Router
  ) { }

  ngOnInit(): void {
  }



    

}
