import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './product/home/home.component';
import { ListComponent } from './product/list/list.component';
import { AddComponent } from './product/add/add.component';
import { ViewComponent } from './product/view/view.component';

const routes: Routes = [

/*{
  path:'',
  redirectTo:'/products',
  pathMatch:'full'
},
{
  path:'products',
  loadChildren:'./product/product.module#ProductModule'

}, */
{
  path:'add',
 // redirectTo: '/route1',
  component:AddComponent,
  pathMatch: 'full'
},
{
  path:'product',
 // redirectTo: '/route1',
  component:ListComponent,
  pathMatch: 'full'
},
{
  path:'home',
  component:HomeComponent,
  pathMatch: 'full'
},
{
  path:'product/view/:id',
  component:ViewComponent,
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//export class AppRoutingModule { }
export class AppRoutingModule { } export const 
RoutingComponent = [HomeComponent,ListComponent,AddComponent];

