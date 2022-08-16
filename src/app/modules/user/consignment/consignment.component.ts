import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {
  user ={
    number_count:"",
    balance:null
  }
  count=""

  constructor(private _httpService:HttpService , private router:Router) { }

  ngOnInit(): void {
   this.count = String(localStorage.getItem('number_count'))
  }
  
  addCount(){
    this.user
    this._httpService.post('counts/addbalance',this.user).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.user.number_count = this.count
          this._httpService.post('counts/sustract',this.user).subscribe(
            response => {
              if (!response) {
                console.error('Error: no se encontro usuario');
              } else {
               console.log("response",response);
               alert("Se realizo su transferencia efectivamente")
               this.router.navigateByUrl('/user/usuario')

              }
            }
          );
        }
      }
    );


  }

}
