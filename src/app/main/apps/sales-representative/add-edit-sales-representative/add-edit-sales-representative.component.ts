import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StatusList } from 'app/common/constant/status-list.constant';
import { ApiService } from 'app/common/services/api.service';
import { NotificationService } from 'app/common/services/notification.service';
import { Router } from '@angular/router';
import { ValidateInteger } from 'app/common/validation/custom-form-froup.validator';
import { ValidateString } from '../../../../common/validation/custom-form-froup.validator';

@Component({
  selector: 'app-add-edit-sales-representative',
  templateUrl: './add-edit-sales-representative.component.html',
  styleUrls: ['./add-edit-sales-representative.component.scss']
})
export class AddEditSalesRepresentativeComponent implements OnInit {
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
      lastName: ['',],
      username: ['', ValidateString],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: [, [Validators.required, Validators.minLength(7), Validators.maxLength(15), ValidateInteger]],
      profitSharePercentage: [''],
      status: [this.statusList[0].id, Validators.required],
      photo: [],
      unique_url: ['', Validators.required],
      illinoisEmail: ['', [Validators.email]],
      assign_as_sales_manager: new FormControl(false)
    });
  }

  async formSubmit() {
    try {
      this.editForm.disable();
      const salesReprentativeData = { ...this.editForm.value };
      salesReprentativeData.full_name = salesReprentativeData.firstName + ' ' + salesReprentativeData.lastName;
      const apiResponse = await this._apiService.addSalesRepresentative(salesReprentativeData);
      console.log('apiResponse', apiResponse);
      this.editForm.enable();
      if (!apiResponse.status) {
        const validationErrors = apiResponse['data'];
        Object.keys(validationErrors).forEach(prop => {
          const formControl = this.editForm.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: validationErrors[prop][0]
            });
          }
        });
      } else {
        this._notificationService.openSnakBar(apiResponse.message, 'success');
        this._router.navigate(['/admin']);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.editForm.patchValue({
        photo: file
      });
    }
  }

}

