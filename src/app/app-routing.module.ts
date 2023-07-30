import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnboardBankComponent } from './onboard-bank/onboard-bank.component';

const routes: Routes = [
  {path:'home',pathMatch:'full', component:HomeComponent},
  {path:'onboard-bank',pathMatch:'full',component:OnboardBankComponent},
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
