import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingsComponent } from './components/paintings/paintings.component';

const routes: Routes = [{ path: '', component: PaintingsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
