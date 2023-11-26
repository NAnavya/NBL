import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucesssComponent } from './sucesss/sucesss.component';

const routes: Routes = [
  {path:'sucess', component:SucesssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
