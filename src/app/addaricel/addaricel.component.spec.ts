import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaricelComponent } from './addaricel.component';

describe('AddaricelComponent', () => {
  let component: AddaricelComponent;
  let fixture: ComponentFixture<AddaricelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaricelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaricelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
