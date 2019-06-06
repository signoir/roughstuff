/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:27 AM
 */

import { Component, Input } from '@angular/core';
import { Items } from '../../models/items';

@Component({
  selector   : 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls  : ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() items: Items;
}
