import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDeconnectionshowed=false;
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLoggedIn")==="true"){
      this.isDeconnectionshowed=true;
    }
  }

  openLogin(){
    this.modalService.open(LoginModalComponent);
  }
  disconnect(){
    this.isDeconnectionshowed=false;
    sessionStorage.setItem("Token","");
    sessionStorage.setItem("isLoggedIn","false");
  }
}
