import { TestBed } from '@angular/core/testing';

import { ToggleStyleService } from './toggle-style.service';

describe('ToggleStyleService', () => {
  let service: ToggleStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
