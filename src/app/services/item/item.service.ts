/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 2:46 PM
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from '../../entities/items';

@Injectable()
export class ItemService {

  constructor() { }

  load(offset: number, limit: number): Observable<Items> {
    return of({
      offset : 0,
      limit  : 0,
      total  : 0,
      results: [],
    });
  }
}
