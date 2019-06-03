/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/2/19 2:46 PM
 */

/*
 * time-ago.pipe.ts
 * Created by @anonymoussc on 06/02/2019 2:40 PM.
 */

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(time: number): string {
    return moment.duration(moment().diff(moment(time * 1000))).humanize();
  }
}
