import { TestBed } from '@angular/core/testing';

import { AngularEventsService } from './angular-events.service';

describe('AngularEventsService', () => {
  let service: AngularEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
