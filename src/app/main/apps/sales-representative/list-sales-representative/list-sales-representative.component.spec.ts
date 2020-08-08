import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesRepresentativeComponent } from './list-sales-representative.component';

describe('ListSalesRepresentativeComponent', () => {
  let component: ListSalesRepresentativeComponent;
  let fixture: ComponentFixture<ListSalesRepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSalesRepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalesRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
