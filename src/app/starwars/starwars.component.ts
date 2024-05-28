import { Component } from '@angular/core';
import { IStarwar } from '../_models/starwar.model';

import { StarwarService } from '../_services/starwar.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.css'
})
export class StarwarsComponent {

  starwars: IStarwar[] = [];

  visibility: boolean = true;
  isLoading: boolean = true;

  

  constructor(private starwarService: StarwarService) {}


  ngOnInit(){
    this.starwarService.getStarwars().subscribe((responseData)=>{
     this.starwars = responseData;
     this.isLoading = false;
    });
  }
  
  

}
 

 
