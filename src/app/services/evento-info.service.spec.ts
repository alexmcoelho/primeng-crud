import { TestBed, inject } from '@angular/core/testing';

import { EventoInfoService } from './evento-info.service';

describe('EventoInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoInfoService]
    });
  });

  it('should be created', inject([EventoInfoService], (service: EventoInfoService) => {
    expect(service).toBeTruthy();
  }));
});
