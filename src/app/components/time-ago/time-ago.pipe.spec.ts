/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoPipe();
    expect(pipe).toBeTruthy();
  });
});
