import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
{path:'', redirectTo:'/home',pathMatch:'full'}, //對比所有路徑直接導向Home
{path:'home', component: HomeComponent}, // home路徑對應到HomeComponent
{path:'about',component: AboutComponent} // about路徑對應到AboutComponent


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
