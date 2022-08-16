import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public change: boolean = true
  public change2: boolean = false
  user = {
    identification_card: null,
    password: null
  }
  userData: any = []
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  LoginUp() {
    this.user
    //("registro",this.registro);
    this._httpService.post('users/login/', this.user).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.userData = response
          localStorage.setItem('token', this.userData.token);
          localStorage.setItem('documento', this.userData.data.identification_card)

          setTimeout(() => {
            this.router.navigateByUrl('user/usuario');
          }, 1000);
          //('se encontro usuario');

        }
      }
    );
  }
  changeSlot() {
    if (this.change === true && this.change2 === false) {
      this.change = false
      this.change2 = true
    }

  }
  changeSlot2() {
    if (this.change === false && this.change2 === true) {
      this.change = true
      this.change2 = false
    }

  }

}
