import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryUpdateComponent } from './blogentry-update.component';

describe('BlogentryUpdateComponent', () => {
  let component: BlogentryUpdateComponent;
  let fixture: ComponentFixture<BlogentryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogentryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogentryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
