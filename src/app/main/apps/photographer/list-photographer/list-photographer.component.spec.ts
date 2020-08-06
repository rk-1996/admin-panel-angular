import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotographerComponent } from './list-photographer.component';

describe('ListPhotographerComponent', () => {
  let component: ListPhotographerComponent;
  let fixture: ComponentFixture<ListPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
