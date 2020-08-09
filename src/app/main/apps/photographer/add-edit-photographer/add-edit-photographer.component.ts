import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'app/common/services/api.service';
import { NotificationService } from 'app/common/services/notification.service';
import { Router } from '@angular/router';
import { ValidateInteger } from 'app/common/validation/custom-form-froup.validator';
import { StatusList } from 'app/common/constant/status-list.constant';

@Component({
  selector: 'app-add-edit-photographer',
  templateUrl: './add-edit-photographer.component.html',
  styleUrls: ['./add-edit-photographer.component.scss']
})
export class AddEditPhotographerComponent implements OnInit {
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
      firstName: ['', Validators.required],
      lastName: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: [, [Validators.required, Validators.minLength(7), Validators.maxLength(15), ValidateInteger]],
      status: [this.statusList[0].id, Validators.required],
      colorCode: ['', [Validators.maxLength(6), Validators.minLength(6)]],
      unique_url: ['', Validators.required],
    });
  }
  async formSubmit() {
    try {
      this.editForm.disable();
      const photographerData = { ...this.editForm.value };
      photographerData.full_name = photographerData.firstName + ' ' + photographerData.lastName;
      const addPhotoGrapherResponse = await this._apiService.addAdmin(photographerData);
      console.log('addPhotoGrapherResponse', addPhotoGrapherResponse);
      this.editForm.enable();
      if (!addPhotoGrapherResponse.status) {

      } else {
        this._notificationService.openSnakBar(addPhotoGrapherResponse.message, 'success');
        this._router.navigate(['/admin']);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

}

