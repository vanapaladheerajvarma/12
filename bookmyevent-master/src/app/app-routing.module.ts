import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { SignupComponent } from './signup/signup.component';
import { TollywoodComponent } from './tollywood/tollywood.component';

const routes: Routes = [
  { path: 'SignUp', component: SignupComponent },
  { path: 'Movies', component: TollywoodComponent },
  { path: 'Bollywood', component: BollywoodComponent },
  { path: 'Hollywood', component: HollywoodComponent },
  { path: '*', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TollywoodComponent, HollywoodComponent, BollywoodComponent, SignupComponent, AppComponent]