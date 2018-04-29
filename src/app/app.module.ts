import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestService } from './http/api-request.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]
  
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HighlightDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
