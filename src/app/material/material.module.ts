import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule, MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const moduleList = [
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatOptionModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...moduleList
  ],
  exports: [
    ...moduleList
  ]
})
export class MaterialModule { }
