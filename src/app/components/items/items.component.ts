/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 1:59 PM
 */

import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../entities/items';

@Component({
  selector   : 'app-items',
  templateUrl: './items.component.html',
  styleUrls  : ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input() items: Items;

  constructor() { }

  ngOnInit() {}

}
