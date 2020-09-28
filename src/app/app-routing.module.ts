import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlelistComponent } from './articlelist/articlelist.component';

import {AddaricelComponent} from './addaricel/addaricel.component';
import {EditarticleComponent} from './editarticle/editarticle.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {register} from "ts-node";
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [{path: 'x', component: ArticlelistComponent, canActivate: [AuthGuard]},
{path: 'addaricle', component: AddaricelComponent, canActivate: [AuthGuard]},
{path: 'updatearticle', component: EditarticleComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'updatearticle/:idarticle', component: EditarticleComponent },
{path: 'posts', component: PostsComponent },
  {path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
