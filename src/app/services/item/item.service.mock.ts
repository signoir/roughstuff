/*
 * item.service.mock.ts
 * Created by @anonymoussc on 06/03/2019 5:01 PM.
 */

/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/4/19 3:32 PM
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as range from 'lodash.range';
import { Items } from '../../entities/items';
import { Item } from '../../entities/item';
import { ItemService } from './item.service';

@Injectable()
export class ItemServiceMock extends ItemService {
  load(offset?: number, limit?: number): Observable<Items> {
    const results: Item[] = range(offset, offset + limit).map(index => ({
      id   : index,
      title: `Item ${index + 1}`,
      url  : `http://www.example.com/item${index}`,
      by   : `demo`,
      time : new Date().getTime() / 1000,
      score: index,
    }));
    return of({
      offset,
      limit,
      total: offset + limit,
      results,
    });
  }
}
