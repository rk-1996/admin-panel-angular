import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPhotographerComponent } from './add-edit-photographer.component';

describe('AddEditPhotographerComponent', () => {
  let component: AddEditPhotographerComponent;
  let fixture: ComponentFixture<AddEditPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
