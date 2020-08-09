import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../../common/services/api.service';
import { StatusList } from '../../../../common/constant/status-list.constant';
import { NotificationService } from '../../../../common/services/notification.service';
import { Router } from '@angular/router';
import { ValidateInteger } from '../../../../common/validation/custom-form-froup.validator';

@Component({
  selector: 'app-add-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss']
})
export class AddEditAdminComponent implements OnInit {
  pageType: string;
  adminForm: FormGroup;
  statusList = StatusList;
  fileName: any
  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _notificationService: NotificationService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.pageType = 'add';
    this.adminForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: [, [Validators.required, Validators.minLength(7), Validators.maxLength(15), ValidateInteger]],
      profitSharePercentage: [''],
      status: [this.statusList[0].id, Validators.required],
      photo: [],
      unique_url: ['', Validators.required],
      illinoisEmail: ['', [Validators.email]],
    });
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.adminForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log('name', name);
        invalid.push(name);
      }
    }
    return invalid;
  }
  async formSubmit() {
    try {
      this.adminForm.disable();
      const adminData = { ...this.adminForm.value };
      adminData.full_name = adminData.firstName + ' ' + adminData.lastName;
      const addAdminResponse = await this._apiService.addAdmin(adminData);
      console.log('addAdminResponse', addAdminResponse);
      this.adminForm.enable();
      if (!addAdminResponse.status) {

      } else {
        this._notificationService.openSnakBar(addAdminResponse.message, 'success');
        this._router.navigate(['/admin']);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      console.log(file.name)
      this.fileName = file.name
      this.adminForm.patchValue({
        photo: file
      });
    }
  }

}

