/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 2:41 PM
 */

/*
 * items.ts
 * Created by @anonymoussc on 06/02/2019 1:40 PM.
 */

import { Item } from './Item';

// export type Items = Item[];
export interface Items {
  offset: number;
  limit: number;
  total?: number;
  results: Item[];
}
