import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
