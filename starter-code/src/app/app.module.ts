import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService } from './services/movies.service'
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movies/:id', component: MyMovieComponentComponent }
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
