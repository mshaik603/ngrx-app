import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  {path:'', component:PostComponent},
  {path:'post', component:PostComponent},
  {path:'user', component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
