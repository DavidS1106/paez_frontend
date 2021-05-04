import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './services/api.service';
import { HttpClientModule  } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintingsComponent,
    NavbarComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
