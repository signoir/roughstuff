/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 1:59 PM
 */

import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../entities/Item';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styleUrls  : ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

}
