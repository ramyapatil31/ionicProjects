import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviesPage } from './add-movies.page';

describe('AddMoviesPage', () => {
  let component: AddMoviesPage;
  let fixture: ComponentFixture<AddMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
