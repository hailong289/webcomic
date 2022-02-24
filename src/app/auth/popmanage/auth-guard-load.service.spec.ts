import { TestBed } from '@angular/core/testing';

import { AuthGuardLoadService } from './auth-guard-load.service';

describe('AuthGuardLoadService', () => {
  let service: AuthGuardLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
