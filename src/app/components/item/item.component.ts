/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:27 AM
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styleUrls  : ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Item;
  @Output() toOpen  = new EventEmitter<string>();
  @Output() toShare = new EventEmitter<Item>();

  openPage(url: string) {
    this.toOpen.emit(url);
  }

  share() {
    this.toShare.emit(this.item);
  }
}
