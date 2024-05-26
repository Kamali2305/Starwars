import { Component, Input } from '@angular/core';
import { IStarwar } from '../../_models/starwar.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StarwarService } from '../../_services/starwar.service';

@Component({
  selector: 'app-starwar',
  templateUrl: './starwar.component.html',
  styleUrl: './starwar.component.css'
})
export class StarwarComponent {
  starwar: IStarwar;
  id: string = '';
  isLoading: boolean = true;
  

constructor(private route: ActivatedRoute,
  private router: Router,
  private starwarService: StarwarService
) {}

ngOnInit(){
  this.route.params.subscribe((params: Params)=> {
    this.id = params['id'];
  });
  
  if(this.id){
    this.starwarService.getStarwarById(this.id).subscribe((responseData: IStarwar)=>{
      this.starwar = responseData;
      this.isLoading = false;

    });
  }
  
}

onEdit(){
  this.router.navigate(['starwar-upsertform', this.id]);
}
onBack(){
  this.router.navigate(['/'])
}

onRefresh(){
  
  this.router.navigate(['starwar', this.id]);
  //this.router.navigate(['starwar', this.id], { relativeTo: this.route });
}

onDelete(){
  this.starwarService.deleteStarwar(this.id).subscribe(()=>{
    this.router.navigate(['/']);
  })
}

}
