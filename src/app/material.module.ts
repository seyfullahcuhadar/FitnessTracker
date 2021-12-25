import { MatIconModule } from '@angular/material/icon';
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatProgressSpinnerModule,MatSelectModule,MatCardModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
  exports: [MatProgressSpinnerModule,MatSelectModule,MatCardModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule]
})
export class MaterialModule {

}
