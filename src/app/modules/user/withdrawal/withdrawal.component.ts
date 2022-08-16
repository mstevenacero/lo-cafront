import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {
  user ={
    number_count:"",
    balance:null
  }
  count=""

  constructor(private _httpService:HttpService , private router:Router) { }

  ngOnInit(): void {
    this.count = String(localStorage.getItem('number_count'))
  }
  sustractBalance(){
    this.user.number_count = this.count
    this._httpService.post('counts/sustract',this.user).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro cuenta');
        } else {
         console.log("response",response);
         alert("Se realizo su retiro efectivamente efectivamente")
         this.router.navigateByUrl('/user/usuario')

        }
      }
    );

  }

}
