import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditBlogmanagementComponent } from './addedit-blogmanagement.component';

describe('AddeditBlogmanagementComponent', () => {
  let component: AddeditBlogmanagementComponent;
  let fixture: ComponentFixture<AddeditBlogmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditBlogmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditBlogmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
