import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 

  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule
 
} from '@angular/material';

@NgModule({
  declarations:
  [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule 
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule 
  ]
})

export class MaterialModule { }
