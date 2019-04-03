import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoviePage } from './edit-movie.page';

describe('EditMoviePage', () => {
  let component: EditMoviePage;
  let fixture: ComponentFixture<EditMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
