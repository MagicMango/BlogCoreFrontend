import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryListComponent } from './blogentry-list.component';

describe('BlogentryListComponent', () => {
  let component: BlogentryListComponent;
  let fixture: ComponentFixture<BlogentryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogentryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogentryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
