/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
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
