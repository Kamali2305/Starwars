import { Component } from '@angular/core';
import { IStarwar } from './_models/starwar.model';
import { StarwarService } from './_services/starwar.service';
import { Subscription } from 'rxjs';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[StarwarService],
})
export class AppComponent {

  constructor(private authService: AuthService){
    this.authService.autoLogin();
  }
  

}
