import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 

  MatToolbarModule,
  MatButtonModule,
  MatInputModule
 
} from '@angular/material';

@NgModule({
  declarations:
  [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule 
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule 
  ]
})

export class MaterialModule { }
