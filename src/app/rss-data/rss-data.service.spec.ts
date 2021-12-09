import { TestBed } from '@angular/core/testing';

import { RssDataService } from './rss-data.service';

describe('RssDataService', () => {
  let service: RssDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RssDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
