import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormProductComponentComponent } from './form-product-component/form-product-component.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent,  children:[
    {path:'categories',component:ListCategoriesComponent}

  ]},
  {path:'categories',component:ListCategoriesComponent},
  {path:'user',component:UserComponent},
  {path:'addProduct',component:FormProductComponentComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
