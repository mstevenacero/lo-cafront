import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  user = ""
  userGet = ""
  infoUser: any = []
  forUser: any = []
  counts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.user = localStorage.getItem('documento')
    this.userGet = String(this.user)
    this.getUser(this.userGet)
  }
  getUser(id) {
    this._httpService.getOne('users/usuario', id).subscribe(response => {
      if (!response) {
        console.error('Error: de traer el usuario');
      } else {
        this.infoUser = response
        this.forUser = this.infoUser.data
        this.counts = this.infoUser.data.counts
        localStorage.setItem('number_count', this.counts[0].number_count)

      }
    }

    )
  }

}
