import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddaricelComponent } from './addaricel/addaricel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
// tslint:disable-next-line:import-spacing
import  {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';

import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SignupComponent } from './signup/signup.component';
import {MatSelectModule} from "@angular/material/select";
const material = [
  MatPaginatorModule
];
@NgModule({
  declarations: [
    AppComponent,
    ArticlelistComponent,
    EditarticleComponent,
    AddaricelComponent,
    PostsComponent,

    LoginComponent,
    HeaderComponent,
    HeroComponent,
    MyCartComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
