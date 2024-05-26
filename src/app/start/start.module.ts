import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HeroComponent } from "./hero/hero.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/spinner/shared.module";
import { StarwarModule } from "../starwars/starwar.module";



@NgModule({
    declarations: [
        HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    HeroComponent,
    MainComponent,
    FooterComponent
    ],

    imports: [RouterModule,StarwarModule, SharedModule],
    exports:[MainComponent]
})

export class StartModule{}