import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./start/home/home.component";

import { NotFoundComponent } from "./start/not-found/not-found.component";
import { UserAuthComponent } from "./user/user-auth/user-auth.component";

import { StarwarRoutingModule } from "./starwars/starwar-routing.module";

const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path:'user-auth',
      component: UserAuthComponent
    },

    
    {
      path: 'not-found',
      component: NotFoundComponent,
    },
    {
      path: '**',
      redirectTo: 'not-found',
    }
  ];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes),StarwarRoutingModule],
    exports: [RouterModule],

})
export class AppRoutingModeule{}