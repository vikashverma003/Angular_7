import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {freeApiService} from '../Services/freeApiService';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BlogpostComponent } from './Blogs/blogpost/blogpost.component';
import { FactorialPipe } from './factorial.pipe';
import { HighlightDirective } from './CustomDirective/highlight.directive';
//import { DepartmentDetailComponent } from './department-detail/department-detail.component';
@NgModule({
  declarations: [
    AppComponent,RoutingComponent, DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentOverviewComponent, DepartmentContactComponent, ParentComponent, ChildComponent, BlogpostComponent, FactorialPipe, HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
