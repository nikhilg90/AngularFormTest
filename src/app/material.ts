import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

const angularMaterialModules = [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
  ];


@NgModule({
    imports: [
      CommonModule,
      ...angularMaterialModules
    ],
    exports: [
      ...angularMaterialModules
    ],
  })
  
  export class MaterialModule { }