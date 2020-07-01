import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public password: string;
  public confirmationPassword: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  OnSubmitRegister() {

    if (this.confirmationPassword == this.password) {

      this.authService.createAccount(this.email, this.password).then(auth => {

        this.router.navigate(['/home']);

        console.log(auth);

      }).catch(err => {

        console.log(err);

      })

    } else {
      console.log("La confirmacion de contraseña es incorrecta");

    }

  }

}
