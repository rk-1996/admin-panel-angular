import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../../common/services/api.service';
import { NotificationService } from '../../../../common/services/notification.service';
import { Router } from '@angular/router';
import { StatusList } from '../../../../common/constant/status-list.constant';
import { ValidateInteger, ValidateString } from '../../../../common/validation/custom-form-froup.validator';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {
  pageType: string;
  editForm: FormGroup;
  statusList = StatusList;
  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _notificationService: NotificationService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.pageType = 'add';
    this.editForm = this._formBuilder.group({
      firstName: ['', ValidateString],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      reference_id: [],
      mobile_number: [, [Validators.required, Validators.minLength(7), Validators.maxLength(15), ValidateInteger]],
      website: [''],
      brokrage_name: [],
      broker_logo: [],
      group_name: [],
      group_logo: [],
      status: [this.statusList[0].id, Validators.required],
      adtional_logo: [],
      unique_url: ['', ValidateString]
    });
  }

  async formSubmit() {
    try {
      this.editForm.disable();
      const userData = { ...this.editForm.value };
      userData.full_name = userData.firstName + ' ' + userData.lastName;
      const addCustomerResponse = await this._apiService.addCustomer(userData);
      console.log('addCustomerResponse', addCustomerResponse);
      this.editForm.enable();
      if (!addCustomerResponse.status) {
        const validationErrors = addCustomerResponse['data'];
        Object.keys(validationErrors).forEach(prop => {
          const formControl = this.editForm.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: validationErrors[prop][0]
            });
          }
        });
      } else {
        this._notificationService.openSnakBar(addCustomerResponse.message, 'success');
        this._router.navigate(['/customer']);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  onFileChange(event, fieldName) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.editForm.patchValue({
        [fieldName]: file
      });
    }
  }

}
