import { TestBed } from '@angular/core/testing';

import { TelecommandService } from './telecommand.service';

describe('TelecommandService', () => {
  let service: TelecommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelecommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
