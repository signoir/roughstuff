/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:27 AM
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from '../../models/items';
import { Item } from '../../models/item';

@Component({
  selector   : 'app-items',
  templateUrl: './items.component.html',
  styleUrls  : ['./items.component.scss']
})
export class ItemsComponent {
  @Input() items: Items;
  @Output() toOpen  = new EventEmitter<string>();
  @Output() toShare = new EventEmitter<Item>();

  openPage(url) {
    this.toOpen.emit(url);
  }

  share(item) {
    this.toShare.emit(item);
  }
}
