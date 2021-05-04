import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  errorLogin=false;
  errorLoginMessage=""
  connected=false;
  connection=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public activeModal: NgbActiveModal, private apiService:ApiService) { }

  ngOnInit(): void {
  }
   login(){

    var credentials={
      userName:<string>this.connection.controls["username"].value, password:<string>this.connection.controls["password"].value
    };
     this.apiService.authenticate(credentials)
    .subscribe( response=>{
      sessionStorage.setItem("Token",response.Token);
      sessionStorage.setItem("isLoggedIn","true");
      //this.connected=true;
      console.log(sessionStorage.getItem("Token"));
      this.connection.reset();
      this.activeModal.close();
    },
    error=>{
      this.errorLogin=true;
      this.errorLoginMessage="utilisateur ou mot de passe invalide";
      console.log(error);
    });
  }
}
