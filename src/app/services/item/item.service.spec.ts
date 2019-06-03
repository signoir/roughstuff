/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 2:23 PM
 */

import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });
});
