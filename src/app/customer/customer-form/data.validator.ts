// import { AbstractControl } from "@angular/forms";

// export function DataValidator(control: AbstractControl) : { [key: string] : boolean} | null
// {
//     const licenses_alloted = control.get('licenses_alloted');
//     const licenses_generated = control.get('licenses_generated');
//     return licenses_alloted && licenses_generated && 
//            licenses_alloted.value < licenses_generated.value ?
//            {
//             'mismatch' : true
//            } : null;
// }

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const DataValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const licensesAllotted = control.get('licensesAlloted')?.value;
  const licensesGenerated = control.get('licensesGenerated')?.value;

  // Validation logic: Check if generated licenses exceed allotted licenses
  if (licensesGenerated > licensesAllotted) {
    return { mismatch: true };
  }
  return null; // Return null if validation passes
};

