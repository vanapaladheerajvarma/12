import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevicingService } from './sevicing.service';
import { SignupComponent } from './signup/signup.component';
import { TollywoodComponent } from './tollywood/tollywood.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SignupComponent,
    TollywoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [SevicingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
