import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  user = {
    name: "",
    identification_card: null,
    phone: "",
    password: null,
    balance: null
  }

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
  }

  createCount() {
    this.user
    this._httpService.post('users/', this.user).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          location.reload()
          //('se encontro usuario');

        }
      }
    );
  }

}
