import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss']
})
export class AddEditAdminComponent implements OnInit {
  pageType: string;

  userForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.pageType = 'add';
    this.userForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      profitSharePercentage: ['', Validators.required],
      status: ['', Validators.required],
      profilePhoto: ['', Validators.required],
      unique_url: ['', Validators.required],
      illinoisEmail: ['', Validators.required],
    });
  }
  onFileInput(event) {
    console.log('TEST');
  }

}

