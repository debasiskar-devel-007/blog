import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib.component';

describe('ListingBlogmanagementlibComponent', () => {
  let component: ListingBlogmanagementlibComponent;
  let fixture: ComponentFixture<ListingBlogmanagementlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBlogmanagementlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBlogmanagementlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
