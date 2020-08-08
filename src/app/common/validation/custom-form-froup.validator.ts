import { AbstractControl, Validators } from '@angular/forms';
import { uniqWith, isEqual } from 'lodash';

export function ValidateString(control: AbstractControl) {
  const data = Validators.required(control);
  if (data === null) {
    let value = control.value;
    if (value) {
      value = value.trim();
      if (value.length > 0) {
        return null;
      }
    }
    return { invalidValue: 'Value Is Invalid' };
  } else {
    return data;
  }
}

export function ValidateNumber(control: AbstractControl) {
  const data = Validators.required(control);
  if (data === null) {
    const number = /^[.\d]+$/.test(control.value) ? +control.value : NaN;
    if (number !== number) {
      return { invalidValue: 'Value Is Invalid' };
    }
    return null;
  } else {
    return data;
  }
}

export function ValidateInteger(control: AbstractControl) {
  const data = Validators.required(control);
  if (data === null) {
    const number = /^[\d]+$/.test(control.value) ? +control.value : NaN;
    if (number !== number) {
      return { invalidValue: 'Value Is Invalid' };
    }
    return null;
  } else {
    return data;
  }
}

export function ValidateHours(control: AbstractControl) {
  const hoursRegex = /^([01]?[0-9]|2[0-4])([\.]?[0-5][0-9])?$/;
  if (!control.value) {
    return null;
  }
  if (hoursRegex.test(control.value)) {
    const value = control.value.split('.');
    if (value[0] === '24') {
      const minuteValue = +value[1];
      if (minuteValue > 0) {
        return { invalidValue: 'Value Is Invalid' };
      }
    }
    return null;
  } else {
    return { invalidValue: 'Value Is Invalid' };
  }
}

export function validOnlyString(control: AbstractControl) {
  const data = Validators.required(control);
  if (data === null) {
    const value = control.value;
    let letters = /^[a-zA-Z][a-zA-Z0-9_]*/;
    if (value.match(letters)) {
      return null;
    }
    else {
      return { invalidStringValue: 'Value Is Invalid' };
    }
  }
}

export function ValidateDuplicateRecordInArray(control: AbstractControl) {
  const values = control.value;
  const uniqueCount = uniqWith(values, isEqual);
  if (control.value.length !== uniqueCount.length) {
    return { duplicateValue: 'Duplicate Value' };
  } else {
    return null;
  }
}
