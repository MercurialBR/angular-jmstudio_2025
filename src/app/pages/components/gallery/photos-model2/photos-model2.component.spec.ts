import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosModel2Component } from './photos-model2.component';

describe('PhotosModel2Component', () => {
  let component: PhotosModel2Component;
  let fixture: ComponentFixture<PhotosModel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosModel2Component]
    });
    fixture = TestBed.createComponent(PhotosModel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
