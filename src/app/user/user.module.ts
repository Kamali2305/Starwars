import { NgModule } from "@angular/core";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/spinner/shared.module";

@NgModule({

    declarations:[UserAuthComponent],
    imports: [FormsModule, SharedModule],

})

export class UserModule{}