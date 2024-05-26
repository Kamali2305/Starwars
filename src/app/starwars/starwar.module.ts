import { NgModule } from "@angular/core";
import { StarwarUpsertformComponent } from "./starwar-upsertform/starwar-upsertform.component";
import { StarwarComponent } from "./starwar/starwar.component";
import { StarwarsComponent } from "./starwars.component";
import { StarwarFilmcardComponent } from "./starwar-filmcard/starwar-filmcard.component";
import { CardStyleDirective } from "../_directive/card-style.directive";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/spinner/shared.module";
import { StarwarService } from "../_services/starwar.service";


@NgModule({
    declarations: [
        StarwarUpsertformComponent,
    StarwarComponent,
    StarwarsComponent,
    StarwarFilmcardComponent,
    
    CardStyleDirective,
    ],
    imports: [ReactiveFormsModule, SharedModule],
    providers:[StarwarService],
    exports: [StarwarsComponent],
})
export class StarwarModule{

}