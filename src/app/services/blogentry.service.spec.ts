import { TestBed } from '@angular/core/testing';

import { BlogentryService } from './blogentry.service';

describe('BlogentryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogentryService = TestBed.get(BlogentryService);
    expect(service).toBeTruthy();
  });
});
