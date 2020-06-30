import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AngFireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {

      this.AngFireAuth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){

    this.AngFireAuth.signOut().then(() => {

      this.router.navigate(['/login']);

    })


  }

}
