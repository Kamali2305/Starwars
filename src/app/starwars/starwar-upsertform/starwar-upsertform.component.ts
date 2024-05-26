import { Component } from '@angular/core';
import { IStarwar } from '../../_models/starwar.model';
import { compileNgModule } from '@angular/compiler';
import { StarwarService } from '../../_services/starwar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-starwar-upsertform',
  templateUrl: './starwar-upsertform.component.html',
  styleUrl: './starwar-upsertform.component.css',
  // providers: [StarwarService],
})
export class StarwarUpsertformComponent {

  id: string = '';
  isEditMode: boolean = false;

  starwar:IStarwar = {id:'',name: '', director: '',crew: '', imageUrl:'', year:''};


  form: FormGroup;

  constructor(private starwarService: StarwarService,
    private route: ActivatedRoute, 
    private router: Router
    
  ) {}

  ngOnInit(){
    //console.log(this.route.snapshot.params);
    //console.log(this.route.snapshot.queryParams);
    //console.log(this.route.snapshot.fragment);

    this.route.params.subscribe((params:Params)=>{
      this.id = params['id'];
    });

    // this.route.queryParams.subscribe((x)=>{
    //   console.log(x);
    // });

    // this.route.fragment.subscribe((x)=>{
    //   console.log(x);
    // });

    this.initForm();

    if(this.id){
       this.starwarService.getStarwarById(this.id).subscribe((starwar:IStarwar)=> {
        this.starwar = starwar;
        this.isEditMode = true;
        this.populateForm();
       });
     
    }


  }

  initForm(){
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      director: new FormControl(null),
      crew: new FormControl(null),
      imageUrl: new FormControl(null),
      year: new FormControl(null, [Validators.required, Validators.minLength(4),Validators.maxLength(4),]),


    });
  }

  populateForm(){
    this.form.patchValue({
      name:this.starwar.name,
      director:this.starwar.director,
      crew:this.starwar.crew,
      imageUrl:this.starwar.imageUrl,
      year:this.starwar.year,

    });
  }
  
    onSubmit(){
      this.starwar.name = this.form.value.name;
      this.starwar.director = this.form.value.director;
      this.starwar.crew = this.form.value.crew;
      this.starwar.imageUrl = this.form.value.imageUrl;
      this.starwar.year = this.form.value.year;
     
      if (!this.isEditMode){

            this.starwar.id = Math.random().toString();
            this.starwarService.addStarwar(this.starwar).subscribe(() => {
              this.router.navigateByUrl('/');

            });

            
    
          } else {
            this.starwar.id = this.id;
            this.starwarService.updateStarwar(this.starwar).subscribe(()=>{
              this.router.navigateByUrl(`/starwar/${this.starwar.id}`);

            });
           
          }

          this.form.reset();
    }

    onBack(){
      if(this.isEditMode){
        this.router.navigateByUrl(`/starwar/${this.starwar.id}`);
      } else {
        this.router.navigateByUrl('/');
      }
    }

    // onSubmit(){
    //   if (!this.isEditMode){

    //     this.starwar.id = Math.random().toString();
    //     this.starwarService.addStarwar(this.starwar);

    //     this.starwar = 
    //     {id:'',
    //     name: '', 
    //     director: '',
    //     crew: '', imageUrl:'', 
    //     year:''};

    //     this.router.navigateByUrl('/');

    //   } else {
    //     this.starwarService.updateStarwar(this.starwar);
    //     this.router.navigateByUrl(`/starwar/${this.starwar.id}`);
    //   }
      
     
    }

    
  

 

     



 




    
    

