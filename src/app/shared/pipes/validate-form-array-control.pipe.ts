import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";

@Pipe({
  name: 'validateFormArrayControl',
  pure: false
})
export class ValidateFormArrayControlPipe implements PipeTransform {

  transform(
    arrayControl: AbstractControl,
    nestedControl: string,
    errorName: string,
    index: number
  ): boolean {
    const control = ((arrayControl as FormGroup)
      .controls[index] as FormGroup)
      .controls[nestedControl];

    return control?.hasError(errorName) && control?.touched;
  }
}
