import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../_guards/auth.guard";
import { StarwarUpsertformComponent } from "./starwar-upsertform/starwar-upsertform.component";
import { StarwarComponent } from "./starwar/starwar.component";
import { NgModule } from "@angular/core";




const starwarRoutes: Routes = [ {
    
    path: 'starwar-upsertform',
    component: StarwarUpsertformComponent,
    },
    {
      path: 'starwar-upsertform/:id',
      component: StarwarUpsertformComponent,
      },
    {
      path: 'starwar/:id',
      component: StarwarComponent,
      canActivate: [authGuard],
    },

    

    ];
    @NgModule({
        imports:[RouterModule.forChild(starwarRoutes)],
        exports:[RouterModule],
    })

export class StarwarRoutingModule{}