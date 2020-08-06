import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {
  pageType: string;

  userForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.pageType = 'add';
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
  }
  onFileInput(event) {
    console.log('TEST');
  }

}
