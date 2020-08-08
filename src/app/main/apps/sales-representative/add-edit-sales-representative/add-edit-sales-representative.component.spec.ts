import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalesRepresentativeComponent } from './add-edit-sales-representative.component';

describe('AddEditSalesRepresentativeComponent', () => {
  let component: AddEditSalesRepresentativeComponent;
  let fixture: ComponentFixture<AddEditSalesRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSalesRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSalesRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
