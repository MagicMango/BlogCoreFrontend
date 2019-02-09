import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryCreateComponent } from './blogentry-create.component';

describe('BlogentryCreateComponent', () => {
  let component: BlogentryCreateComponent;
  let fixture: ComponentFixture<BlogentryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogentryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogentryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
