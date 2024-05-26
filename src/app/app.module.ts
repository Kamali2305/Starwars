import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { StarwarService } from './_services/starwar.service';

import { AppRoutingModeule } from './app-routing.module';


import { HttpClientModule,
   provideHttpClient, 
   withInterceptors } from '@angular/common/http';
import { authInterceptor } from './_interceptor/auth.interceptor';

import { errorInterceptor } from './_interceptor/error.interceptor';
import { UserModule } from './user/user.module';
import { StartModule } from './start/start.module';
import { StarwarModule } from './starwars/starwar.module';
import { SharedModule } from './shared/spinner/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModeule,
    HttpClientModule,
    UserModule,
    StartModule,StarwarModule,
    SharedModule,
   
  


  ],
  providers: [StarwarService, provideHttpClient(withInterceptors([authInterceptor,errorInterceptor])),
],
  bootstrap: [AppComponent]
})
export class AppModule { }
