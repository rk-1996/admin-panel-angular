import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-photographer',
  templateUrl: './add-edit-photographer.component.html',
  styleUrls: ['./add-edit-photographer.component.scss']
})
export class AddEditPhotographerComponent implements OnInit {
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
      status: ['', Validators.required],
      colorCode: ['', Validators.required],
      unique_url: ['', Validators.required],
    });
  }

}

