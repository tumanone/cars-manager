import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MapFormGroupPipe} from "./pipes/map-form-group.pipe";
import {ValidateFormArrayControlPipe} from "./pipes/validate-form-array-control.pipe";


@NgModule({
  declarations: [
    MapFormGroupPipe,
    ValidateFormArrayControlPipe
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MapFormGroupPipe,
    ValidateFormArrayControlPipe
  ]
})
export class SharedModule { }
