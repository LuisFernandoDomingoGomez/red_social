import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
    
  {path: 'home', component: BodyComponent,},

  {path: 'directivas', component:DirectivasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }