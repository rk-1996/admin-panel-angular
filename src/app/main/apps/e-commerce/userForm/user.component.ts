// import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { UploadService } from  './../services/upload.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  pageType: string;

  userForm: FormGroup;

  // Horizontal Stepper
  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _formBuilder: FormBuilder
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Reactive Form
    this.pageType = 'add'
    this.userForm = this._formBuilder.group({
      company: [
        {
          value: 'Google',
          disabled: true
        }, Validators.required
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      reference: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      brokrage_name: ['', Validators.required],
      broker_logo: ['', Validators.required],
      group_name: ['', Validators.required],
      group_logo: ['', Validators.required],
      status: ['', Validators.required],
      adtional_logo: ['', Validators.required],
      unique_url: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]],
      country: ['', Validators.required]
    });

    // Horizontal Stepper form steps
    this.horizontalStepperStep1 = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.horizontalStepperStep2 = this._formBuilder.group({
      address: ['', Validators.required]
    });

    this.horizontalStepperStep3 = this._formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]]
    });

    // Vertical Stepper form stepper
    this.verticalStepperStep1 = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.verticalStepperStep2 = this._formBuilder.group({
      address: ['', Validators.required]
    });

    this.verticalStepperStep3 = this._formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Finish the horizontal stepper
   */
  finishHorizontalStepper(): void {
    alert('You have finished the horizontal stepper!');
  }

  /**
   * Finish the vertical stepper
   */
  finishVerticalStepper(): void {
    alert('You have finished the vertical stepper!');
  }

}
