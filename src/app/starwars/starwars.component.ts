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

  //searchQuery: string = '';

  constructor(private starwarService: StarwarService) {}


  ngOnInit(){
    this.starwarService.getStarwars().subscribe((responseData)=>{
     this.starwars = responseData;
     this.isLoading = false;
    });
  }
  
  // onSearch() {
  //   if (this.searchQuery.trim() === '') {
  //     this.filteredStarwars = [...this.starwars];
  //   } else {
  //     this.filteredStarwars = this.starwars.filter(starwar =>
  //       starwar.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }
  // }

}
 

 
