import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyFotoComponent } from './my-foto/my-foto.component';
import { MySertComponent } from './my-sert/my-sert.component';


const routes: Routes = [
  { path: '', component:MyWorkComponent  },
  { path: 'foto', component: MyFotoComponent},
  { path: 'sert', component: MySertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
