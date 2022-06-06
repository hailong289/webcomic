import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEditCategoryComponent } from './form-create-edit-category.component';

describe('FormCreateEditCategoryComponent', () => {
  let component: FormCreateEditCategoryComponent;
  let fixture: ComponentFixture<FormCreateEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEditCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
