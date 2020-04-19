import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {freeApiService} from '../Services/freeApiService';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './product/list/list.component';
import { HomeComponent } from './product/home/home.component';
import { AddComponent } from './product/add/add.component';


@NgModule({
  declarations: [
    AppComponent,ListComponent,HomeComponent,AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
