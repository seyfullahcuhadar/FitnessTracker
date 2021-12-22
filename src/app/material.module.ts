import { MatIconModule } from '@angular/material/icon';
import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports:[MatListModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,FormsModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule],
    exports:[MatListModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,FormsModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule]
})
export class MaterialModule{

}
