import { Component, Input } from '@angular/core';
import { IStarwar } from '../../_models/starwar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starwar-filmcard',
  templateUrl: './starwar-filmcard.component.html',
  styleUrl: './starwar-filmcard.component.css'
})
export class StarwarFilmcardComponent {

  @Input('starwar-ip') starwar:IStarwar;

  constructor(private router: Router) {}

  onDetailPage(){
    this.router.navigate(['starwar', this.starwar.id]);
  }

}
